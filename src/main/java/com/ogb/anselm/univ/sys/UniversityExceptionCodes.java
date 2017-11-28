package com.ogb.anselm.univ.sys;

public enum UniversityExceptionCodes {
	INVALID_STUDENT(10, "The Student is not enrolled in this university"),
	INVALID_COURSE(11, "The Course does not exist in this university"),
	REDUNDANT_STUDENT(12, "There already exists a student with that student number"),
	REDUNDANT_COURSE(12, "There already exists a course with that course code");
	
	private final int code;
	private String msg;
	
	private UniversityExceptionCodes(int code, String msg) {
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
