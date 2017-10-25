package com.ogb.anselm.univ.sys;

import java.net.Socket;

public class ConnectionState {
	private String threadName;
	private String state;
	private Socket clientSocket;
	
	public ConnectionState(Socket sock) {
		this.clientSocket = sock;
		this.state = "new";
		this.threadName = Thread.currentThread().getName();
		System.out.println("in connState. thread name is: "+ threadName);
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
}
