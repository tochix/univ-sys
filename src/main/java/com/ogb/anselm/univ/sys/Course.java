package com.ogb.anselm.univ.sys;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;

public class Course {
	private final Properties properties = new Properties();
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
		return this.title;
	}

	public int numMidTerms() {
		return this.numberOfMidterms;
	}

	public Integer code() {
		return this.myCode;
	}

	public List<Student> students() {
		return this.students;
	}

	public void addStudent(Student student) throws CourseException {
		if (this.isFull()) {
			throw new CourseException(CourseExceptionCodes.COURSE_IS_FULL);
		}
		
		this.students.add(student);
	}

	public List<Integer> preRequisites() {
		return this.preRequisiteCodes;
	}

	public void addPreRequisites(List<Course> courses) {
		courses.forEach((course) -> {
			if (!this.preRequisiteCodes.contains(course.code())) {
				this.preRequisites.add(course);
				this.preRequisiteCodes.add(course.code());
			}
		});
	}

	public void addAssignment(int code, int weight) throws CourseException {
		this.addToTotalWeight(weight);
		this.assignments.put(code, weight);
	}

	public int weightOfAssignment(int code) {
		return this.assignments.get(code);
	}

	public int weightOfMidterm(int code) {
		return this.midTerms.get(code);
	}
	
	public void addMiterm(int code, int weight) throws CourseException {
		this.addToTotalWeight(weight);
		this.midTerms.put(code, weight);
	}

	public void addFinalExam(int weight) throws CourseException {
		this.addToTotalWeight(weight);
		this.finalExamWeight = weight;
	}

	public int weightOfFinal() {
		return this.finalExamWeight;
	}
	
	protected void addToTotalWeight(int weight) throws CourseException {
		if ((this.totalTaskWeight + weight) > this.maxGradeWeight) {
			throw new CourseException(CourseExceptionCodes.INVALID_GRADE_WEIGHT);
		}
		
		this.totalTaskWeight += weight;
	}

	public void addStudentGradeForFinal(Student student, int grade) throws CourseException {
		if (grade > 100) {
			throw new CourseException(CourseExceptionCodes.INVALID_STUDENT_GRADE);
		}
		
		this.checkAndThrowForGhostStudent(student);
		
		this.studentsGrade.put(student, grade);
	}

	public int markForStudent(Student student) {
		return this.studentsGrade.get(student);
	}

	public boolean hasProject() {
		return false;
	}

	public boolean isFull() {
		return this.students.size() >= this.capSize;
	}

	public void removeStudent(Student student) throws CourseException {
		this.checkAndThrowForGhostStudent(student);
		this.students.remove(student);
	}

	protected void checkAndThrowForGhostStudent(Student student) throws CourseException {
		if (!this.students.contains(student)) {
			throw new CourseException(CourseExceptionCodes.STUDENT_NOT_REGISTERED_FOR_COURSE);
		}
	}
	
}
