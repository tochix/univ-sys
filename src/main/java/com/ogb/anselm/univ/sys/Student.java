package com.ogb.anselm.univ.sys;

import java.util.ArrayList;
import java.util.List;

import javax.lang.model.type.NullType;

public class Student {

	private String studentName;
	private final int studentNumber;
	private int studentDepartment;
	private boolean fullTime;
	private List<Course> completedCourses;
	private List<Course> currentCourses;
	private List<Course> droppedCourses;
	private University university;
	
	public Student(String studentName, int studentNumber, int studentDepartment, boolean fullTime) {
		this.studentName = studentName;
		this.studentNumber = studentNumber;
		this.studentDepartment = studentDepartment;
		this.fullTime = fullTime;
		
		this.completedCourses = new ArrayList<Course>();
		this.currentCourses = new ArrayList<Course>();
		this.droppedCourses = new ArrayList<Course>();
	}

	public List<Course> completedCourses() {
		return completedCourses;
	}

	public void addCompletedCourse(Course course) {
		this.completedCourses.add(course);
	}

	public int studentNumber() {
		return this.studentNumber;
	}

	public String name() {
		return this.studentName;
	}

	public List<Course> currentCourses() {
		return this.currentCourses;
	}

	public void registerCourse(Course course) throws CourseException {
		course.addStudent(this);
		this.currentCourses.add(course);
	}

	public boolean isFullTime() {
		return this.fullTime;
	}

	public boolean isCreated() {
		return university instanceof University;
	}

	public void enrolToUniversity(University univ) {
		this.university = univ;
	}

	public List<Course> getDroppedCourses() {
		return this.droppedCourses;
	}

	public void dropCourse(Course course) throws CourseException {
		this.deRegisterCourse(course);
		this.droppedCourses.add(course);
	}
	
	public void deRegisterCourse(Course course) throws CourseException {
		if (!this.currentCourses.contains(course)) {
			throw new CourseException(CourseExceptionCodes.STUDENT_NOT_REGISTERED_FOR_COURSE);
		}
		
		course.removeStudent(this);
		this.currentCourses.remove(course);
	}
	
}
