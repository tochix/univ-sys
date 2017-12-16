package com.ogb.anselm.univ.sys;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.bcel.generic.NEW;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ogb.anselm.univ.sys.University;

@Controller
public class HelloController {

    private final University university;
    private PromptHandler promptHandler;
    private HashMap<String, String> userLogins;
    private final Properties properties = new Properties();

    @Autowired
    public HelloController() throws CourseException, IOException {
    		university = new University("Carleton");
    		this.readInUserLogins();
    }

    @GetMapping("/")
    public String welcome(Model model, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		@CookieValue(value = "studentId", defaultValue = "") String studentIdCookie) 
    				throws NumberFormatException, Exception {
    		
    		model.addAttribute("login", loginCookie);
    		model.addAttribute("studentId", studentIdCookie);
    	
    		model.addAttribute("message", "");
    		model.addAttribute("courses", university.courses());
    		model.addAttribute("students", university.students());
    		
    		String currEvt = (promptHandler == null) ? "" : promptHandler.currentEvent.name();
    		model.addAttribute("currentEvent", currEvt);
    		//List<Student> stCourses=null;
    		//model.addAttribute("studentCourses", stCourses );
    		
    		if (studentIdCookie != null && !studentIdCookie.equals("")) {
    			Student student = university.getStudentByNumber(Integer.parseInt(studentIdCookie));
    			model.addAttribute("studentCourses", student.currentCourses());
    		}
    		
        return "index";
    }
    
    @GetMapping("/start-pre-semester")
    public String startPreSemester( 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		RedirectAttributes redirectAttributes) 
    				throws NumberFormatException, Exception {
    	
    		if (!loginCookie.equals("clerk")) {
			redirectAttributes.addFlashAttribute("errMessage", "You're not allowed to start pre-semester event.");
			return "redirect:/";
		}
    		
    		promptHandler = new PromptHandler();
    		promptHandler.startEventsThread();
    		
    		return "redirect:/";
    }
    
    @PostMapping("/login")
    public String login(Model model, HttpServletRequest request, 
    		HttpServletResponse response, 
    		RedirectAttributes redirectAttributes) throws IOException {
    	
    		String username = request.getParameter("username");
    		String password = request.getParameter("password");
    		
    		String userPasswd = this.userLogins.get(username);
    		
    		if (userPasswd != null && userPasswd.equals(password)) {
    			response.addCookie(new Cookie("login", username));
    		} else {
    			if (this.getStudentById(username)) {
    				userPasswd = this.userLogins.get("student");
    				
    				if (userPasswd.equals(password)) {
    					response.addCookie(new Cookie("login", "student"));
    					response.addCookie(new Cookie("studentId", username));
    				}
    			} else {
    				redirectAttributes.addFlashAttribute("errMessage", "Wrong Credentials");
			}
		}
    		
        return "redirect:/";
    }
   
	@PostMapping("/course")
    public String course(Model model, HttpServletRequest request, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		RedirectAttributes redirectAttributes) 
    				throws UniversityException, CourseException, IOException {
    	
    		if (!loginCookie.equals("clerk")) {
    			redirectAttributes.addFlashAttribute("errMessage", "You're not allowed to create courses");
    			return "redirect:/";
    		}
    		
    		if (hasPastEvent(EventCodes.PRE_SEMESTER_END)) {
    			redirectAttributes.addFlashAttribute("errMessage", "Deadline has past for creating courses");
    			return "redirect:/";
    		}
    		
    		String title = request.getParameter("course_title");
    		int code = Integer.parseInt(request.getParameter("course_code"));
    		int capacity = Integer.parseInt(request.getParameter("course_capacity"));
    		int numAssignments = Integer.parseInt(request.getParameter("num_assignments"));
    		int numMidterms = Integer.parseInt(request.getParameter("num_midterms"));
    		String hasFinalStr = request.getParameter("has_final");
    		boolean hasFinal = (hasFinalStr.equals("yes")) ? true : false;
    		
    		university.createCourse(title, capacity, code, false, numMidterms, numAssignments, hasFinal);
    		
        return "redirect:/";
    }

	@GetMapping("/delete-course/{code:.+}")
    public String deleteCourse(Model model, HttpServletRequest request, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		@PathVariable String code,
    		RedirectAttributes redirectAttributes) 
    				throws IOException, CourseException, UniversityException {
    	
    		if (!loginCookie.equals("clerk")) {
    			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to delete courses");
    			return "redirect:/";
    		}
    		
    		int courseCode = Integer.parseInt(code);
    		boolean courseExists = false;
    		
    		for (int i = 0; i < university.courses().size(); i++) {
    			Course course = university.courses().get(i);
    			
    			if (course.code() == courseCode) {
    				courseExists = true;
    				university.destroyCourse(course);
    			}
    		}
    		
    		if (!courseExists) {
    			redirectAttributes.addFlashAttribute("errCourseMessage", "Course does not exist. Cannot delete course!");
    		} else {
    			redirectAttributes.addFlashAttribute("successCourseMessage", "Course with code: "+ courseCode + " has been deleted");
		}
    		
        return "redirect:/";
    }
    
    @PostMapping("/student")
    public String student(Model model, HttpServletRequest request, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		RedirectAttributes redirectAttributes) 
    				throws UniversityException, CourseException, IOException {
    	
    		if (!loginCookie.equals("clerk")) {
    			redirectAttributes.addFlashAttribute("errMessage", "You're not allowed to create students");
    			return "redirect:/";
    		}
    		
    		if (hasPastEvent(EventCodes.PRE_SEMESTER_END)) {
    			redirectAttributes.addFlashAttribute("errMessage", "Deadline has past for creating students");
    			return "redirect:/";
    		}
    		
    		String name = request.getParameter("student_name");
    		int number = Integer.parseInt(request.getParameter("student_number"));
    		int deptCode = Integer.parseInt(request.getParameter("dept_code"));
    		String isFullTimeStr = request.getParameter("is_fulltime");
    		boolean isFullTime = (isFullTimeStr.equals("yes")) ? true : false;
    		
    		university.createStudent(name, number, deptCode, isFullTime);
        return "redirect:/";
    }
    
    @GetMapping("/delete-student/{studentNumber:.+}")
    public String deleteStudent(Model model, HttpServletRequest request, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		@PathVariable String studentNumber,
    		RedirectAttributes redirectAttributes) 
    				throws IOException, CourseException, UniversityException {
    	
    		if (!loginCookie.equals("clerk")) {
    			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to delete students");
    			return "redirect:/";
    		}
    		
    		int sNumber = Integer.parseInt(studentNumber);
    		university.removeStudent(sNumber);
    		
    		redirectAttributes.addFlashAttribute("successStudentMessage", "Student with number: "+ sNumber + " has been deleted");
        return "redirect:/";
    }
    
    @GetMapping("/register-course/{courseCode:.+}/{studentNumber:.+}")
    public String registerCourse(@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		@CookieValue(value = "studentId", defaultValue = "") String sIdCookie,
    		@PathVariable String courseCode,
    		@PathVariable String studentNumber,
    		RedirectAttributes redirectAttributes) throws NumberFormatException, Exception {
    	
    		if (!loginCookie.equals("student")) {
    			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to register for courses");
    			System.out.println("not student");
    			return "redirect:/";
    		}
    		
    		if (!sIdCookie.equals(studentNumber)) {
    			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to register for another student");
    			System.out.println("wrong student");
    			return "redirect:/";
    		}
    		
    		if (hasPastEvent(EventCodes.STUDENT_REGISTRATION_END)) {
    			redirectAttributes.addFlashAttribute("errMessage", "Deadline has past for registering for courses");
    			return "redirect:/";
    		}
    		
    		Course course = university.getCourseByCode(Integer.parseInt(courseCode));
    		Student student = university.getStudentByNumber(Integer.parseInt(studentNumber));
    		
    		System.out.println("b4 register");
    		this.university.registerStudentForCourse(course, student);
    		System.out.println("after register");
    		
    		return "redirect:/";
    }
    
    @GetMapping("/deregister-course/{courseCode:.+}/{studentNumber:.+}")
    public String deregisterCourse(@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		@CookieValue(value = "studentId", defaultValue = "") String sIdCookie,
    		@PathVariable String courseCode,
    		@PathVariable String studentNumber,
    		RedirectAttributes redirectAttributes) throws NumberFormatException, Exception {
   
    		if (!loginCookie.equals("student")) {
			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to deregister for courses");
		}
    		
    		if (!sIdCookie.equals(studentNumber)) {
			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to deregister for another student");
		}
    		
    		if (hasPastEvent(EventCodes.COURSE_DEREGISTRATION_DEADLINE)) {
    			redirectAttributes.addFlashAttribute("errMessage", "Deadline has past for de-registering from course");
    			return "redirect:/";
    		}
      	
    		Course course = university.getCourseByCode(Integer.parseInt(courseCode));
		Student student = university.getStudentByNumber(Integer.parseInt(studentNumber));
		
		student.deRegisterCourse(course);
    		return "redirect:/";
    	
    }
    
    @GetMapping("/drop-course/{courseCode:.+}/{studentNumber:.+}")
    public String dropCourse(@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		@CookieValue(value = "studentId", defaultValue = "") String sIdCookie,
    		@PathVariable String courseCode,
    		@PathVariable String studentNumber,
    		RedirectAttributes redirectAttributes) throws NumberFormatException, Exception {
    	
    		if (!loginCookie.equals("student")) {
			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to drop courses");
		}
    		
    		if (!sIdCookie.equals(studentNumber)) {
			redirectAttributes.addFlashAttribute("errCourseMessage", "You're not allowed to drop courses for another student");
		}
    		
    		if (hasPastEvent(EventCodes.DROP_COURSE_DEADLINE)) {
    			redirectAttributes.addFlashAttribute("errMessage", "Deadline has past for dropping course");
    			return "redirect:/";
    		}
    		
      	Course course = university.getCourseByCode(Integer.parseInt(courseCode));
		Student student = university.getStudentByNumber(Integer.parseInt(studentNumber));
		student.dropCourse(course);
    		
		return "redirect:/";
    }
    
    @GetMapping("/gv/{filename:.+}")
    public String getVars(Model model, @PathVariable String filename) throws IOException {
    		model.addAttribute("message", filename);
        return "hello";
    }
    
    @GetMapping("/p")
    public @ResponseBody String getParams(@RequestParam("foo") String foo) {
    		return "Mapped by path + method + presence of query parameter! (MappingController) - foo = "
    	           + foo;
    }
    
    @PostMapping("/q")
    public @ResponseBody String getParamsQ(@RequestParam("foo") String foo, 
    		@RequestParam(name="id", required=false) Integer id,
    		HttpServletRequest request) {
    		return "- foo = " + foo + "; id = " + id + "; pId = " + request.getParameter("pId");
    }
    
    private boolean getStudentById(String studentNumber) {
		int sNumber = Integer.parseInt(studentNumber);
		
		for (Student student : university.students()) {
			if (student.studentNumber() == sNumber) {
				return true;
			}
		}
		
		return false;
    }
    
    private boolean hasPastEvent(EventCodes event) {
    		if (promptHandler == null) {
    			return false;
    		}
    		
		if (promptHandler.currentEvent.getCode() <= event.getCode()) {
			return false;
		}
			
		return true;
	}

    private void readInUserLogins() throws IOException {
		userLogins = new HashMap<String, String>();
		FileInputStream fis = new FileInputStream("config.properties");
		properties.load(fis);
		fis.close();
		
		String[] logins = properties.getProperty("USER_LOGINS").split("\\|");
		
		for (String loginStr : logins) {
			String[] loginToken = loginStr.split(":");
			
			if (loginToken.length == 2) {
				this.userLogins.put(loginToken[0], loginToken[1]);
			}
		}
	}
}
