package com.ogb.anselm.univ.sys;

public class Student {

	private String studentName;
	private final int studentNumber;
	private int studentDepartment;
	
	public Student(String studentName, int studentNumber, int studentDepartment) {
		this.studentName = studentName;
		this.studentNumber = studentNumber;
		this.studentDepartment = studentDepartment;
	}
}
