package com.ogb.anselm.univ.sys;

import java.util.List;
import java.io.IOException;
import java.util.ArrayList;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import org.junit.Rule;
import org.junit.rules.ExpectedException;

public class CourseTest extends TestCase {
	
	@Rule
	public ExpectedException exception = ExpectedException.none();
	
	public void testCourseTitleShouldReturnSameTitle() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertEquals("Course title is different from the one provided.", "Applied Chemistry", course.title());
	}
	
	public void testCourseShouldHaveTwoOrLessMidterms() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertEquals("Course midterms doesn't return correct value", 2, course.numMidTerms());
	}
	
	public void testCourseShouldHaveSixDigitCode() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertTrue("Course code is not an integer", course.code() instanceof Integer);
		
		int courseCode = course.code();
		int courseCodeLength = String.valueOf(courseCode).length();
		assertEquals("Course code is not a 6 digit code", 6, courseCodeLength);
		assertEquals("Course returned a different course code", 123243, courseCode);
	}
	
	public void testCourseShouldListStudentsInCourse() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Student> students = course.students();
		assertTrue("Student list is not empty", students.isEmpty());
		
		Student student1 = new Student("Denzel Washington", 10160139, 12, true);
		Student student2 = new Student("Ethan Hawke", 10160149, 16, true);
		
		course.addStudent(student1);
		course.addStudent(student2);
		
		students = course.students();
		assertFalse("Student list is empty", students.isEmpty());
		assertTrue("Course does not return list of students", students.get(0) instanceof Student);
		assertEquals("Wrong number of students registered for course", 2, students.size());
	}
	
	public void testCourseShouldListPreRequisites() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Integer> preCourses = course.preRequisites();
		assertTrue("Pre-requisites list is not empty", preCourses.isEmpty());
		
		Course course1 = new Course(true, 2, 5, false, 26, "Algebra", 123244);
		Course course2 = new Course(true, 2, 5, false, 26, "Organic Chemistry", 123245);
		
		List<Course> courses = new ArrayList<Course>();
		courses.add(course1);
		courses.add(course2);
		
		course.addPreRequisites(courses);
		
		preCourses = course.preRequisites();
		assertFalse("Pre-requisites list is empty", preCourses.isEmpty());
		assertTrue("Course does not return list of pre-requisites", preCourses.get(0) instanceof Integer);
		assertEquals("Wrong number of Pre-requisites returned for course", 2, preCourses.size());
	}
	
	public void testCourseShouldNotAddDuplicatePreRequisites() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		Course course1 = new Course(true, 2, 5, false, 26, "Algebra", 123244);
		Course course2 = new Course(true, 2, 5, false, 26, "Organic Chemistry", 123245);
		
		List<Course> courses = new ArrayList<Course>();
		courses.add(course1);
		courses.add(course2);
		
		course.addPreRequisites(courses);
		
		List<Integer> preCourses = course.preRequisites();
		assertFalse("Pre-requisites list is empty", preCourses.isEmpty());
		assertTrue("Course does not return list of pre-requisites", preCourses.get(0) instanceof Integer);
		assertEquals("Wrong number of Pre-requisites returned for course", 2, preCourses.size());
		
		List<Course> duplicateCourses = new ArrayList<Course>();
		duplicateCourses.add(course2);
		course.addPreRequisites(duplicateCourses);
		assertEquals("Duplicate course was added to Pre-requisite", 2, preCourses.size());
	}
	
	public void testCourseShouldReturnWeightOfAssignment() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		course.addAssignment(12324301, 10);
		
		assertEquals("Course returns wrong assignment weight", 10, course.weightOfAssignment(12324301));
	}
	
	public void testCourseShouldReturnWeightofMidterm() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		course.addMiterm(12324302, 25);
		
		assertEquals("Course returns wrong midterm weight", 25, course.weightOfMidterm(12324302));
	}
	
	public void testCourseShouldReturnWeightOfFinal() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		course.addFinalExam(60);
		
		assertEquals("Course returns wrong weight for final", 60, course.weightOfFinal());
	}
	
	public void testCourseShouldThrowExceptionWhenGradeWeightExceedsHundred() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		course.addFinalExam(60);
		course.addMiterm(12324302, 25);
		
	    try {
	    		course.addAssignment(12324301, 20);
	    		fail("Exceeding grade weight of 100 doesn't throw an exception");
		} catch (CourseException e) {
		}
	}
	
	public void testCourseShouldThrowExceptionWhenStudentGradeIsAboveHundred() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Student student = new Student("Ethan Hawke", 10160149, 16, true);
		
		course.addStudent(student);
		course.addFinalExam(100);
		
		try {
			course.addStudentGradeForFinal(student, 101);
	    		fail("Adding student above hundred doesn't throw an exception");
		} catch (CourseException e) {
			assertEquals(e.getMessage(), "Student's mark for course exceeds 100");
		}
	}
	
	public void testCourseShouldThrowExceptionWhenAddingGradeForGhostStudent() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Student student = new Student("Ethan Hawke", 10160149, 16, true);
		
		course.addFinalExam(100);
		
		try {
			course.addStudentGradeForFinal(student, 98);
	    		fail("Adding a grade for an unregistered course student doesn't throw an exception");
		} catch (CourseException e) {
			assertEquals(7, e.getErrorCode());
			assertEquals(e.getMessage(), "The student is not registered for this course");
		}
	}
	
	public void testCourseShouldReturnMarkForStudent() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Student student = new Student("Ethan Hawke", 10160149, 16, true);
		
		course.addStudent(student);
		course.addFinalExam(100);
		course.addStudentGradeForFinal(student, 75);
		assertEquals("Course returns wrong mark for student", 75, course.markForStudent(student));
	}
	
	public void testCourseShouldReturnFalseForProject() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertFalse(course.hasProject());
	}
	
	public void testCourseShouldStateCapacityOfCourseAndNotGoOverLimit() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Student student1 = new Student("Ethan Hawke", 10160149, 16, true);
		
		course.addStudent(student1);
		assertFalse(course.isFull());
		
		Student student2 = new Student("Mabel Hawke", 10160150, 16, true);
		Student student3 = new Student("Jonah Hawke", 10160151, 16, true);
		Student student4 = new Student("Wendy Hawke", 10160152, 12, true);
		Student student5 = new Student("Tom Hawke", 10160153, 12, true);
		Student student6 = new Student("Hogan Hawke", 101601454, 15, true);
		Student student7 = new Student("Sam Hawke", 10160155, 15, true);
		Student student8 = new Student("Mike Hawke", 10160156, 14, true);
		Student student9 = new Student("John Hawke", 10160157, 14, true);
		Student student10 = new Student("Peter Hawke", 10160158, 16, false);
		Student student11 = new Student("Tommy Hawke", 10160159, 16, false);
		Student student12 = new Student("Seleck Hawke", 10160160, 16, false);
		Student student13 = new Student("Judy Hawke", 10160161, 16, false);
		Student student14 = new Student("Jude Hawke", 10160162, 16, false);
		Student student15 = new Student("Basil Hawke", 10160163, 16, false);
		Student student16 = new Student("Gana Hawke", 10160164, 16, false);
		Student student17 = new Student("Richard Hawke", 10160165, 16, false);
		Student student18 = new Student("Alex Hawke", 10160166, 16, false);
		Student student19 = new Student("Cindy Hawke", 10160167, 16, true);
		Student student20 = new Student("Sarah Hawke", 10160168, 16, true);
		Student student21 = new Student("Sara Hawke", 10160169, 16, true);
		Student student22 = new Student("Vatsa Hawke", 10160170, 16, true);
		Student student23 = new Student("Peggy Hawke", 10160171, 16, true);
		Student student24 = new Student("Mary Hawke", 10160172, 16, true);
		Student student25 = new Student("Frank Hawke", 10160173, 16, true);
		
		course.addStudent(student2);
		course.addStudent(student3);
		course.addStudent(student4);
		course.addStudent(student5);
		course.addStudent(student6);
		course.addStudent(student7);
		course.addStudent(student8);
		course.addStudent(student9);
		course.addStudent(student10);
		course.addStudent(student11);
		course.addStudent(student12);
		course.addStudent(student13);
		course.addStudent(student14);
		course.addStudent(student15);
		course.addStudent(student16);
		course.addStudent(student17);
		course.addStudent(student18);
		course.addStudent(student19);
		course.addStudent(student20);
		course.addStudent(student21);
		course.addStudent(student22);
		course.addStudent(student23);
		course.addStudent(student24);
		course.addStudent(student25);
		
		assertFalse(course.isFull());
		
		Student student26 = new Student("Sandra Hawke", 10160174, 16, true);
		course.addStudent(student26);
		assertTrue(course.isFull());
		
		try {
			Student student27 = new Student("Bella Hawke", 10160175, 16, true);
			course.addStudent(student27);
			fail("Exception not throw on registering student after course limit has been reached.");
		} catch (CourseException e) {
			assertEquals(8, e.getErrorCode());
			assertEquals(e.getMessage(), "Course is full. Can no longer register students.");
		}
	}
	
	public void testCourseShouldRegisterStudentToCourse() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertTrue("Student list is not empty", students.isEmpty());
		
		Student student1 = new Student("Denzel Washington", 10160139, 12, true);
		Student student2 = new Student("Ethan Hawke", 10160149, 16, true);
		
		course.addStudent(student1);
		course.addStudent(student2);
		
		students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertFalse("Student list is empty", students.isEmpty());
		assertEquals("Wrong number of students registered for course", 2, students.size());
	}
	
	public void testCourseShouldRemoveStudentFromCourse() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertTrue("Student list is not empty", students.isEmpty());
		
		Student student1 = new Student("Denzel Washington", 10160139, 12, true);
		Student student2 = new Student("Ethan Hawke", 10160149, 16, true);
		
		course.addStudent(student1);
		course.addStudent(student2);
		
		students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertFalse("Student list is empty", students.isEmpty());
		assertEquals("Wrong number of students registered for course", 2, students.size());
		
		course.removeStudent(student1);
		students = course.students();
		assertEquals("Wrong number of students registered for course", 1, students.size());
		assertSame(student2, students.get(0));
	}
	
	public void testCourseShouldThrowExceptionOnRemovingGhostStudent() throws CourseException, IOException {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Student student1 = new Student("Denzel Washington", 10160139, 12, true);
		
		try {
			course.removeStudent(student1);
	    		fail("Exception not thrown when removing an unregistered course student.");
		} catch (CourseException e) {
			assertEquals(7, e.getErrorCode());
			assertEquals(e.getMessage(), "The student is not registered for this course");
		}
	}
	
}
