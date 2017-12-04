package com.ogb.anselm.univ.sys;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.StringUtils;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;

import junit.framework.TestCase;

public class StepDefinitions extends TestCase {
	private static SimpleTelnetClient client = null;
	private String serverResponse;
	private String courseCode;
	private String studentNumber;

	@Before
 	public void before() {
		try {
			if (client == null) {
				client = new SimpleTelnetClient("localhost", 8025);
				client.connect();

				Runtime.getRuntime().addShutdownHook(new Thread() {
					public void run() {
						client.send("exit");
						client.stop();
						
						System.out.println("reg shutdown--------");
					}
				});
			}

		} catch (Exception e) {
			System.out.println("could not connect to University Server.");
			System.exit(0);
			return;
		}

		System.out.println("end of before");
	}

	@After
	public void after() {
		System.out.println("start of after");
	}
	
	@Given("^that the pre semester event has started$")
	public void that_pre_semester_has_started() throws InterruptedException {
		sendAndWaitFor("clean slate", "");
		TimeUnit.SECONDS.sleep(2);
		
		serverResponse = sendAndWaitFor("start pre semester", "started");
	}
	
	@And("^before \"(.*?)\" event occurs$")
	public void before_event_starts(String event) {
		switch (event) {
			case "start registration":
				serverResponse = sendAndWaitFor("list past events", "---");
				assertFalse(serverResponse.contains("STUDENT_REGISTRATION_START"));
				break;
			default:
				assertTrue("Unknown 'before event' given", false);
				break;
		}
	}
	
	@And("^after \"(.*?)\" event occurs$")
	public void after_event_starts(String event) throws InterruptedException {
		switch (event) {
			case "start registration":
				this.waitForEvent("STUDENT_REGISTRATION_START");
				break;
			case "end registration":
				this.waitForEvent("STUDENT_REGISTRATION_END");
				break;
			case "end course de-registration":
				this.waitForEvent("COURSE_DEREGISTRATION_DEADLINE");
				break;
			case "end semester":
				this.waitForEvent("SEMESTER_END");
				break;
			case "start midterm":
				this.waitForEvent("MID_TERM_START");
				break;
			case "end midterm":
				this.waitForEvent("MID_TERM_END");
				break;
			case "start finals":
				this.waitForEvent("FINALS_START");
				break;
			case "end finals":
				this.waitForEvent("FINALS_END");
				break;
			default:
				assertTrue("Unknown 'after event' given", false);
				break;
		}
	}
	
	private void waitForEvent(String event) throws InterruptedException {
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains(event)) {
			return;
		}
		
		while (!serverResponse.matches("(?s).*\\b" + event +"\\b.*")) {
			TimeUnit.SECONDS.sleep(1);
			serverResponse = sendAndWaitFor("list past events", "---");
		}
	}

	@And("^I attempt to remove student \"(.*?)\" .+")
	public void i_attempt_to_remove_student(String studentNumber) {
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains("STUDENT_REGISTRATION_START")) {
			serverResponse = sendAndWaitFor("delete student", "Deadline");
			return;
		}
		
		serverResponse = sendAndWaitFor("delete student", " -> parameters? ");
		serverResponse = sendAndWaitFor(studentNumber, "Student");
		sendAndWaitFor("show menu", "");
	}

	@And("^I attempt to remove course \"(.*?)\" .+")
	public void i_attempt_to_remove_course(String courseCode) {
		this.courseCode = courseCode;
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains("STUDENT_REGISTRATION_START")) {
			serverResponse = sendAndWaitFor("delete course", "Deadline");
			return;
		}
		
		serverResponse = sendAndWaitFor("delete course", " -> parameters? ");
		serverResponse = sendAndWaitFor(courseCode, "Course");
		sendAndWaitFor("show menu", "");
	}
	
	@Then("I receive a success message for \"(.*?)\"$")
	public void i_receive_success_msg(String successScenario) {
		
		switch (successScenario) {
			case "creating student":
				assertTrue(serverResponse.contains("Success: Student has been created"));
				break;
			case "deleting student":
				assertTrue(serverResponse.contains("Success: Student has been removed from the university"));
				break;
			case "creating course":
				assertTrue(serverResponse.contains("Success: Course has been created"));
				break;
			case "deleting course":
				assertTrue(serverResponse.contains("Success: Course has been removed from the university"));
				break;
			case "registering student to course":
				assertTrue(serverResponse.contains("Success: Student has been registered to the course"));
				break;
			case "de-registering student from course":
				assertTrue(serverResponse.contains("Success: Student has been deregistered from the course"));
				break;
			case "dropping student from course":
				assertTrue(serverResponse.contains("Success: Student has been dropped from the course"));
				break;
			case "submitting assignment":
				assertTrue(serverResponse.contains("Success: Your score for the assignment is:"));
				break;
			case "submitting midterm":
				assertTrue(serverResponse.contains("Success: Your score for the midterm is:"));
				break;
			case "submitting project":
				assertTrue(serverResponse.contains("Success: Your score for the project is:"));
				break;
			case "submitting finals":
				assertTrue(serverResponse.contains("Success: Your score for the final is:"));
				break;
			default:
				assertTrue("success scenario not matched", false);
				break;
		}
	}
	
	@Then("I receive an error message for \"(.*?)\"$")
	public void i_receive_error_msg(String errorScenario) {
		
		switch (errorScenario) {
			case "submitting non-existent student": 
			case "dropping non-existent student from course":
			case "de-registering non-existent student to course":
			case "registering non-existent student to course":
				assertTrue(serverResponse.contains("An Exception Occured: Student "
						+ "with number: " + this.studentNumber +" does not exist."));
				break;
			case "non-existent student":
				assertTrue(serverResponse.contains("An Exception Occured: The Student "
						+ "is not enrolled in this university"));
				break;
			case "creating redundant student":
				assertTrue(serverResponse.contains("An Exception Occured: There already "
						+ "exists a student with that student number"));
				break;
			case "dropping student from non-existent course":
			case "de-registering from non-existent course":
			case "registering to non-existent course":
			case "non-existent course":
				assertTrue(serverResponse.contains("An Exception Occured: Course with "
						+ "code: " + this.courseCode + " does not exist."));
				break;
			case "creating redundant course":
				assertTrue(serverResponse.contains("An Exception Occured: There already "
						+ "exists a course with that course code"));
				break;
			case "submitting finals too late":
			case "submitting project too late":
			case "submitting midterm too late":
			case "submitting assignment too late":
			case "creating course too late":
			case "removing course too late":
			case "creating student too late":
			case "removing student too late":
			case "registering too late":
				assertTrue(serverResponse.contains("Deadline has passed for running this command"));
				break;
			case "non-existent assignment":
				assertTrue(serverResponse.contains("An Exception Occured: Course has no assignments"));
				break;
			case "non-existent midterm":
				assertTrue(serverResponse.contains("An Exception Occured: Course has no midterm"));
				break;
			case "non-existent finals":
				assertTrue(serverResponse.contains("An Exception Occured: Course has no final"));
				break;
			case "wrong command":
				assertTrue(serverResponse.contains("Sorry, wrong input."));
				break;
			default:
				assertTrue("error scenario not matched", false);
				break;
		}
	}
	
	@And("^I attempt to create student .+")
	public void i_attempt_to_create_student(DataTable userTable) {
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains("STUDENT_REGISTRATION_START")) {
			serverResponse = sendAndWaitFor("create student", "Deadline");
			return;
		}
		
		List<Map<String, String>> userTableData = userTable.asMaps(String.class, String.class);
		Map<String, String> userData = userTableData.get(0);
		
		serverResponse = sendAndWaitFor("create student", " -> parameters? ");
		String params = String.format("%s;%s;%s;%s", userData.get("name").toString(), 
				userData.get("number").toString(), userData.get("department").toString(), 
				userData.get("fulltime").toString());
		
		serverResponse = sendAndWaitFor(params, "tudent");
	}
	
	@And("^I attempt to create course .+")
	public void i_attempt_to_create_course(DataTable courseTable) {
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains("STUDENT_REGISTRATION_START")) {
			serverResponse = sendAndWaitFor("create course", "Deadline");
			return;
		}
		
		List<Map<String, String>> courseTableData = courseTable.asMaps(String.class, String.class);
		Map<String, String> courseData = courseTableData.get(0);
		
		serverResponse = sendAndWaitFor("create course", " -> parameters? ");
		String params = String.format("%s;%s;%s;%s;%s;%s", courseData.get("title").toString(), 
				courseData.get("code").toString(), courseData.get("capacity").toString(), 
				courseData.get("numMidterms").toString(), 
				courseData.get("numAssignments").toString(), courseData.get("hasFinal").toString());
		
		serverResponse = sendAndWaitFor(params, "ourse");
	}
	
	@Given("^I attempt to register non-existent student s(\\d+) to course c(\\d+) with parameters:$")
	public void i_attempt_to_register_non_student_s_to_course_c_with_parameters(int arg1, int arg2,
			DataTable registrationTable) throws Throwable {
		this.i_attempt_to_register_student_s_to_course_c_with_parameters(arg1, arg2, registrationTable);
	}
	
	@Given("^I attempt to register student s(\\d+) to non-existent course c(\\d+) with parameters:$")
	public void i_attempt_to_register_student_s_to_non_course_c_with_parameters(int arg1, int arg2,
			DataTable registrationTable) throws Throwable {
		this.i_attempt_to_register_student_s_to_course_c_with_parameters(arg1, arg2, registrationTable);
	}
	
	@Given("^I attempt to register student s(\\d+) to course c(\\d+) with parameters:$")
	public void i_attempt_to_register_student_s_to_course_c_with_parameters(int arg1, int arg2,
			DataTable registrationTable) throws Throwable {
	    
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains("STUDENT_REGISTRATION_END")) {
			serverResponse = sendAndWaitFor("register student to course", "Deadline");
			return;
		}
		
		List<Map<String, String>> regTableData = registrationTable.asMaps(String.class, String.class);
		Map<String, String> regData = regTableData.get(0);
		this.courseCode = regData.get("courseCode").toString();
		this.studentNumber = regData.get("studentNumber").toString();
		
		serverResponse = sendAndWaitFor("register student to course", " -> parameters? ");
		String params = String.format("%s;%s", this.studentNumber, this.courseCode);
		
		serverResponse = sendAndWaitFor(params, "course");
	}
	
	@Given("^I attempt to de-register non-existent student s(\\d+) to course c(\\d+) with parameters:$")
	public void i_attempt_to_de_register_non_student_s_to_course_c_with_parameters(int arg1, int arg2,
			DataTable registrationTable) throws Throwable {
		this.i_attempt_to_de_register_student_s_to_course_c_with_parameters(arg1, arg2, registrationTable);
	}
	
	@Given("^I attempt to de-register student s(\\d+) from non-existent course c(\\d+) with parameters:$")
	public void i_attempt_to_de_register_student_s_to_non_course_c_with_parameters(int arg1, int arg2,
			DataTable registrationTable) throws Throwable {
		this.i_attempt_to_de_register_student_s_to_course_c_with_parameters(arg1, arg2, registrationTable);
	}
	
	@Given("^I attempt to de-register student s(\\d+) to course c(\\d+) with parameters:$")
	public void i_attempt_to_de_register_student_s_to_course_c_with_parameters(int arg1, int arg2,
			DataTable registrationTable) throws Throwable {
	    
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains("COURSE_DEREGISTRATION_DEADLINE")) {
			serverResponse = sendAndWaitFor("deregister course", "Deadline");
			return;
		}
		
		List<Map<String, String>> regTableData = registrationTable.asMaps(String.class, String.class);
		Map<String, String> regData = regTableData.get(0);
		this.courseCode = regData.get("courseCode").toString();
		this.studentNumber = regData.get("studentNumber").toString();
		
		serverResponse = sendAndWaitFor("deregister course", " -> parameters? ");
		String params = String.format("%s;%s", this.studentNumber, this.courseCode);
		
		serverResponse = sendAndWaitFor(params, "course");
	}
	
	@Given("^I attempt to drop student s(\\d+) from course c(\\d+) with parameters:$")
	public void i_attempt_to_drop_student_s_from_course_c(int arg1, int arg2, DataTable dropTable) 
			throws Throwable {
	    	    
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains("DROP_COURSE_DEADLINE")) {
			serverResponse = sendAndWaitFor("drop course", "Deadline");
			return;
		}
		
		List<Map<String, String>> dropTableData = dropTable.asMaps(String.class, String.class);
		Map<String, String> dropData = dropTableData.get(0);
		this.courseCode = dropData.get("courseCode").toString();
		this.studentNumber = dropData.get("studentNumber").toString();
		
		serverResponse = sendAndWaitFor("drop course", " -> parameters? ");
		String params = String.format("%s;%s", this.studentNumber, this.courseCode);
		
		serverResponse = sendAndWaitFor(params, "course");
	}
	
	@And("^I attempt to submit \"(.*?)\" for student \"(.*?)\", course \"(.*?)\"$")
	public void i_attempt_to_submit(String courseComponent, 
			String studentNumber, String courseCode) throws Throwable {
		
		this.i_attempt_to_submit_student_s_from_course_c(courseComponent, 
				studentNumber, courseCode);
	}
	
	@And("^I attempt to submit \"(.*?)\" for student \"(.*?)\", course \"(.*?)\".+")
	public void i_attempt_to_submit_student_s_from_course_c(String courseComponent, 
			String studentNumber, String courseCode) throws Throwable {
		
		String componentDeadline = "";
		String command = "submit " + courseComponent;
		
		switch (courseComponent) {
			case "assignment":
				componentDeadline = "DROP_COURSE_DEADLINE";
				break;
			case "midterm":
				componentDeadline = "FINALS_START";
				break;
			case "project":
			case "finals":
				componentDeadline = "FINALS_END";
				break;
			default:
				assertTrue("Error for submitting unknown course component", false);
				break;
		}
		
		serverResponse = sendAndWaitFor("list past events", "---");
		
		if (serverResponse.contains(componentDeadline)) {
			serverResponse = sendAndWaitFor(command, "command");
			return;
		}
		
		this.studentNumber = studentNumber;
		this.courseCode = courseCode;
		serverResponse = sendAndWaitFor(command, " -> parameters? ");
		String params = String.format("%s;%s", this.studentNumber, this.courseCode);
		
		serverResponse = sendAndWaitFor(params, "End " + courseComponent + " submission ---");
	}
	
	@And("^I attempt to run the list \"([^\"]*)\" invalid command$")
	public void i_attempt_to_run_the_list_invalid_command(String facet) throws Throwable {
		serverResponse = sendAndWaitFor("list " + facet, "wrong");
	}
	
	@And("^I verify that student s(\\d+) has been created$")
	public void i_verify_that_student_s_has_been_created(int placeholder) throws Throwable {
	    assertTrue(serverResponse.contains("Success: Student has been created"));
	}
	
	@And("^I verify that course c(\\d+) has been created$")
	public void i_verify_that_course_c_has_been_created(int placeholder) throws Throwable {
	    assertTrue(serverResponse.contains("Success: Course has been created"));
	}
	
	@Then("^there should be only \"(\\d+)\" courses in the university$")
	public void there_should_be_courses(int numCourses) throws InterruptedException {
		serverResponse = sendAndWaitFor("list courses", "End of course listing.");
		int matches = StringUtils.countMatches(serverResponse, "Course code is");
		
		assertEquals(numCourses, matches);
	}
	
	@And("^the list of courses should be .+")
	public void the_list_of_courses_should_be(DataTable courseTable) throws Throwable {
	    List<Map<String, String>> courseTableData = courseTable.asMaps(String.class, String.class);
	    serverResponse = sendAndWaitFor("list courses", "End of course listing.");
	    
	    String courseListFormat1 = "Course %s has %s assignments, %s midterms and %s final exam.";
	    String courseListFormat2 = "Course code is %s, and capacity is %s students";
	    String courseListFormat3 = "%s students are registered to the course.";
	    
	    for (Map<String, String> courseData : courseTableData) {
	    		String courseMatch1 = String.format(courseListFormat1, courseData.get("title"),
	    				courseData.get("numAssignments"), courseData.get("numMidterms"),
	    				courseData.get("hasFinal").equals("true") ? "a" : "no" );
	    		
	    		String courseMatch2 = String.format(courseListFormat2, courseData.get("code"), 
	    				courseData.get("capacity"));
	    		String courseMatch3 = String.format(courseListFormat3, courseData.get("numRegisteredStudents"));
	    		
	    		assertTrue(serverResponse.contains(courseMatch1));
	    		assertTrue(serverResponse.contains(courseMatch2));
	    		assertTrue(serverResponse.contains(courseMatch3));
	    }
	}
	
	@Then("^there should only be \"(\\d+)\" students enrolled to the university$")
	public void there_should_be_students(int numStudents) throws InterruptedException {
		serverResponse = sendAndWaitFor("list students", "End of student listing.");
		int matches = StringUtils.countMatches(serverResponse, "with student number");
		
		assertEquals(numStudents, matches);
	}
	
	@And("^the list of students should be .+")
	public void the_list_of_students_should_be(DataTable studentTable) throws Throwable {
	    List<Map<String, String>> studentTableData = studentTable.asMaps(String.class, String.class);
	    serverResponse = sendAndWaitFor("list students", "End of student listing.");
	    
	    String studentListFormat1 = "Student '%s' with student number %s is a %s time student.";
	    String studentListFormat2 = "He is currently registered in %s courses.";
	    
	    for (Map<String, String> studentData : studentTableData) {
	    		String studentMatch1 = String.format(studentListFormat1, studentData.get("name"),
	    				studentData.get("number"),
	    				studentData.get("fulltime").equals("true") ? "full" : "part" );
	    		
	    		String studentMatch2 = String.format(studentListFormat2, studentData.get("numCourses"));
	    		
	    		assertTrue(serverResponse.contains(studentMatch1));
	    		assertTrue(serverResponse.contains(studentMatch2));
	    }
	}
	
	private String sendAndWaitFor(String command, String message) {
		client.send(command);
		
		if (message == "") {
			return "";
		}
		
		return client.waitFor(message);
	}
	
	@Given("^I login as a clerk$")
	public void i_login_as_a_clerk() {
		sendAndWaitFor("login", " -> username? ");
		sendAndWaitFor("clerk", " -> password? ");
		serverResponse = sendAndWaitFor("clrkio", "clerk");
		
		assertTrue(serverResponse.contains("Success: You're now logged in as: clerk"));
	}
	
	@And("^course (.*?) is not in the list of courses$")
	public void name(String title) {
		serverResponse = sendAndWaitFor("list courses", "");
		System.out.println("Got " + this.serverResponse);
		
		assertFalse(serverResponse.contains("Course "+ title));
	}
	
	@And("^I create course (.*?) (\\d+) (\\d+) (\\d+) (\\d+) (.*?)$")
	public void i_create_course(String title, int code, int capacity, 
			int numMidterms, int numAssignments, String hasFinal) {
		
		String params = title +";" + code +";" + capacity + ";" + numMidterms 
				+";"+ numAssignments +";"+ hasFinal;
		
		sendAndWaitFor("create course", " -> parameters? ");
		serverResponse = sendAndWaitFor(params, "---");
		
		assertTrue(serverResponse.contains("Course "+ title +" has " + numAssignments + " assignments, " +
				numMidterms +" midterms"));
	}
	
	@Then("^I can verify that the course (.*?) is in the list of courses$")
	public void i_can_verify_course_in_course_list(String title) {
		serverResponse = sendAndWaitFor("list courses", title);
		System.out.println("Got " + serverResponse);
		
		assertTrue(serverResponse.contains("Course "+ title));
	}
}
