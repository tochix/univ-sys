package com.ogb.anselm.univ.sys;

import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.Socket;
import java.sql.Time;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class PromptHandler {
	
	private final Properties properties = new Properties();
	private List<ConnectionState> connections;
	private BufferedWriter writer;
	private University university;
	private ConnectionState currentConnection;
	private String currentThreadName;
	private String userInput;
	public EventCodes currentEvent;
	private Map<String, String> userLogins;
	private boolean semesterEventStarted;
	private boolean terminateEventLoop;
	private List<String> eventsList;
	
	public PromptHandler() throws IOException {
		connections = new ArrayList<ConnectionState>();
		university = new University("Carleton");
		currentEvent = EventCodes.PRE_SEMESTER_START;
		semesterEventStarted = false;
		terminateEventLoop = false;
		this.readInUserLogins();
				
		eventsList = Stream.of(EventCodes.values())
							.map(EventCodes::name)
							.collect(Collectors.toList());
	}

	public void addClient(Socket clientSocket, BufferedWriter writer) throws Exception {
		this.writer = writer;
		ConnectionState cState = new ConnectionState(clientSocket, writer);
		this.connections.add(cState);
		
		this.displayMessage("Hello! Welcome to the University System \n");
		this.handleInput("", writer);
	}

	public void handleInput(String userInput, BufferedWriter writer) throws Exception {
		this.getClientConnection();
		this.writer = writer;
		this.userInput = userInput;
		
		if (userInput.equals("show menu")) {
			this.currentConnection.setState("menu-display");
		}
		
		if (userInput.equals("clean slate")) {
			this.currentConnection.setState("menu-selection");
		}
		
		switch (this.currentConnection.getState()) {
			case "menu-display":
				this.presentMenu();
				this.currentConnection.setState("menu-selection");
				break;
			case "menu-selection":
				this.handleMenuSelection();
				break;
			case "username-input":
				this.handleUserNameInput();
				break;
			case "password-input":
				this.handlePasswordInput();
				break;
			case "course-parameter-entry":
				this.handleCourseCreation("params");
				break;
			case "student-parameter-entry":
				this.handleStudentCreation("params");
				break;
			case "student-course-parameter-entry":
				this.handleStudentCourseRegistration("params");
				break;
			case "student-course-dereg-parameter-entry":
				deregisterCourse("params");
				break;
			case "student-drop-course-parameter-entry":
				this.dropCourse("params");
				break;
			case "student-removal-parameter-entry":
				this.removeStudent("params");
				break;
			case "course-removal-parameter-entry":
				this.removeCourse("params");
				break;
			case "submit-assignment-parameter-entry":
				this.submitAssignment("params");
				break;
			case "submit-midterm-parameter-entry":
				this.submitMidterm("params");
				break;
			case "submit-project-parameter-entry":
				this.submitProject("params");
				break;
			case "submit-final-parameter-entry":
				this.submitFinal("params");
				break;
			default:
				System.out.println("the state was: "+ this.currentConnection.getState());
				writer.write("You're in an invalid state! Go Away!");
				writer.newLine();
				writer.flush();
				break;
		}
	}

	private void handlePasswordInput() throws IOException {
		String userName = this.currentConnection.getUserName();
		
		if (!this.checkUserExists(userName)) {
			return;
		}
		
		String userPasswd = this.userLogins.get(userName);
		
		if (!userPasswd.equals(this.userInput)) {
			this.displayMessage("Error: Wrong user name or password");
			this.displayPrompt("username? ");
			this.currentConnection.setState("username-input");
			return;
		}
		
		this.currentConnection.setLoggedIn(true);
		this.currentConnection.setState("menu-selection");
		this.displayMessage("Success: You're now logged in as: " + userName);
		System.out.println("User at " + this.currentThreadName + " logged in as " + userName);
	}

	private void handleUserNameInput() throws IOException {
		if (!this.checkUserExists(this.userInput)) {
			return;
		}
		
		this.currentConnection.setUserName(this.userInput);
		this.currentConnection.setState("password-input");
		this.displayPrompt("password? ");
	}
	
	private boolean checkUserExists(String userName) throws IOException {
		if (!this.userLogins.containsKey(userName)) {
			this.displayMessage("Error: Unknown User");
			this.displayPrompt("username? ");
			this.currentConnection.setState("username-input");
			return false;
		}
		
		return true;
	}

	private void handleMenuSelection() throws IOException {
		switch (userInput) {
			case "show menu":
				this.presentMenu();
				break;
			case "login":
				this.displayPrompt("username? ");
				this.currentConnection.setState("username-input");
				break;
			case "create course":
				this.handleCourseCreation("init");
				break;
			case "create student":
				this.handleStudentCreation("init");
				break;
			case "list courses":
				this.listCourses();
				break;
			case "list students":
				this.listStudents();
				break;
			case "register student to course":
				this.handleStudentCourseRegistration("init");
				break;
			case "deregister course":
				this.deregisterCourse("init");
				break;
			case "drop course":
				this.dropCourse("init");
				break;
			case "start pre semester":
				this.semesterEventStarted = true;
				this.startEventsThread();
				break;
			case "current event":
				this.displayCurrentEvent();
				break;
			case "list past events":
				this.listPastEvents();
				break;
			case "delete student":
				this.removeStudent("init");
				break;
			case "delete course":
				this.removeCourse("init");
				break;
			case "clean slate":
				this.resetSystem();
				break;
			case "submit assignment":
				this.submitAssignment("init");
				break;
			case "submit midterm":
				this.submitMidterm("init");
				break;
			case "submit project":
				this.submitProject("init");
				break;
			case "submit finals":
				this.submitFinal("init");
				break;
			default:
				this.displayMessage("Sorry, wrong input.");
				break;
		}
	}
	
	private void submitFinal(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.FINALS_END)) {
			return;
		}
		
		if (step == "init") {
			String message = "To submit final exam for course, please provide the "
					+ "student number and course code, delimited by a semi-colon(;)";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("submit-final-parameter-entry");
		}
		
		if (step == "params") {
			try {
				String[] paramTokens = this.userInput.split(";");
				int studentNumber = Integer.parseInt(paramTokens[0]);
				int courseCode = Integer.parseInt(paramTokens[1]);
				
				Student student = this.getStudentByNumber(studentNumber);
				Course course = this.getCourseByCode(courseCode);
				int grade = university.submitStudentFinal(student, course);
				
				this.displayMessage("Success: Your score for the final is: " + grade + "%");
				this.currentConnection.setState("menu-selection");
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
			
			this.displayMessage("End finals submission ---");
		}
	}

	private void submitProject(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.FINALS_END)) {
			return;
		}
		
		if (step == "init") {
			String message = "To submit project for course, please provide the "
					+ "student number and course code, delimited by a semi-colon(;)";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("submit-project-parameter-entry");
		}
		
		if (step == "params") {
			try {
				String[] paramTokens = this.userInput.split(";");
				int studentNumber = Integer.parseInt(paramTokens[0]);
				int courseCode = Integer.parseInt(paramTokens[1]);
				
				Student student = this.getStudentByNumber(studentNumber);
				Course course = this.getCourseByCode(courseCode);
				int grade = university.submitStudentProject(student, course);
				
				this.displayMessage("Success: Your score for the project is: " + grade + "%");
				this.currentConnection.setState("menu-selection");
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
			
			this.displayMessage("End project submission ---");
		}
	}

	private void submitMidterm(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.MID_TERM_END)) {
			return;
		}
		
		if (step == "init") {
			String message = "To submit midterm for course, please provide the "
					+ "student number and course code, delimited by a semi-colon(;)";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("submit-midterm-parameter-entry");
		}
		
		if (step == "params") {
			try {
				String[] paramTokens = this.userInput.split(";");
				int studentNumber = Integer.parseInt(paramTokens[0]);
				int courseCode = Integer.parseInt(paramTokens[1]);
				
				Student student = this.getStudentByNumber(studentNumber);
				Course course = this.getCourseByCode(courseCode);
				int grade = university.submitStudentMidterm(student, course);
				
				this.displayMessage("Success: Your score for the midterm is: " + grade + "%");
				this.currentConnection.setState("menu-selection");
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
			
			this.displayMessage("End midterm submission ---");
		}
	}

	private void submitAssignment(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.DROP_COURSE_DEADLINE)) {
			return;
		}
		
		if (step == "init") {
			String message = "To submit assignment for course, please provide the "
					+ "student number and course code, delimited by a semi-colon(;)";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("submit-assignment-parameter-entry");
		}
		
		if (step == "params") {
			try {
				String[] paramTokens = this.userInput.split(";");
				int studentNumber = Integer.parseInt(paramTokens[0]);
				int courseCode = Integer.parseInt(paramTokens[1]);
				
				Student student = this.getStudentByNumber(studentNumber);
				Course course = this.getCourseByCode(courseCode);
				int grade = university.submitStudentAssignment(student, course);
				
				this.displayMessage("Success: Your score for the assignment is: " + grade + "%");
				this.currentConnection.setState("menu-selection");
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
			
			this.displayMessage("End assignment submission ---");
		}
	}

	private void removeCourse(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.PRE_SEMESTER_END)) {
			return;
		}
		
		if (step == "init") {
			String message = "To remove a course, please provide the course code ";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("course-removal-parameter-entry");
		}
		
		if (step == "params") {
			try {
				int courseCode = Integer.parseInt(this.userInput);
				Course course = this.getCourseByCode(courseCode);
				university.destroyCourse(course);
				
				this.displayMessage("Success: Course has been removed from the university");
				this.currentConnection.setState("menu-selection");
				System.out.println("User at " + this.currentThreadName + " removed course "
						+ courseCode + "from university");
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
		}
	}

	private void resetSystem() throws IOException {
		if (this.semesterEventStarted) {
			this.terminateEventLoop = true;
			this.semesterEventStarted = false;
		} else {
			this.displayMessage("Events has been reset.");
		}
		
		this.currentEvent = EventCodes.PRE_SEMESTER_START;
		this.university = new University("Carleton");
	}

	private void removeStudent(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.PRE_SEMESTER_END)) {
			return;
		}
		
		if (step == "init") {
			String message = "To remove a student, please provide the student number ";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("student-removal-parameter-entry");
		}
		
		if (step == "params") {
			try {
				int studentNumber = Integer.parseInt(this.userInput);
				university.removeStudent(studentNumber);
				
				this.displayMessage("Success: Student has been removed from the university");
				this.currentConnection.setState("menu-selection");
				System.out.println("User at " + this.currentThreadName + " removed student "
						+ studentNumber + "from university");
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
		}
	}

	private void displayCurrentEvent() throws IOException {
		this.displayMessage(this.currentEvent.toString());	
	}

	private void listPastEvents() throws IOException {
		int currentEventCode = this.currentEvent.getCode();
		this.displayMessage("Below are list of events that have past already.");
		
		for (int i = 0; currentEventCode > 0; currentEventCode--, i++) {
			this.displayMessage(this.eventsList.get(i));
		}
		
		this.displayMessage("---");
	}

	public void startEventsThread() throws IOException {
		if (this.hasPastEvent(EventCodes.PRE_SEMESTER_START)) {
			return;
		}
		
		Runnable runnable = new Runnable() {
			
			@Override
			public void run() {
				try {
					simulateEvents();
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		};
		
		new Thread(runnable).start();
	}

	private void simulateEvents() throws IOException, InterruptedException, CourseException {
		this.displayMessageToAll("curr thread: " + Thread.currentThread().getName());
		
		boolean runningEvents = true;
		this.semesterEventStarted = true;
		long startTime = System.nanoTime();
		
		int eventDayCycle = this.getIntProperty("EVENT_DAY_LENGTH_IN_SECS");
		int preSemesterDays = eventDayCycle * this.getIntProperty("EVENT_PRE_SEMESTER_IN_DAYS");
		
		int studentRegDays = (eventDayCycle * 
				this.getIntProperty("EVENT_STUDENT_REGISTRATION_IN_DAYS")) + preSemesterDays;
		
		int deRegDeadline = (eventDayCycle * 
				this.getIntProperty("EVENT_STUDENT_DEREGISTRATION_DEADLINE")) + preSemesterDays;
		
		int midTermStart = (eventDayCycle * 
				this.getIntProperty("EVENT_SEMESTER_MIDTERM_START_ON_DAY")) + preSemesterDays;
		
		int midTermEnd = (eventDayCycle * 
				this.getIntProperty("EVENT_SEMESTER_MIDTERM_END_ON_DAY")) + preSemesterDays;
		
		int dropCourseDeadline = (eventDayCycle * 
				this.getIntProperty("EVENT_STUDENT_DROP_COURSE_DEADLINE")) + preSemesterDays;
		
		int finalsStart = (eventDayCycle * 
				this.getIntProperty("EVENT_SEMESTER_FINAL_START_ON_DAY")) + preSemesterDays;
		
		int finalsEnd = (eventDayCycle * 
				this.getIntProperty("EVENT_SEMESTER_FINAL_END_ON_DAY")) + preSemesterDays;
		
		int semesterDays = (eventDayCycle * 
				this.getIntProperty("EVENT_SEMESTER_LENGTH_IN_DAYS")) + preSemesterDays;
		int dayCount = (preSemesterDays / eventDayCycle) * -1;
		
		this.currentEvent = EventCodes.PRE_SEMESTER_START;
		this.displayMessageToAll("pre semester event has started");
		this.displayMessageToAll("All clerks should login and start creating courses and students");
		System.out.println("cycle: "+ eventDayCycle +"; pre semester: " + preSemesterDays
				+ "; student reg: "+ studentRegDays + "; semester days: " + semesterDays);
		
		while (runningEvents) {
			dayCount++;
			if (this.terminateEventLoop) {
				this.switchEvent(EventCodes.PRE_SEMESTER_START, 0, "Events has been reset.");
				this.terminateEventLoop = false;
				break;
			}
			
			Thread.sleep((eventDayCycle * 1000) / 4);
			long elapsedTime = ((System.nanoTime() - startTime) / 1000000000) * 4;
			
			if (elapsedTime >= semesterDays) {
				this.switchEvent(EventCodes.SEMESTER_END, dayCount, "semester has ended event fired");
				this.submitGradesForStudents();
				this.displayDeansList();
				
				this.semesterEventStarted = false;
				runningEvents = false;
				
				continue;
			}
			
			if (elapsedTime >= finalsEnd) {
				this.switchEvent(EventCodes.FINALS_END, dayCount,  "semester final exams end event fired");
				continue;
			}
			
			if (elapsedTime >= finalsStart) {
				this.switchEvent(EventCodes.FINALS_START, dayCount,  "semester final exams start event fired");
				continue;
			}
			
			if (elapsedTime >= dropCourseDeadline) {
				this.switchEvent(EventCodes.DROP_COURSE_DEADLINE, dayCount, 
						"semester drop course deadline event fired");
				continue;
			}
			
			if (elapsedTime > midTermEnd) {
				this.switchEvent(EventCodes.MID_TERM_END, dayCount,  "semester midterm end event fired");
				continue;
			}
			
			if (elapsedTime >= midTermStart) {
				this.switchEvent(EventCodes.MID_TERM_START, dayCount,  "semester midterm start event fired");
				continue;
			}
			
			if (elapsedTime >= deRegDeadline) {
				this.switchEvent(EventCodes.COURSE_DEREGISTRATION_DEADLINE, dayCount, 
						"semester course de-registration deadline event fired");
				continue;
			}
			
			if (elapsedTime >= studentRegDays) {
				this.switchEvent(EventCodes.STUDENT_REGISTRATION_END, dayCount, 
						"semester course registration has ended event fired");
				continue;
			}
			
			if (elapsedTime > preSemesterDays) {
				this.switchEvent(EventCodes.STUDENT_REGISTRATION_START, dayCount,  
						"semester begin and course registration event fired",
						"Semester has started. Students can start course registration");
				continue;
			}
			
			if (elapsedTime == preSemesterDays) {
				this.switchEvent(EventCodes.PRE_SEMESTER_END, dayCount, "pre semester end event fired", 
						"All courses and students should have been created by now");
				continue;
			}
		}
	}

	private void displayDeansList() throws IOException {
		this.displayMessageToAll("Below is the Dean's list for exceptional students");
		int deansScore = this.getIntProperty("DEANS_SCORE");
		int numStudents = 0;
		float studentAvgScore;
		
		for (Student student : this.university.students()) {
			if (!student.isFullTime()) {
				continue;
			}
			
			studentAvgScore = student.getAverageGrade();
			
			if (studentAvgScore >= deansScore) {
				numStudents++;
				this.displayMessageToAll("\t Student " + student.name() + " with an average "
						+ "score of " + studentAvgScore + "%");
			}
		}
		
		if (numStudents == 0) {
			this.displayMessageToAll("\t No student qualified for the Dean's list");
		}
	}

	private void submitGradesForStudents() throws CourseException, IOException {
		Random randomIntGenerator = new Random();
		this.displayMessageToAll("Below are courses and student grades");
		
		for (Course course : this.university.courses()) {
			this.displayMessageToAll("\t--- Course " + course.title() + " has student grades: ");
			
			for (Student student : course.students()) {
				int grade = randomIntGenerator.nextInt(101);
				course.addStudentGradeForFinal(student, grade);
				
				this.displayMessageToAll("\t\t Student " + student.name() + " has a grade of "
						+ course.markForStudent(student) + "%");
			}
			
			this.displayMessageToAll("\t---");
		}
	}

	private void switchEvent(EventCodes event, int dayCount, String ...messages) throws IOException {
		if (this.currentEvent.equals(event)) {
			return;
		}
		
		this.currentEvent = event;
		this.displayMessageToAll("***");
		this.displayMessageToAll("Day " + dayCount + " of the semester");
		
		for (String msg : messages) {
			this.displayMessageToAll(msg);
		}
		
		this.displayMessageToAll("***");
	}

	private void displayMessageToAll(String message) throws IOException {
		System.out.println(message);
		
		for (ConnectionState connection : this.connections) {
			connection.sendMessage(message);
		}
	}

	private void handleStudentCourseRegistration(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.STUDENT_REGISTRATION_START)) {
			return;
		}
		
		if (step == "init") {
			String message = "To register a student to a course, please provide the student "
					+ "number and the course code. \n They should be separated by a semicolon ';'";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("student-course-parameter-entry");
		}
		
		if (step == "params") {
			String[] paramTokens = this.userInput.split(";");
			
			if (paramTokens.length != 2) {
				this.displayMessage("Incomplete or invalid parameter count.");
				return;
			}
			
			try {
				int studentNumber = Integer.parseInt(paramTokens[0]);
				int courseCode = Integer.parseInt(paramTokens[1]);
				Student student = this.getStudentByNumber(studentNumber);
				Course course = this.getCourseByCode(courseCode);
				
				this.university.registerStudentForCourse(course, student);
				
				this.displayMessage("Success: Student has been registered to the course");
				this.displayMessage(student.toString());
				this.currentConnection.setState("menu-selection");
				System.out.println("User at " + this.currentThreadName + " registered student "
						+ student.name() + "to course" + course.title());
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
		}
	}
	
	private void deregisterCourse(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.COURSE_DEREGISTRATION_DEADLINE)) {
			return;
		}
		
		if (step == "init") {
			String message = "To deregister a student's course, please provide the student "
					+ "number and the course code. \n They should be separated by a semicolon ';'";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("student-course-dereg-parameter-entry");
		}
		
		if (step == "params") {
			String[] paramTokens = this.userInput.split(";");
			
			if (paramTokens.length != 2) {
				this.displayMessage("Incomplete or invalid parameter count.");
				return;
			}
			
			try {
				int studentNumber = Integer.parseInt(paramTokens[0]);
				int courseCode = Integer.parseInt(paramTokens[1]);
				Student student = this.getStudentByNumber(studentNumber);
				Course course = this.getCourseByCode(courseCode);
				
				student.deRegisterCourse(course);
				
				this.displayMessage("Success: Student has been deregistered from the course");
				this.displayMessage(student.toString());
				this.currentConnection.setState("menu-selection");
				System.out.println("User at " + this.currentThreadName + " deregistered student "
						+ student.name() + "from course" + course.title());
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
		}
	}
	
	private void dropCourse(String step) throws IOException {
		if (this.hasPastEvent(EventCodes.DROP_COURSE_DEADLINE)) {
			return;
		}
		
		if (step == "init") {
			String message = "To drop a student's course, please provide the student "
					+ "number and the course code. \n They should be separated by a semicolon ';'";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("student-drop-course-parameter-entry");
		}
		
		if (step == "params") {
			String[] paramTokens = this.userInput.split(";");
			
			if (paramTokens.length != 2) {
				this.displayMessage("Incomplete or invalid parameter count.");
				return;
			}
			
			try {
				int studentNumber = Integer.parseInt(paramTokens[0]);
				int courseCode = Integer.parseInt(paramTokens[1]);
				Student student = this.getStudentByNumber(studentNumber);
				Course course = this.getCourseByCode(courseCode);
				
				student.dropCourse(course);
				
				this.displayMessage("Success: Student has been dropped from the course");
				this.displayMessage(student.toString());
				this.currentConnection.setState("menu-selection");
				System.out.println("User at " + this.currentThreadName + " dropped student "
						+ student.name() + "from course" + course.title());
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
		}
	}

	private Course getCourseByCode(int courseCode) throws Exception {
		for (Course course : this.university.courses()) {
			if (course.code() == courseCode) {
				return course;
			}
		}
		
		throw new Exception("Course with code: " + courseCode + " does not exist.");
	}

	private Student getStudentByNumber(int studentNumber) throws Exception {
		for (Student student : this.university.students()) {
			if (student.studentNumber() == studentNumber) {
				return student;
			}
		}
		
		throw new Exception("Student with number: " + studentNumber + " does not exist.");
	}

	private void listStudents() throws IOException {
		String studentList = "";
		
		for (Student student : this.university.students()) {
			studentList += student.toString();
		}
		
		if (studentList == "") {
			this.displayMessage("No student enrolled to the university");
			return;
		}
		
		this.displayMessage("Student list below:");
		this.displayMessage(studentList);
		this.displayMessage("End of student listing.");
	}

	private void listCourses() throws IOException {
		String courseList = "";
		
		for (Course course : this.university.courses()) {
			courseList += course.toString();
		}
		
		if (courseList == "") {
			this.displayMessage("No course found in the University");
			return;
		}
		
		this.displayMessage("Course list below:");
		this.displayMessage(courseList);
		this.displayMessage("End of course listing.");
	}

	private boolean isUserClerk() throws IOException {
		if (!this.currentConnection.getLoggedInState() || !this.currentConnection.getUserName().equals("clerk")) {
			this.displayMessage("This operation can only be performed by a clerk. Please login as a clerk");
			return false;
		}
		
		return true;
	}

	private void handleStudentCreation(String step) throws IOException {
		if (!this.isUserClerk()) {
			return;
		}
		
		if (this.hasPastEvent(EventCodes.PRE_SEMESTER_END)) {
			return;
		}
		
		if (step == "init") {
			String message = "To create a student, pass in the following parameters: \n"
					+ "Student's name, Student's number[int], Student's department[int], \n"
					+ "Student's full time status[true or false]. The parameters should be separated by semicolon ';'";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("student-parameter-entry");
		}
		
		if (step == "params") {
			String[] paramTokens = this.userInput.split(";");
			
			if (paramTokens.length != 4) {
				this.displayMessage("Incomplete or invalid parameter count.");
				return;
			}
			
			try {
				int studentNumber = Integer.parseInt(paramTokens[1]);
				int studentDept = Integer.parseInt(paramTokens[2]);
				boolean isFullTime = Boolean.parseBoolean(paramTokens[3]);
				
				Student student = this.university.createStudent(paramTokens[0], studentNumber, studentDept, isFullTime);
				
				this.displayMessage("Success: Student has been created");
				this.displayMessage(student.toString());
				this.currentConnection.setState("menu-selection");
				System.out.println("Clerk at " + this.currentThreadName + " created student " + student);
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
		}
	}

	private boolean hasPastEvent(EventCodes event) throws IOException {
		if (this.currentEvent.getCode() <= event.getCode()) {
			return false;
		}
		
		this.displayMessage("Deadline has passed for running this command: "+ this.userInput);
		return true;
	}

	private void handleCourseCreation(String step) throws IOException {
		if (!this.isUserClerk()) {
			return;
		}
		
		if (this.hasPastEvent(EventCodes.PRE_SEMESTER_END)) {
			return;
		}
		
		if (step == "init") {
			String message = "To create a course, pass in the following parameters: \n"
					+ "Course title, Course code[must be 6 integers], Course capacity[min. 25], \n"
					+ "number of midterms[0 - 2], number of assignments [0 - 5], \n"
					+ "has final exam[true or false]. The parameters should be separated by semicolon ';'";
			
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("course-parameter-entry");
		}
		
		if (step == "params") {
			String[] paramTokens = this.userInput.split(";");
			
			if (paramTokens.length != 6) {
				this.displayMessage("Incomplete or invalid parameter count.");
				return;
			}
			
			try {
				int courseCode = Integer.parseInt(paramTokens[1]);
				int courseCapacity = Integer.parseInt(paramTokens[2]);
				int numMidterms = Integer.parseInt(paramTokens[3]);
				int numAssignments = Integer.parseInt(paramTokens[4]);
				boolean hasFinal = Boolean.parseBoolean(paramTokens[5]);
				
				Course course = this.university.createCourse(paramTokens[0], courseCapacity, 
						courseCode, false, numMidterms, numAssignments, hasFinal);
				
				this.displayMessage("Success: Course has been created");
				this.displayMessage(course.toString());
				this.currentConnection.setState("menu-selection");
				System.out.println("Clerk at " + this.currentThreadName + " created course " + course);
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}	
		}
	}

	private void presentMenu() throws IOException {
		String menu = "Menu \n"
				+ "--- \n"
				+ "- Type 'login' to show login prompt. \n"
				+ "- Type 'list students' to display student list. "
				+ "You can then login as one of the students. \n"
				+ "- Type 'list courses' to display course list. \n"
				+ "- Type 'create student' to create a student. [only for clerks] \n"
				+ "- Type 'create course' to create a course. [only for clerks] \n"
				+ "- Type 'delete student' to remove a student. [only for clerks] \n"
				+ "- Type 'delete course' to remove a course. [only for clerks] \n"
				+ "- Type 'register student to course' to do register a student to a course. \n"
				+ "- Type 'deregister course' to deregister a student's course. \n"
				+ "- Type 'drop course' to drop a student's course. \n"
				+ "- Type 'submit assignment' to submit a student's course assignment. \n"
				+ "- Type 'submit midterm' to submit a student's course midterm. \n"
				+ "- Type 'submit project' to submit a student's course project. \n"
				+ "- Type 'submit finals' to submit a student's course finals. \n"
				+ "- Type 'current event' to get the system's current running event. \n"
				+ "- Type 'list past events' to get the list of past events. \n"
				+ "- Type 'start pre semester' to trigger the pre-semester start event. \n"
				+ "- Type 'show menu' to display this menu again. \n"
				+ "- Type 'clean slate' to reset the university system \n"
				+ "--- \n";
		this.displayMessage(menu);
	}
	
	private void displayPrompt(String message) throws IOException {
		writer.write(" -> " + message);
		writer.flush();
	}
	
	private void displayMessage(String message) throws IOException {
		System.out.println("***msg to client: " + message +" ***");
		writer.write(message);
		writer.newLine();
		writer.flush();
	}

	private void getClientConnection() throws Exception {
		this.currentThreadName = Thread.currentThread().getName();
		
		for (ConnectionState connection : this.connections) {	
			if (this.currentThreadName.equals(connection.getThreadName())) {
				this.currentConnection = connection;
				return;
			}
		}
		
		throw new Exception("Connection not found.");
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
	
	private int getIntProperty(String propertyKey) {
		return Integer.parseInt(properties.getProperty(propertyKey));
	}
	
}
