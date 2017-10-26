package com.ogb.anselm.univ.sys;

import java.net.Socket;

public class ConnectionState {
	private String threadName;
	private String state;
	private String userName;
	private boolean loggedIn;
	private Socket clientSocket;
	
	public ConnectionState(Socket sock) {
		this.clientSocket = sock;
		this.state = "menu-display";
		this.userName = "guest";
		this.loggedIn = false;
		this.threadName = Thread.currentThread().getName();
	}
	
	public String getThreadName() {
		return this.threadName;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setLoggedIn(boolean loggedInState) {
		this.loggedIn = loggedInState;
	}
}
