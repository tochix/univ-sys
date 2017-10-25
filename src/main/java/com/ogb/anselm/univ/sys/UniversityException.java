package com.ogb.anselm.univ.sys;

public class UniversityException extends AppException {

	private static final long serialVersionUID = 1L;

	public UniversityException(UniversityExceptionCodes code) {
		this.errorCode = code.getCode();
		this.errorMessage = code.getMessage();
	}
}
