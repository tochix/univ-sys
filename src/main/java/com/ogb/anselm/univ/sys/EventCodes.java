package com.ogb.anselm.univ.sys;

public enum EventCodes {
	PRE_SEMESTER_START(1, "pre-semester-start"),
	PRE_SEMESTER_END(2, "pre-semester-end"),
	STUDENT_REGISTRATION_START(3, "semester-student-registration-start"),
	STUDENT_REGISTRATION_END(4, "semester-student-registration-end"),
	COURSE_DEREGISTRATION_DEADLINE(5, "semester-deregistration-deadline"),
	MID_TERM_START(6, "semester-midterm-start"),
	MID_TERM_END(7, "semester-midterm-end"),
	DROP_COURSE_DEADLINE(8, "semester-drop-course-deadline"),
	FINALS_START(9, "semester-finals-start"),
	FINALS_END(10, "semester-finals-end"),
	SEMESTER_END(11, "semester-end");
	
	private final int code;
	private String msg;
	
	private EventCodes(int code, String msg) {
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
