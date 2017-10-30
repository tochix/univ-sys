package com.ogb.anselm.univ.sys;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;

public class University {

	private String name;
	private final List<Course> courses;
	private final List<Student> students;
	private static final Logger logger = LogManager.getLogger(University.class);
	
	public University(String univName) {
		DOMConfigurator.configure("log4j.xml");
		logger.info("university constructor called");
		
		this.name = univName;
		
		this.courses = new ArrayList<Course>();
		this.students = new ArrayList<Student>();
	}

	public List<Course> courses() {
		logger.info("university.courses called");
		return this.courses;
	}

	public void addCourse(Course course) {
		logger.info("university.addCourse called");
		this.courses.add(course);
	}

	public List<Student> students() {
		logger.info("university.students called");
		return this.students;
	}

	public void enrolStudent(Student student) {
		logger.info("university.enrolStudent called");
		this.students.add(student);
	}
	
	public Student createStudent(String studentName, int studentNumber, int studentDepartment, boolean fullTime) {
		logger.info("university.createStudent called");
		
		Student student = new Student(studentName, studentNumber, studentDepartment, fullTime);
		this.enrolStudent(student);
		
		return student;
	}

	public Course createCourse(String name, int capSize, int code, boolean enforcePrereqs,
			int numMidterms, int numAssignments, boolean hasFinal) 
					throws CourseException, IOException {
		
		logger.info("university.createCourse called");
		
		Course course = new Course(enforcePrereqs, numMidterms, numAssignments, hasFinal, capSize, name, code);
		this.courses.add(course);
		
		return course;
	}

	public void registerStudentForCourse(Course course, Student student) throws UniversityException, CourseException {
		logger.info("university.registerStudentForCourse called");
		
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
		logger.info("university.cancelCourse called");
		
		this.checkCourseExists(course);
		course.deRegisterAllStudents();
	}

	public void destroyCourse(Course course) throws UniversityException {
		logger.info("university.destroyCourse called");
		
		this.checkCourseExists(course);
		this.courses.remove(course);
	}
}
