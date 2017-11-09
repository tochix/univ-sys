package com.ogb.anselm.univ.sys;

import java.util.ArrayList;
import java.util.List;

import javax.lang.model.type.NullType;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.apache.log4j.xml.DOMConfigurator;

public class Student {

	private static final Logger logger = LogManager.getLogger(Student.class);
	private String studentName;
	private final int studentNumber;
	private int studentDepartment;
	private boolean fullTime;
	private List<Course> completedCourses;
	private List<Course> currentCourses;
	private List<Course> droppedCourses;
	private List<Integer> courseGrades;
	private University university;
	
	public Student(String studentName, int studentNumber, int studentDepartment, boolean fullTime) {
		DOMConfigurator.configure("log4j.xml");
		
		this.studentName = studentName;
		this.studentNumber = studentNumber;
		this.studentDepartment = studentDepartment;
		this.fullTime = fullTime;
		
		this.completedCourses = new ArrayList<Course>();
		this.currentCourses = new ArrayList<Course>();
		this.droppedCourses = new ArrayList<Course>();
		this.courseGrades = new ArrayList<Integer>();
		
		logger.info("student constructor called");
	}

	public List<Course> completedCourses() {
		logger.info("student.completedCourses");
		return completedCourses;
	}

	public void addCompletedCourse(Course course) {
		logger.info("student.addCompletedCourse called");
		this.completedCourses.add(course);
	}

	public int studentNumber() {
		logger.info("student.studentNumber called");
		return this.studentNumber;
	}

	public String name() {
		logger.info("student.name called");
		return this.studentName;
	}

	public List<Course> currentCourses() {
		logger.info("student.currentCourses called");
		return this.currentCourses;
	}

	public void registerCourse(Course course) throws CourseException {
		logger.info("student.registerCourse called");
		if (this.currentCourses.contains(course)) {
			return;
		}
		
		course.addStudent(this);
		this.currentCourses.add(course);
	}

	public boolean isFullTime() {
		logger.info("student.isFullTime called");
		return this.fullTime;
	}

	public boolean isCreated() {
		logger.info("student.isCreated called");
		return university instanceof University;
	}

	public void enrolToUniversity(University univ) {
		logger.info("student.enrolToUniversity called");
		this.university = univ;
	}

	public List<Course> getDroppedCourses() {
		logger.info("student.getDroppedCourses called");
		return this.droppedCourses;
	}

	public void dropCourse(Course course) throws CourseException {
		logger.info("student.dropCourse called");
		this.deRegisterCourse(course);
		this.droppedCourses.add(course);
	}
	
	public void deRegisterCourse(Course course) throws CourseException {
		logger.info("student.deRegisterCourse called");
		if (!this.currentCourses.contains(course)) {
			throw new CourseException(CourseExceptionCodes.STUDENT_NOT_REGISTERED_FOR_COURSE);
		}
		
		course.removeStudent(this);
		this.currentCourses.remove(course);
	}
	
	public String toString() {
		String studentDesc = "--- \n Student '%s' with student number %d is a %s time student. \n"
				+ " He is currently registered in %d courses. \n";
		
		if (this.currentCourses.size() > 0) {
			studentDesc += " They are: ";
			
			for (Course course : this.currentCourses) {
				studentDesc += "\n \t" + course.title() + " with course code: " + 
						course.code();
			}
		}
		
		if (this.droppedCourses.size() > 0) {
			studentDesc += "\n Student has dropped courses: ";
			
			for (Course course : this.droppedCourses) {
				studentDesc += "\n \t" + course.title() + " with course code: " + 
						course.code() + " [DR]";
			}
		}
		
		studentDesc += "\n---";
		String fullStr = fullTime ? "full" : "part";
		studentDesc = String.format(studentDesc, studentName, studentNumber, fullStr, 
				currentCourses.size());
		
		return studentDesc;
	}

	public void addCourseGrade(int grade) {
		this.courseGrades.add(grade);
	}
	
	public float getAverageGrade() {
		int numCourses = this.courseGrades.size();
		int gradesSum = 0;
		
		if (numCourses <= 0) {
			return 0;
		}
		
		for (int grade : this.courseGrades) {
			gradesSum += grade;
		}
		
		if (gradesSum <= 0) {
			return 0;
		}
		
		int avg = gradesSum / numCourses;
		return avg;
	}
}
