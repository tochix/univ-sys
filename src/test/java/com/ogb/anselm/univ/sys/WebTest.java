package com.ogb.anselm.univ.sys;

import java.io.ObjectOutputStream.PutField;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import junit.framework.TestCase;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class WebTest extends TestCase {
	
	private WebDriver driver;
	
	@Before
	public void setUp() throws Exception {
	
		String driverPath = "src/main/resources/chromedriver";
		System.setProperty("webdriver.chrome.driver", driverPath);
		
		driver = new ChromeDriver();
		String parentWindow = driver.getWindowHandle();
		driver.switchTo().window(parentWindow);
	}
	
	
	@After
	public void tearDown() throws Exception {
		this.driver.quit();
	}
	
	public void clerkLogin() throws Exception {
		removeCookies();
		assertEquals("University Online!", this.driver.getTitle());
		
		driver.findElement(By.name("username")).sendKeys("clerk");
		driver.findElement(By.name("password")).sendKeys("clrkio");
		//Thread.sleep(2000);
		
		driver.findElement(By.name("login_submit")).click();
		//Thread.sleep(2000);
	}
	
	private void startPreSemester() {
		try {
			driver.findElement(By.id("start_pre_semester")).click();
		} catch (Exception e) {
		}
	}
	
	@Test
	public void testCourseCreation() throws Exception {
		clerkLogin();
		
		driver.findElement(By.name("course_title")).sendKeys("Data Mining");
		driver.findElement(By.name("course_code")).sendKeys("654321");
		driver.findElement(By.name("course_capacity")).sendKeys("26");
		driver.findElement(By.name("num_assignments")).sendKeys("2");
		driver.findElement(By.name("num_midterms")).sendKeys("1");
		driver.findElements(By.name("has_final")).get(0).click();
		driver.findElement(By.name("add_course_btn")).click();
		assertNotNull(driver.findElement(By.id("course_654321")));
		
		driver.findElement(By.name("course_title")).sendKeys("Machine Learning");
		driver.findElement(By.name("course_code")).sendKeys("421314");
		driver.findElement(By.name("course_capacity")).sendKeys("27");
		driver.findElement(By.name("num_assignments")).sendKeys("3");
		driver.findElement(By.name("num_midterms")).sendKeys("1");
		driver.findElements(By.name("has_final")).get(0).click();
		driver.findElement(By.name("add_course_btn")).click();
		assertNotNull(driver.findElement(By.id("course_421314")));
		
		driver.findElement(By.name("course_title")).sendKeys("Economics");
		driver.findElement(By.name("course_code")).sendKeys("846583");
		driver.findElement(By.name("course_capacity")).sendKeys("29");
		driver.findElement(By.name("num_assignments")).sendKeys("0");
		driver.findElement(By.name("num_midterms")).sendKeys("0");
		driver.findElements(By.name("has_final")).get(0).click();
		driver.findElement(By.name("add_course_btn")).click();
		assertNotNull(driver.findElement(By.id("course_846583")));
		//Thread.sleep(4000);
		
		//assertTrue(condition);
	}
	
	@Test
	public void testStudentCreation() throws Exception {
		clerkLogin();
		
		driver.findElement(By.name("student_name")).sendKeys("Ethan Hawke");
		driver.findElement(By.name("student_number")).sendKeys("123456");
		driver.findElement(By.name("dept_code")).sendKeys("12");
		driver.findElements(By.name("is_fulltime")).get(0).click();
		driver.findElement(By.name("add_student")).click();
		assertNotNull(driver.findElement(By.id("student_123456")));
		
		driver.findElement(By.name("student_name")).sendKeys("Denzel Washington");
		driver.findElement(By.name("student_number")).sendKeys("837621");
		driver.findElement(By.name("dept_code")).sendKeys("16");
		driver.findElements(By.name("is_fulltime")).get(0).click();
		driver.findElement(By.name("add_student")).click();
		assertNotNull(driver.findElement(By.id("student_837621")));
		
		driver.findElement(By.name("student_name")).sendKeys("Thomas Sankari");
		driver.findElement(By.name("student_number")).sendKeys("936212");
		driver.findElement(By.name("dept_code")).sendKeys("12");
		driver.findElements(By.name("is_fulltime")).get(0).click();
		driver.findElement(By.name("add_student")).click();
		assertNotNull(driver.findElement(By.id("student_936212")));
		//Thread.sleep(4000);
	}
	
	@Test
	public void testStudentRegistration() throws Exception {
		registerStudentToCourse("123456", "654321");
		registerStudentToCourse("123456", "846583");
		assertNotNull(driver.findElement(By.id("drop_654321")));
		assertNotNull(driver.findElement(By.id("deregister_846583")));
		
		registerStudentToCourse("837621", "654321");
		registerStudentToCourse("837621", "421314");
		assertNotNull(driver.findElement(By.id("drop_654321")));
		assertNotNull(driver.findElement(By.id("deregister_421314")));
		
		registerStudentToCourse("936212", "846583");
		registerStudentToCourse("936212", "654321");
		assertNotNull(driver.findElement(By.id("drop_654321")));
		assertNotNull(driver.findElement(By.id("deregister_846583")));
		
		//Thread.sleep(4000);
	}
	
	@Test
	public void testTDropStudentFromCourse() throws Exception {
		dropStudentFromCourse("123456", "654321");
		dropStudentFromCourse("837621", "654321");
		dropStudentFromCourse("936212", "846583");
		//Thread.sleep(4000);
	}
	
	@Test
	public void testTDeRegisterStudentFromCourse() throws Exception {
		deRegisterStudentFromCourse("936212", "654321");
		//Thread.sleep(4000);
	}
	
	@Test
	public void testUDeleteCourses() throws Exception {
		clerkLogin();
		driver.findElement(By.id("delete_course_654321")).click();
		assertEquals("Course with code: 654321 has been deleted", 
				driver.findElement(By.id("course_success_msg")).getText());
		
		driver.findElement(By.id("delete_course_846583")).click();
		assertEquals("Course with code: 846583 has been deleted", 
				driver.findElement(By.id("course_success_msg")).getText());
		
		driver.findElement(By.id("delete_course_421314")).click();
		assertEquals("Course with code: 421314 has been deleted", 
				driver.findElement(By.id("course_success_msg")).getText());
		
	}
	
	@Test
	public void testUDeleteStudents() throws Exception {
		clerkLogin();
		driver.findElement(By.id("delete_student_123456")).click();
		assertEquals("Student with number: 123456 has been deleted", 
				driver.findElement(By.id("student_success_msg")).getText());
		
		driver.findElement(By.id("delete_student_837621")).click();
		assertEquals("Student with number: 837621 has been deleted", 
				driver.findElement(By.id("student_success_msg")).getText());
		
		driver.findElement(By.id("delete_student_936212")).click();
		assertEquals("Student with number: 936212 has been deleted", 
				driver.findElement(By.id("student_success_msg")).getText());
		
	}
	
	@Test
	public void testVCourseCreationAsStudent() throws Exception {
		testCourseCreation();
		testStudentCreation();
		studentLogin("936212");
		
		try {
			driver.findElement(By.name("course_title")).sendKeys("Data Mining");
			assertTrue("Create Course form is displayed to student", false);
		} catch (Exception e) {
			assertTrue("Create Course form is displayed to student", true);
		}
	}
	
	@Test
	public void testVStudentCreationAsStudent() throws Exception {
		studentLogin("123456");
		
		try {
			driver.findElement(By.name("student_name")).sendKeys("Ethan Hawke");
			assertTrue("Create Student form is displayed to student", false);
		} catch (Exception e) {
			assertTrue("Create Student form is displayed to student", true);
		}
	}
	
	@Test
	public void testVTemporal() throws Exception {
		clerkLogin();
		testUDeleteCourses();
		testUDeleteStudents();
		startPreSemester();
		
		WebElement currentEventElement = driver.findElement(By.id("current_event_span"));
		
		while (!currentEventElement.getText().equals("The University is at: PRE_SEMESTER_START")) {
			Thread.sleep(1000);
			driver.navigate().refresh();
			currentEventElement = driver.findElement(By.id("current_event_span"));
			System.out.println("event: " + currentEventElement.getText());
		}
		
		testCourseCreation();
		testStudentCreation();
		testStudentRegistration();
		currentEventElement = driver.findElement(By.id("current_event_span"));
		
		while (!currentEventElement.getText().equals("The University is at: STUDENT_REGISTRATION_END")) {
			Thread.sleep(1000);
			driver.navigate().refresh();
			currentEventElement = driver.findElement(By.id("current_event_span"));
		}
		
		try {
			testStudentRegistration();
			assertTrue("Student is able to register after registration deadline", false);
		} catch (Exception e) {
			assertTrue("Student is able to register after registration deadline", true);
		}
		
		currentEventElement = driver.findElement(By.id("current_event_span"));
		
		while (!currentEventElement.getText().equals("The University is at: MID_TERM_START")) {
			Thread.sleep(1000);
			driver.navigate().refresh();
			currentEventElement = driver.findElement(By.id("current_event_span"));
		}
		
		testTDeRegisterStudentFromCourse();
		driver.findElement(By.id("student_course_err_msg")).getText().equals("Deadline has "
				+ "past for de-registering from course");
		
		currentEventElement = driver.findElement(By.id("current_event_span"));
		
		while (!currentEventElement.getText().equals("The University is at: DROP_COURSE_DEADLINE")) {
			Thread.sleep(1000);
			driver.navigate().refresh();
			currentEventElement = driver.findElement(By.id("current_event_span"));
		}
		
		testTDropStudentFromCourse();
		driver.findElement(By.id("student_course_err_msg")).getText().equals("Deadline has past for dropping course");
	}
	
	private void registerStudentToCourse(String studentId, String courseId) throws InterruptedException {
		studentLogin(studentId);
		driver.findElement(By.id("register_" + courseId)).click();
	}
	
	private void dropStudentFromCourse(String studentId, String courseId) throws InterruptedException {
		studentLogin(studentId);
		driver.findElement(By.id("drop_" + courseId)).click();
	}

	private void deRegisterStudentFromCourse(String studentId, String courseId) throws InterruptedException {
		studentLogin(studentId);
		driver.findElement(By.id("deregister_" + courseId)).click();
	}
	
	private void studentLogin(String studentId) throws InterruptedException {
		removeCookies();
		driver.findElement(By.name("username")).sendKeys(studentId);
		driver.findElement(By.name("password")).sendKeys("stdio");
		//Thread.sleep(2000);
		
		driver.findElement(By.name("login_submit")).click();
		//Thread.sleep(2000);
	}
	
	private void removeCookies() {
		driver.get("http://localhost:8080");
		driver.manage().deleteAllCookies();
		driver.navigate().refresh();
	}
	
}
