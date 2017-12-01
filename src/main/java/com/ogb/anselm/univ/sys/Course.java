package com.ogb.anselm.univ.sys;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;

import org.apache.log4j.xml.DOMConfigurator;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

public class Course {
	private final Properties properties = new Properties();
	private static final Logger logger = LogManager.getLogger(Course.class);
	private final int maxNumberOfAssignments;
	private final int maxNumberOfMidTerms;
	private final int minCourseCapacity;
	private final int courseCodeLength;
	private final int maxGradeWeight;
	private List<Student> students;
	private List<Course> preRequisites;
	private List<Integer> preRequisiteCodes;
	private HashMap<Integer, Integer> assignments;
	private HashMap<Integer, Integer> midTerms;
	private HashMap<Student, Integer> studentsGrade;
	private int finalExamWeight;
	protected int totalTaskWeight;
	private boolean enforcePrereqs;
	private int numberOfMidterms;
	private int numberOfAssignments;
	private boolean hasAFinal;
	private int capSize;
	private String title;
	private int myCode;
	
	public Course (boolean enforcePrereqs, int numberOfMidterms, int numberOfAssignments,
			boolean hasAFinal, int capSize, String title, int myCode) 
					throws CourseException, IOException {
		
		DOMConfigurator.configure("log4j.xml");
		this.loadProperties();
		
		this.maxNumberOfMidTerms = this.getIntProperty("COURSE_MAX_NUMBER_OF_MIDTERMS");
		this.maxNumberOfAssignments = this.getIntProperty("COURSE_MAX_NUMBER_OF_ASSIGNMENTS");
		this.minCourseCapacity = this.getIntProperty("COURSE_MIN_CAPACITY");
		this.courseCodeLength = this.getIntProperty("COURSE_CODE_LENGTH");
		this.maxGradeWeight = this.getIntProperty("COURSE_TOTAL_GRADE_WEIGHT");
		
		int courseCodeLength = String.valueOf(myCode).length();
		if (courseCodeLength != this.courseCodeLength) {
			throw new CourseException(CourseExceptionCodes.INVALID_COURSE_CODE_LENGTH);
		}
		
		if (numberOfMidterms > this.maxNumberOfMidTerms) {
			throw new CourseException(CourseExceptionCodes.INVALID_NUMBER_OF_MIDTERMS);
		}
		
		if (numberOfAssignments > this.maxNumberOfAssignments) {
			throw new CourseException(CourseExceptionCodes.INVALID_NUMBER_OF_ASSIGNMENTS);
		}
		
		if (capSize < this.minCourseCapacity) {
			throw new CourseException(CourseExceptionCodes.INVALID_COURSE_SIZE);
		}
		
		this.preRequisiteCodes = new ArrayList<Integer>();
		this.preRequisites = new ArrayList<Course>();
		this.students = new ArrayList<Student>();
		this.assignments = new HashMap<Integer, Integer>();
		this.midTerms = new HashMap<Integer, Integer>();
		this.studentsGrade = new HashMap<Student, Integer>();
		
		this.enforcePrereqs = enforcePrereqs;
		this.numberOfMidterms = numberOfMidterms;
		this.numberOfAssignments = numberOfAssignments;
		this.hasAFinal = hasAFinal;
		this.capSize = capSize;
		this.title = title;
		this.myCode = myCode;
		
		logger.info("course constructor called.");
	}
	
	private void loadProperties() throws IOException {
		FileInputStream fis = new FileInputStream("config.properties");
		properties.load(fis);
		fis.close();
	}
	
	protected int getIntProperty(String propertyKey) {
		return Integer.parseInt(properties.getProperty(propertyKey));
	}

	public String title() {
		logger.info("course.title called");
		return this.title;
	}

	public int numMidTerms() {
		logger.info("course.numMidTerms called");
		return this.numberOfMidterms;
	}
	
	public int numAssignments() {
		logger.info("course.numAssignments called");
		return this.numberOfAssignments;
	}

	public Integer code() {
		logger.info("course.code called");
		return this.myCode;
	}

	public List<Student> students() {
		logger.info("course.students called");
		return this.students;
	}

	public void addStudent(Student student) throws CourseException {
		logger.info("course.addStudent called for student: \n" + student);
		
		if (this.isFull()) {
			throw new CourseException(CourseExceptionCodes.COURSE_IS_FULL);
		}
		
		if (!this.students.contains(student)) {
			this.students.add(student);
		}
	}

	public List<Integer> preRequisites() {
		logger.info("course.preRequisite called");
		return this.preRequisiteCodes;
	}

	public void addPreRequisites(List<Course> courses) {
		logger.info("course.addPreRequisites called");
		
		courses.forEach((course) -> {
			if (!this.preRequisiteCodes.contains(course.code())) {
				this.preRequisites.add(course);
				this.preRequisiteCodes.add(course.code());
			}
		});
	}

	public void addAssignment(int code, int weight) throws CourseException {
		logger.info("course.addAssignment called with code "+ code +" and weight "+ weight);
		
		this.addToTotalWeight(weight);
		this.assignments.put(code, weight);
	}

	public int weightOfAssignment(int code) {
		logger.info("course.weightOfAssignment called with code: " + code);
		return this.assignments.get(code);
	}

	public int weightOfMidterm(int code) {
		logger.info("course.weightOfMidterm called with code: " + code);
		return this.midTerms.get(code);
	}
	
	public void addMiterm(int code, int weight) throws CourseException {
		logger.info("course.addMiterm called");
		this.addToTotalWeight(weight);
		this.midTerms.put(code, weight);
	}

	public void addFinalExam(int weight) throws CourseException {
		logger.info("course.addFinalExam called with weight: " + weight);
		this.addToTotalWeight(weight);
		this.finalExamWeight = weight;
	}

	public int weightOfFinal() {
		logger.info("course.weightOfFinal called");
		return this.finalExamWeight;
	}
	
	protected void addToTotalWeight(int weight) throws CourseException {
		if ((this.totalTaskWeight + weight) > this.maxGradeWeight) {
			throw new CourseException(CourseExceptionCodes.INVALID_GRADE_WEIGHT);
		}
		
		this.totalTaskWeight += weight;
	}

	public void addStudentGradeForFinal(Student student, int grade) throws CourseException {
		logger.info("course.addStudentGradeForFinal called for student: " + student);
		if (grade > 100) {
			throw new CourseException(CourseExceptionCodes.INVALID_STUDENT_GRADE);
		}
		
		this.checkAndThrowForGhostStudent(student);
		
		this.studentsGrade.put(student, grade);
		student.addCourseGrade(grade);
	}

	public int markForStudent(Student student) {
		logger.info("course.markForStudent called for student: \n" + student);
		return this.studentsGrade.get(student);
	}

	public boolean hasProject() {
		logger.info("course.hasProject called");
		return false;
	}
	
	public boolean hasFinal() {
		logger.info("course.hasFinal called");
		return this.hasAFinal;
	}

	public boolean isFull() {
		logger.info("course.isFull called");
		return this.students.size() >= this.capSize;
	}

	public void removeStudent(Student student) throws CourseException {
		logger.info("course.removeStudent called");
		this.checkAndThrowForGhostStudent(student);
		this.students.remove(student);
	}

	protected void checkAndThrowForGhostStudent(Student student) throws CourseException {
		if (!this.students.contains(student)) {
			throw new CourseException(CourseExceptionCodes.STUDENT_NOT_REGISTERED_FOR_COURSE);
		}
	}
	
	public void deRegisterAllStudents() throws CourseException {
		logger.info("course.deRegisterAllStudents called");
		Iterator<Student> studentIterator = this.students.iterator();
		
		while (studentIterator.hasNext()) {
			Student student = studentIterator.next();
			student.deRegisterCourse(this);
			
			studentIterator = this.students.iterator();
		}
	}
	
	public String toString() {
		String courseDesc = "---\n Course %s has %d assignments, %d midterms and %s final exam. \n"
				+ " Course code is %d, and capacity is %d students. Course is currently %s. \n"
				+ " %d students are registered to the course.";
		
		if (this.students.size() > 0) {
			courseDesc += " They are: ";
			
			for (Student student : this.students) {
				courseDesc += "\n \t" + student.name() + " with student number: " + 
						student.studentNumber();
			}
		}
		
		courseDesc += "\n---";
		String finalStr = hasAFinal ? "a" : "no";
		String fullStr = isFull() ? "full" : "not full";
		courseDesc = String.format(courseDesc, title, numberOfAssignments, numberOfMidterms, 
				finalStr, myCode, capSize, fullStr, students.size());
		
		return courseDesc;
	}
}
