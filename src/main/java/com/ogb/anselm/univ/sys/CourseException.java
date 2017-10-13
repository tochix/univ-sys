package com.ogb.anselm.univ.sys;

public class CourseException extends AppException {

	private static final long serialVersionUID = 1L;

	public CourseException(CourseExceptionCodes code) {
		this.errorCode = code.getCode();
		this.errorMessage = code.getMessage();
	}
}
