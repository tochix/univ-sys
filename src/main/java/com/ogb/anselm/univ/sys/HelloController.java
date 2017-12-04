package com.ogb.anselm.univ.sys;

import java.io.IOException;
import java.util.stream.Collectors;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ogb.anselm.univ.sys.University;

/*
import hello.storage.StorageFileNotFoundException;
import hello.storage.StorageService;
*/

@Controller
public class HelloController {

    private final University university;

    @Autowired
    public HelloController() throws CourseException, IOException {
    		university = new University("Carleton");
    		/*
    		Course course = new Course(false, 1, 3, false, 26, "OOP", 231321);
    		Course course1 = new Course(false, 1, 3, false, 26, "Java", 231324);
    		
    		Student student = new Student("Denzel", 1234, 12, true);
    		Student student2 = new Student("Washington", 4321, 14, false);
    		
    		university.enrolStudent(student);
    		university.enrolStudent(student2);
    		university.addCourse(course1);
    		university.addCourse(course);
    		*/
    }

    @GetMapping("/")
    public String welcome(Model model, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie) throws IOException {
    		
    		model.addAttribute("login", loginCookie);
    	
    		model.addAttribute("message", "");
    		model.addAttribute("courses", university.courses());
    		model.addAttribute("students", university.students());
    		
        return "index";
    }
    
    @PostMapping("/login")
    public String login(Model model, HttpServletRequest request, 
    		HttpServletResponse response) throws IOException {
    	
    		String username = request.getParameter("username");
    		String password = request.getParameter("password");
    		
    		if (username.equals("clerk") && password.equals("clrkio")) {
    			response.addCookie(new Cookie("login", "clerk"));
    		} else {
    			model.addAttribute("errMessage", "Wrong Credentials");
    			return "index";
		}
    		
        return "redirect:/";
    }
    
    @PostMapping("/course")
    public String course(Model model, HttpServletRequest request, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie) 
    				throws IOException, CourseException {
    	
    		if (!loginCookie.equals("clerk")) {
    			model.addAttribute("errMessage", "You're not allowed to create courses");
    			return "index";
    		}
    		
    		String title = request.getParameter("course_title");
    		int code = Integer.parseInt(request.getParameter("course_code"));
    		int capacity = Integer.parseInt(request.getParameter("course_capacity"));
    		int numAssignments = Integer.parseInt(request.getParameter("num_assignments"));
    		int numMidterms = Integer.parseInt(request.getParameter("num_midterms"));
    		String hasFinalStr = request.getParameter("has_final");
    		boolean hasFinal = (hasFinalStr.equals("yes")) ? true : false;
    		
    		Course course = new Course(false, numMidterms, numAssignments, hasFinal, capacity, title, code);
    		university.addCourse(course);
    		
        return "redirect:/";
    }
    
    @GetMapping("/delete-course/{code:.+}")
    public String deleteCourse(Model model, HttpServletRequest request, 
    		@CookieValue(value = "login", defaultValue = "") String loginCookie,
    		@PathVariable String code,
    		RedirectAttributes redirectAttributes) 
    				throws IOException, CourseException, UniversityException {
    	
    		if (!loginCookie.equals("clerk")) {
    			model.addAttribute("errMessage", "You're not allowed to delete courses");
    			return "index";
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


}
