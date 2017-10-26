package com.ogb.anselm.univ.sys;

import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.Socket;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

public class PromptHandler {
	
	private final Properties properties = new Properties();
	private List<ConnectionState> connections;
	private BufferedWriter writer;
	private University university;
	private ConnectionState currentConnection;
	private Map<String, String> userLogins;
	
	public PromptHandler() throws IOException {
		connections = new ArrayList<ConnectionState>();
		university = new University("Carleton");
		this.readInUserLogins();
	}

	public void addClient(Socket clientSocket, BufferedWriter writer) throws Exception {
		this.writer = writer;
		ConnectionState cState = new ConnectionState(clientSocket);
		this.connections.add(cState);
		
		this.displayMessage("Hello! Welcome to the University System \n");
		this.handleInput("", writer);
	}

	public void handleInput(String userInput, BufferedWriter writer) throws Exception {
		this.getClientConnection();
		this.writer = writer;
		
		switch (this.currentConnection.getState()) {
			case "menu-display":
				this.presentMenu();
				this.currentConnection.setState("menu-selection");
				break;
			case "menu-selection":
				this.handleMenuSelection(userInput);
				break;
			case "username-input":
				this.handleUserNameInput(userInput);
				break;
			case "password-input":
				this.handlePasswordInput(userInput);
				break;
			default:
				System.out.println("the state was: "+ this.currentConnection.getState());
				writer.write("You're in an invalid state! Go Away!");
				writer.newLine();
				writer.flush();
				break;
		}
	}

	private void handlePasswordInput(String passwd) throws IOException {
		String userName = this.currentConnection.getUserName();
		
		if (!this.checkUserExists(userName)) {
			return;
		}
		
		String userPasswd = this.userLogins.get(userName);
		
		if (!userPasswd.equals(passwd)) {
			this.displayMessage("Error: Wrong user name or password");
			this.displayPrompt("username? ");
			this.currentConnection.setState("username-input");
			return;
		}
		
		this.currentConnection.setLoggedIn(true);
		this.currentConnection.setState("menu-display");
		this.displayMessage("Success: You're now logged in as: " + userName);
	}

	private void handleUserNameInput(String userName) throws IOException {
		if (!this.checkUserExists(userName)) {
			return;
		}
		
		this.currentConnection.setUserName(userName);
		this.currentConnection.setState("password-input");
		this.displayPrompt("password? ");
	}
	
	private boolean checkUserExists(String userName) throws IOException {
		if (!this.userLogins.containsKey(userName)) {
			this.displayMessage("Error: Unknown User");
			this.displayPrompt("username? ");
			this.currentConnection.setState("username-input");
			return false;
		}
		
		return true;
	}

	private void handleMenuSelection(String userInput) throws IOException {
		switch (userInput) {
			case "show menu":
				this.presentMenu();
				break;
			case "login":
				this.displayPrompt("username? ");
				this.currentConnection.setState("username-input");
				break;
			case "create course":
				this.handleCourseCreation();
				break;
			default:
				this.displayMessage("Sorry, wrong input.");
				break;
		}
	}	

	private void handleCourseCreation() throws IOException {
		this.displayMessage("To create a course, pass in the following parameters");
	}

	private void presentMenu() throws IOException {
		String menu = "Menu \n"
				+ "--- \n"
				+ "- Type 'login' to show login prompt. \n"
				+ "- Type 'list students' to display student list. "
				+ "You can then login as one of the students. \n"
				+ "- Type 'list courses' to display course list. \n"
				+ "- Type 'create student' to create a student. [only for clerks] \n"
				+ "- Type 'create course' to create a course. [only for clerks] \n"
				+ "- Type 'show menu' to display this menu again. \n"
				+ "--- \n";
		this.displayMessage(menu);
	}
	
	private void displayPrompt(String message) throws IOException {
		writer.write(" -> " + message);
		writer.flush();
	}
	
	private void displayMessage(String message) throws IOException {
		writer.write(message);
		writer.newLine();
		writer.flush();
	}

	private void getClientConnection() throws Exception {
		String currentThreadName = Thread.currentThread().getName();
		
		for (ConnectionState connection : this.connections) {	
			if (currentThreadName.equals(connection.getThreadName())) {
				this.currentConnection = connection;
				return;
			}
		}
		
		throw new Exception("Connection not found.");
	}
	
	private void readInUserLogins() throws IOException {
		userLogins = new HashMap<String, String>();
		FileInputStream fis = new FileInputStream("config.properties");
		properties.load(fis);
		fis.close();
		
		String[] logins = properties.getProperty("USER_LOGINS").split("\\|");
		
		for (String loginStr : logins) {
			String[] loginToken = loginStr.split(":");
			
			if (loginToken.length == 2) {
				this.userLogins.put(loginToken[0], loginToken[1]);
			}
		}
	}
	
}
