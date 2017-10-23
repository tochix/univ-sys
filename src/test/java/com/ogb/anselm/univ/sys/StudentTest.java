package com.ogb.anselm.univ.sys;

import java.io.IOException;
import java.util.List;

import junit.framework.TestCase;

public class StudentTest extends TestCase {
	public void testStudentShouldListCompletedCourses() {
		Student student = new Student("John Carmack", 101061639, 12, true);
		Course course1 = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Course course2 = new Course(true, 1, 2, false, 28, "Ecology", 123245);
		
		List<Course> completedCourses = student.completedCourses();
		assertTrue("Completed courses for student is not empty", completedCourses.isEmpty());
		
		student.addCompletedCourse(course1);
		student.addCompletedCourse(course2);
		
		completedCourses = student.completedCourses();
		assertEquals(2, completedCourses.size());
		assertTrue(completedCourses.contains(course1));
		assertTrue(completedCourses.contains(course2));
	}
	
	public void testStudentShouldReturnStudentNumber() {
		Student student = new Student("John Carmack", 101061639, 12, true);
		assertEquals(101061639, student.studentNumber());
	}
	
	public void testStudentShouldReturnStudentName() {
		Student student = new Student("John Carmack", 101061639, 12, true);
		assertEquals("John Carmack", student.name());
	}
	
	public void testStudentShouldReturnCurrentCourses() throws CourseException, IOException {
		Student student = new Student("John Carmack", 101061639, 12, true);
		Course course1 = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Course course2 = new Course(true, 1, 2, false, 28, "Ecology", 123245);
		
		List<Course> currentCourses = student.currentCourses();
		assertTrue(currentCourses.isEmpty());
		
		student.registerCourse(course1);
		student.registerCourse(course2);
		
		currentCourses = student.currentCourses();
		assertEquals(2, currentCourses.size());
		assertTrue(currentCourses.contains(course1));
		assertTrue(currentCourses.contains(course2));
	}
	
	public void testStudentShouldReturnFullTimeStatusOfStudent() {
		Student student = new Student("John Carmack", 101061639, 12, false);
		assertFalse(student.isFullTime());
		
		Student student = new Student("Wayne Damian", 101061747, 16, true);
		assertTrue(student.isFullTime());
	}
	
	public void testStudentShouldReturnCreationStatus() {
		Student student = new Student("John Carmack", 101061639, 12, false);
		assertFalse(student.isCreated());
		
		University univ = new University();
		student.enrolToUnivesity(univ);
		assertTrue(student.isCreated());
	}
	
	public void testStudentShouldRegisterToCourse() {
		Student student = new Student("John Carmack", 101061639, 12, true);
		Course course1 = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Course course2 = new Course(true, 1, 2, false, 28, "Ecology", 123245);
		
		List<Course> currentCourses = student.currentCourses();
		assertTrue(currentCourses.isEmpty());
		
		student.registerCourse(course1);
		student.registerCourse(course2);
		
		currentCourses = student.currentCourses();
		assertEquals(2, currentCourses.size());
		assertTrue(currentCourses.contains(course1));
		assertTrue(currentCourses.contains(course2));
	}
	
	public void testStudentShouldDropCourse() {
		Student student = new Student("John Carmack", 101061639, 12, true);
		Course course1 = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Course course2 = new Course(true, 1, 2, false, 28, "Ecology", 123245);
		
		List<Course> currentCourses = student.currentCourses();
		assertTrue(currentCourses.isEmpty());
		
		student.registerCourse(course1);
		student.registerCourse(course2);
		
		List<Course> droppedCourses = student.getDroppedCourses();
		assertTrue(droppedCourses.isEmpty());
		
		currentCourses = student.currentCourses();
		assertEquals(2, currentCourses.size());
		assertTrue(currentCourses.contains(course1));
		assertTrue(currentCourses.contains(course2));
		
		student.dropCourse(course1);
		droppedCourses = student.getDroppedCourses();
		currentCourses = student.currentCourses();
		
		assertEquals(1, droppedCourses.size());
		assertEquals(1, currentCourses);
		assertTrue(droppedCourses.contains(course1));
		assertTrue(currentCourses.contains(course2));
	}
	
	public void testStudentShouldAllowDeregisteringOfCourse() {
		Student student = new Student("John Carmack", 101061639, 12, true);
		Course course1 = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Course course2 = new Course(true, 1, 2, false, 28, "Ecology", 123245);
		
		List<Course> currentCourses = student.currentCourses();
		assertTrue(currentCourses.isEmpty());
		
		student.registerCourse(course1);
		student.registerCourse(course2);
		
		List<Course> droppedCourses = student.getDroppedCourses();
		assertTrue(droppedCourses.isEmpty());
		
		currentCourses = student.currentCourses();
		assertEquals(2, currentCourses.size());
		assertTrue(currentCourses.contains(course1));
		assertTrue(currentCourses.contains(course2));
		
		student.deRegisterCourse(course1);
		currentCourses = student.currentCourses();
		
		assertEquals(1, currentCourses);
		assertTrue(currentCourses.contains(course2));
	}
	
}
