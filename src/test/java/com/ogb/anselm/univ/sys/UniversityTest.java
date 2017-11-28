package com.ogb.anselm.univ.sys;

import java.io.IOException;
import java.util.List;
import java.util.function.Function;

import junit.framework.TestCase;

public class UniversityTest extends TestCase {
	
	public void testUniversityShouldReturnListOfCourses() throws CourseException, IOException {
		University university = new University("Carleton");
		Course course1 = new Course(true, 2, 5, false, 26, "Applied Chemistry", 123243);
		Course course2 = new Course(true, 1, 2, false, 28, "Ecology", 123245);
		
		List<Course> universityCourses = university.courses();
		assertTrue(universityCourses.isEmpty());
		university.addCourse(course1);
		university.addCourse(course2);
		
		universityCourses = university.courses();
		assertEquals(2, universityCourses.size());
		assertTrue(universityCourses.contains(course1));
		assertTrue(universityCourses.contains(course2));
	}
	
	public void testUniversityShouldReturnListOfStudents() {
		University university = new University("Carleton");
		Student student1 = new Student("John Carmack", 101061639, 12, true);
		Student student2 = new Student("Wayne Damian", 101061747, 16, true);
		
		List<Student> universityStudents = university.students();
		assertTrue(universityStudents.isEmpty());
		university.enrolStudent(student1);
		university.enrolStudent(student2);
		
		universityStudents = university.students();
		assertEquals(2, universityStudents.size());
		assertTrue(universityStudents.contains(student1));
		assertTrue(universityStudents.contains(student2));
	}
	
	public void testUniversityShouldCreateCourse() throws CourseException, IOException, UniversityException {
		University university = new University("Carleton");
		Course course = university.createCourse("Applied Chemistry", 26, 123243, true, 2, 5, false);
		
		assertTrue(course instanceof Course);
	}
	
	public void testUniversityShouldRegisterStudentForCourse() throws CourseException, IOException, UniversityException {
		University university = new University("Carleton");
		Course course1 = university.createCourse("Applied Chemistry", 26, 123243, true, 2, 5, false);
		Course course2 = university.createCourse("Ecology", 28, 123245, true, 1, 2, false);
		Student student = new Student("Wayne Damian", 101061747, 16, true);
		
		List<Course> currentCourses = student.currentCourses();
		assertTrue(currentCourses.isEmpty());
		
		university.enrolStudent(student);
		university.registerStudentForCourse(course1, student);
		university.registerStudentForCourse(course2, student);
		
		currentCourses = student.currentCourses();
		assertEquals(2, currentCourses.size());
		assertTrue(currentCourses.contains(course1));
		assertTrue(currentCourses.contains(course2));
		
		List<Student> studentsInCourse1 = course1.students();
		List<Student> studentsInCourse2 = course2.students();
		
		assertTrue(studentsInCourse1.contains(student));
		assertTrue(studentsInCourse2.contains(student));
	}
	
	public void testUniversityShouldDeRegisterStudentsOnCourseCancellation() throws CourseException, IOException, UniversityException {
		University university = new University("Carleton");
		Course course1 = university.createCourse("Applied Chemistry", 26, 123243, true, 2, 5, false);
		Student student1 = new Student("Wayne Damian", 101061747, 16, true);
		Student student2 = new Student("John Carmack", 101061639, 12, true);
		
		university.enrolStudent(student1);
		university.enrolStudent(student2);
		
		List<Student> studentsInCourse1 = course1.students();
		assertTrue(studentsInCourse1.isEmpty());
		
		university.registerStudentForCourse(course1, student1);
		university.registerStudentForCourse(course1, student2);
		
		studentsInCourse1 = course1.students();
		assertEquals(2, studentsInCourse1.size());
		assertTrue(studentsInCourse1.contains(student1));
		assertTrue(studentsInCourse1.contains(student2));
		
		List<Course> student1CurrentCourses = student1.currentCourses();
		assertEquals(1, student1CurrentCourses.size());
		assertTrue(student1CurrentCourses.contains(course1));
		
		university.cancelCourse(course1);
		
		studentsInCourse1 = course1.students();
		assertTrue(studentsInCourse1.isEmpty());
		assertFalse(studentsInCourse1.contains(student1));
		assertFalse(studentsInCourse1.contains(student2));
		
		student1CurrentCourses = student1.currentCourses();
		assertTrue(student1CurrentCourses.isEmpty());
		assertFalse(student1CurrentCourses.contains(course1));
	}
	
	public void testUniversityShouldDestroyCourse() throws CourseException, IOException, UniversityException {
		University university = new University("Carleton");
		Course course1 = university.createCourse("Applied Chemistry", 26, 123243, true, 2, 5, false);
		Course course2 = university.createCourse("Ecology", 27, 123245, true, 1, 2, false);
		Student student1 = new Student("Wayne Damian", 101061747, 16, true);
		Student student2 = new Student("John Carmack", 101061639, 12, true);
		
		university.enrolStudent(student1);
		university.enrolStudent(student2);

		university.registerStudentForCourse(course1, student1);
		university.registerStudentForCourse(course2, student2);
		
		List<Course> universityCourses = university.courses();
		assertEquals(2, universityCourses.size());
		assertTrue(universityCourses.contains(course1));
		assertTrue(universityCourses.contains(course2));
		
		university.destroyCourse(course1);
		
		universityCourses = university.courses();
		assertEquals(1, universityCourses.size());
		assertFalse(universityCourses.contains(course1));
		assertTrue(universityCourses.contains(course2));
	}
}
