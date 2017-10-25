package com.ogb.anselm.univ.sys;

import java.io.BufferedWriter;
import java.io.IOException;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

public class PromptHandler {
	
	private List<ConnectionState> connections;
	private BufferedWriter writer;
	
	public PromptHandler() {
		connections = new ArrayList<ConnectionState>();
	}

	public void addClient(Socket clientSocket, BufferedWriter writer) throws Exception {
		this.writer = writer;
		ConnectionState cState = new ConnectionState(clientSocket);
		this.connections.add(cState);
		
		this.handleInput("");
	}

	public void handleInput(String userInput) throws Exception {
		ConnectionState cState = this.getClientConnection();
		
		switch (cState.getState()) {
			case "new":
				this.presentMenu();
				cState.setState("menu-selection");
				break;
			case "menu-selection":
				this.handleMenuSelection(userInput);
				cState.setState("menu-picker");
				break;
	
			default:
				writer.write("You're in an invalid state! Go Away!");
				writer.newLine();
				writer.flush();
				break;
		}
	}

	private void handleMenuSelection(String userInput) throws IOException {
		switch (userInput) {
			case "login":
				this.displayMessage("username?");
				break;
			case "list students":
				this.displayMessage("students?");
			default:
				break;
		}
	}

	private void presentMenu() throws IOException {
		this.displayMessage("Hello! Welcome to the University System");
		this.displayMessage("---");
		this.displayMessage("Type 'login' to show login prompt.");
		this.displayMessage("Type 'list students' to display student list. "
				+ "You can then login as one of the students");
		this.displayMessage("Type 'list courses' to display course list.");
		this.displayMessage("---");
	}
	
	private void displayMessage(String message) throws IOException {
		writer.write(message);
		writer.newLine();
		writer.flush();
	}

	private ConnectionState getClientConnection() throws Exception {
		String currentThreadName = Thread.currentThread().getName();
		System.out.println("getting client connection, current thread name is: "+ currentThreadName);
		
		for (ConnectionState connection : this.connections) {
			System.out.println("thread name is: " + connection.getThreadName() );
			if (currentThreadName.equals(connection.getThreadName())) {
				return connection;
			}
		}
		
		throw new Exception("Connection not found.");
	}
	
}
