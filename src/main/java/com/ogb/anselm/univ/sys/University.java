package com.ogb.anselm.univ.sys;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Random;
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
	
	public Student createStudent(String studentName, int studentNumber, int studentDepartment, 
			boolean fullTime) throws UniversityException {
		logger.info("university.createStudent called");
		
		if (this.studentAlreadyExists(studentNumber)) {
			throw new UniversityException(UniversityExceptionCodes.REDUNDANT_STUDENT);
		}
		
		Student student = new Student(studentName, studentNumber, studentDepartment, fullTime);
		this.enrolStudent(student);
		
		return student;
	}
	
	private boolean studentAlreadyExists(int studentNumber) {
		for (Student student : this.students) {
			if (student.studentNumber() == studentNumber) {
				return true;
			}
		}
		
		return false;
	}

	public Course createCourse(String name, int capSize, int code, boolean enforcePrereqs,
			int numMidterms, int numAssignments, boolean hasFinal) 
					throws CourseException, IOException, UniversityException {
		
		logger.info("university.createCourse called");
		if (this.courseAlreadyExists(code)) {
			throw new UniversityException(UniversityExceptionCodes.REDUNDANT_COURSE);
		}
		
		Course course = new Course(enforcePrereqs, numMidterms, numAssignments, hasFinal, capSize, name, code);
		this.courses.add(course);
		
		return course;
	}
	
	private boolean courseAlreadyExists(int courseCode) {
		for (Course course : this.courses) {
			if (course.code() == courseCode) {
				return true;
			}
		}
		
		return false;
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
	
	public void removeStudent(int studentNumber) throws UniversityException, CourseException {
		logger.info("university.removeStudent called");
		Student student = null;
		
		for (Student s : this.students) {
			if (s.studentNumber() == studentNumber) {
				student = s;
				break;
			}
		}
		
		if (student == null) {
			throw new UniversityException(UniversityExceptionCodes.INVALID_STUDENT);
		}
		
		List<Course> studentCourses = student.currentCourses();
		for (Course course : studentCourses) {
			course.removeStudent(student);
		}
		
		this.students.remove(student);
	}

	public int submitStudentAssignment(Student student, Course course) 
			throws UniversityException, CourseException {
		
		this.checkStudentExists(student);
		this.checkCourseExists(course);
		course.checkAndThrowForGhostStudent(student);
		
		if (course.numAssignments() <= 0) {
			throw new CourseException(CourseExceptionCodes.COURSE_HAS_NO_ASSIGNMENT);
		}
		
		return generateRandomGrade();
	}

	public int submitStudentMidterm(Student student, Course course) 
			throws UniversityException, CourseException {
		
		this.checkStudentExists(student);
		this.checkCourseExists(course);
		course.checkAndThrowForGhostStudent(student);
		
		if (course.numMidTerms() <= 0) {
			throw new CourseException(CourseExceptionCodes.COURSE_HAS_NO_MIDTERM);
		}
		
		return generateRandomGrade();
	}

	public int submitStudentProject(Student student, Course course) 
			throws UniversityException, CourseException {
		
		this.checkStudentExists(student);
		this.checkCourseExists(course);
		course.checkAndThrowForGhostStudent(student);
		
		return generateRandomGrade();
	}

	public int submitStudentFinal(Student student, Course course) 
			throws UniversityException, CourseException {
		
		this.checkStudentExists(student);
		this.checkCourseExists(course);
		course.checkAndThrowForGhostStudent(student);
		
		if (!course.hasFinal()) {
			throw new CourseException(CourseExceptionCodes.COURSE_HAS_NO_FINALS);
		}
		
		return generateRandomGrade();
	}
	
	private int generateRandomGrade() {
		Random randomIntGenerator = new Random();
		int grade = randomIntGenerator.nextInt(101);
		
		return grade;
	}
	
	public Course getCourseByCode(int courseCode) throws Exception {
		for (Course course : this.courses) {
			if (course.code() == courseCode) {
				return course;
			}
		}
		
		throw new Exception("Course with code: " + courseCode + " does not exist.");
	}

	public Student getStudentByNumber(int studentNumber) throws Exception {
		for (Student student : this.students) {
			if (student.studentNumber() == studentNumber) {
				return student;
			}
		}
		
		throw new Exception("Student with number: " + studentNumber + " does not exist.");
	}
}
