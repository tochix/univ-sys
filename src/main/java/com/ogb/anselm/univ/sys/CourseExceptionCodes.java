package com.ogb.anselm.univ.sys;

public enum CourseExceptionCodes {
	INVALID_NUMBER_OF_MIDTERMS(1, "Midterms should be 2 or less"),
	INVALID_COURSE_SIZE(2, "Course size should be greater than 25"),
	INVALID_NUMBER_OF_ASSIGNMENTS(3, "Assignments have to 5 or less"),
	INVALID_COURSE_CODE_LENGTH(4, "Course code should have 6 digits"),
	INVALID_GRADE_WEIGHT(5, "The total weight for all course task has exceeded 100"),
	INVALID_STUDENT_GRADE(6, "Student's mark for course exceeds 100"),
	STUDENT_NOT_REGISTERED_FOR_COURSE(7, "The student is not registered for this course"),
	COURSE_IS_FULL(8, "Course is full. Can no longer register students."),
	INVALID_PROJECT_WEIGHT(9, "ProjectCourse needs the weight to be set between 0 to 100");
	
	
	private final int code;
	private String msg;
	
	private CourseExceptionCodes(int code, String msg) {
		this.code = code;
		this.msg = msg;
	}
	
	public int getCode() {
		return this.code;
	}
	
	public String getMessage() {
		return this.msg;
	}
	
	@Override
	public String toString() {
		return this.code + ": " + this.msg;
	}
}
