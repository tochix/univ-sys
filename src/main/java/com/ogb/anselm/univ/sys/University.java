package com.ogb.anselm.univ.sys;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class University {

	private String name;
	private final List<Course> courses;
	private final List<Student> students;
	
	public University(String univName) {
		this.name = univName;
		
		this.courses = new ArrayList<Course>();
		this.students = new ArrayList<Student>();
	}

	public List<Course> courses() {
		return this.courses;
	}

	public void addCourse(Course course) {
		this.courses.add(course);
	}

	public List<Student> students() {
		return this.students;
	}

	public void enrolStudent(Student student) {
		this.students.add(student);
	}

	public Course createCourse(String name, int capSize, int code, boolean enforcePrereqs,
			int numMidterms, int numAssignments, boolean hasFinal) 
					throws CourseException, IOException {
		
		Course course = new Course(enforcePrereqs, numMidterms, numAssignments, hasFinal, capSize, name, code);
		this.courses.add(course);
		
		return course;
	}

	public void registerStudentForCourse(Course course, Student student) throws UniversityException, CourseException {
		this.checkCourseExists(course);
		this.checkStudentExists(student);
		
		course.addStudent(student);
		student.registerCourse(course);
	}
	
	private void checkStudentExists(Student student) throws UniversityException {
		if (!this.students.contains(student)) {
			throw new UniversityException(UniversityExceptionCodes.INVALID_STUDENT);
		}
	}
	
	private void checkCourseExists(Course course) throws UniversityException {
		if (!this.courses.contains(course)) {
			throw new UniversityException(UniversityExceptionCodes.INVALID_COURSE);
		}
	}

	public void cancelCourse(Course course) throws UniversityException, CourseException {
		this.checkCourseExists(course);
		course.deRegisterAllStudents();
	}

	public void destroyCourse(Course course) throws UniversityException {
		this.checkCourseExists(course);
		this.courses.remove(course);
	}
}
