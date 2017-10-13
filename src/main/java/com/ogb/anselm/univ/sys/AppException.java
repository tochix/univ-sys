package com.ogb.anselm.univ.sys;

abstract public class AppException extends Exception {

	private static final long serialVersionUID = 1L;
	protected int errorCode;
	protected String errorMessage;
	
	public int getErrorCode() {
		return this.errorCode;
	}
	
	public String getMessage() {
		return this.errorMessage;
	}
	
}
