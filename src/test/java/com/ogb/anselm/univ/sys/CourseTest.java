package com.ogb.anselm.univ.sys;

import java.awt.List;
import java.util.ArrayList;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import org.junit.Rule;
import org.junit.rules.ExpectedException;

public class CourseTest extends TestCase {
	
	@Rule
	public ExpectedException exception = ExpectedException.none();
	
	public void testCourseTitleShouldReturnSameTitle() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertEquals("Course title is different from the one provided.", "Applied Chemistry", course.title());
	}
	
	public void testCourseShouldHaveTwoOrLessMidterms() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertEquals("Course midterms doesn't return correct value", 2, course.numMidTerms());
	}
	
	public void testCourseShouldHaveSixDigitCode() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertTrue("Course code is not an integer", course.code() instanceof Integer);
		
		int courseCode = course.code();
		int courseCodeLength = String.valueOf(courseCode).length();
		assertEquals("Course code is not a 6 digit code", 6, courseCodeLength);
		assertEquals("Course returned a different course code", 123243, courseCode);
	}
	
	public void testCourseShouldListStudentsInCourse() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertTrue("Student list is not empty", students.isEmpty());
		
		Student student1 = new Student("Denzel Washington", 10160139, 12);
		Student student2 = new Student("Ethan Hawke", 10160149, 16);
		
		course.addStudent(student1);
		course.addStudent(student2);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertFalse("Student list is empty", students.isEmpty());
		assertEquals("Wrong number of students registered for course", 2, students.getSize());
	}
	
	public void testCourseShouldListPreRequisites() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Integer> preCourses = course.preRequisites();
		assertTrue("Course does not return list of pre-requisites", preCourses instanceof List);
		assertTrue("Pre-requisites list is not empty", preCourses.isEmpty());
		
		Course course1 = new Course(true, 2, 5, false, 24, "Algebra");
		Course course2 = new Course(true, 2, 5, false, 26, "Organic Chemistry");
		
		List<Course> courses = new ArrayList<Course>();
		courses.add(course1);
		courses.add(course2);
		
		course.addPreRequisites(courses);
		
		List<Integer> preCourses = course.preRequisites();
		assertTrue("Course does not return list of pre-requisites", students instanceof List);
		assertFalse("Pre-requisites list is empty", students.isEmpty());
		assertEquals("Wrong number of Pre-requisites returned for course", 2, students.getSize());
	}
	
	public void testCourseShouldReturnWeightOfAssignment() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		course.addAssignment(12324301, 10, "First Assignment");
		
		assertEquals("Course returns wrong assignment weight", 10, course.weightOfAssignment(12324301));
	}
	
	public void testCourseShouldReturnWeightofMidterm() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		course.addMiterm(12324302, 25, "October Midterm");
		
		assertEquals("Course returns wrong midterm weight", 25, course.weightOfMidterm(12324302));
	}
	
	public void testCourseShouldReturnWeightOfFinal() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		course.addFinalExam(60);
		
		assertEquals("Course returns wrong weight for final", 60, course.weightOfFinal());
	}
	
	public void testCourseShouldReturnMarkForStudent() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Student student = new Student("Ethan Hawke", 10160149, 16);
		
		course.addStudent(student);
		course.addFinalExam(100);
		course.addStudentGradeForFinal(student, 75);
		assertEquals("Course returns wrong mark for student", 75, course.markForStudent(student));
	}
	
	public void testCourseShouldReturnFalseForProject() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		assertFalse(course.hasProject());
	}
	
	public void testCourseShouldStateCapacityOfCourse() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Student student1 = new Student("Ethan Hawke", 10160149, 16);
		
		course.addStudent(student1);
		assertFalse(course.isFull());
		
		Student student2 = new Student("Mabel Hawke", 10160150, 16);
		Student student3 = new Student("Jonah Hawke", 10160151, 16);
		Student student4 = new Student("Wendy Hawke", 10160152, 12);
		Student student5 = new Student("Tom Hawke", 10160153, 12);
		Student student6 = new Student("Hogan Hawke", 101601454, 15);
		Student student7 = new Student("Sam Hawke", 10160155, 15);
		Student student8 = new Student("Mike Hawke", 10160156, 14);
		Student student9 = new Student("John Hawke", 10160157, 14);
		Student student10 = new Student("Peter Hawke", 10160158, 16);
		Student student11 = new Student("Tommy Hawke", 10160159, 16);
		Student student12 = new Student("Seleck Hawke", 10160160, 16);
		Student student13 = new Student("Judy Hawke", 10160161, 16);
		Student student14 = new Student("Jude Hawke", 10160162, 16);
		Student student15 = new Student("Basil Hawke", 10160163, 16);
		Student student16 = new Student("Gana Hawke", 10160164, 16);
		Student student17 = new Student("Richard Hawke", 10160165, 16);
		Student student18 = new Student("Alex Hawke", 10160166, 16);
		Student student19 = new Student("Cindy Hawke", 10160167, 16);
		Student student20 = new Student("Sarah Hawke", 10160168, 16);
		Student student21 = new Student("Sara Hawke", 10160169, 16);
		Student student22 = new Student("Vatsa Hawke", 10160170, 16);
		Student student23 = new Student("Peggy Hawke", 10160171, 16);
		Student student24 = new Student("Mary Hawke", 10160172, 16);
		Student student25 = new Student("Frank Hawke", 10160173, 16);
		
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
		
		Student student26 = new Student("Sandra Hawke", 10160174, 16);
		course.addStudent(student26);
		assertTrue(course.isFull());
		
		exception.expect(CourseException.class);
	    exception.expectMessage("Course is full. Can no longer register students");
	    Student student27 = new Student("Bella Hawke", 10160175, 16);
		course.addStudent(student27);
	}
	
	public void testCourseShouldRegisterStudentToCourse() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertTrue("Student list is not empty", students.isEmpty());
		
		Student student1 = new Student("Denzel Washington", 10160139, 12);
		Student student2 = new Student("Ethan Hawke", 10160149, 16);
		
		course.addStudent(student1);
		course.addStudent(student2);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertFalse("Student list is empty", students.isEmpty());
		assertEquals("Wrong number of students registered for course", 2, students.getSize());
	}
	
	public void testCourseShouldRemoveStudentFromCourse() {
		Course course = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertTrue("Student list is not empty", students.isEmpty());
		
		Student student1 = new Student("Denzel Washington", 10160139, 12);
		Student student2 = new Student("Ethan Hawke", 10160149, 16);
		
		course.addStudent(student1);
		course.addStudent(student2);
		
		List<Student> students = course.students();
		assertTrue("Course does not return list of students", students instanceof List);
		assertFalse("Student list is empty", students.isEmpty());
		assertEquals("Wrong number of students registered for course", 2, students.getSize());
		
		course.removeStudent(student1);
		List<Student> students = course.students();
		assertEquals("Wrong number of students registered for course", 1, students.getSize());
		assertSame(student2, students[0]);
	}
	
}
