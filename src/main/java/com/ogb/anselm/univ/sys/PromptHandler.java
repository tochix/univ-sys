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
	private String currentThreadName;
	private String userInput;
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
		this.userInput = userInput;
		
		if (userInput.equals("show menu")) {
			this.currentConnection.setState("menu-display");
		}
		
		switch (this.currentConnection.getState()) {
			case "menu-display":
				this.presentMenu();
				this.currentConnection.setState("menu-selection");
				break;
			case "menu-selection":
				this.handleMenuSelection();
				break;
			case "username-input":
				this.handleUserNameInput();
				break;
			case "password-input":
				this.handlePasswordInput();
				break;
			case "course-parameter-entry":
				this.handleCourseCreation("params");
				break;
			case "student-parameter-entry":
				this.handleStudentCreation("params");
				break;
			default:
				System.out.println("the state was: "+ this.currentConnection.getState());
				writer.write("You're in an invalid state! Go Away!");
				writer.newLine();
				writer.flush();
				break;
		}
	}

	private void handlePasswordInput() throws IOException {
		String userName = this.currentConnection.getUserName();
		
		if (!this.checkUserExists(userName)) {
			return;
		}
		
		String userPasswd = this.userLogins.get(userName);
		
		if (!userPasswd.equals(this.userInput)) {
			this.displayMessage("Error: Wrong user name or password");
			this.displayPrompt("username? ");
			this.currentConnection.setState("username-input");
			return;
		}
		
		this.currentConnection.setLoggedIn(true);
		this.currentConnection.setState("menu-selection");
		this.displayMessage("Success: You're now logged in as: " + userName);
		System.out.println("User at " + this.currentThreadName + " logged in as " + userName);
	}

	private void handleUserNameInput() throws IOException {
		if (!this.checkUserExists(this.userInput)) {
			return;
		}
		
		this.currentConnection.setUserName(this.userInput);
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

	private void handleMenuSelection() throws IOException {
		switch (userInput) {
			case "show menu":
				this.presentMenu();
				break;
			case "login":
				this.displayPrompt("username? ");
				this.currentConnection.setState("username-input");
				break;
			case "create course":
				this.handleCourseCreation("init");
				break;
			case "create student":
				this.handleStudentCreation("init");
				break;
			case "list courses":
				this.listCourses();
				break;
			default:
				this.displayMessage("Sorry, wrong input.");
				break;
		}
	}
	
	private void listCourses() throws IOException {
		for (Course course : this.university.courses()) {
			this.displayMessage(course.toString());
		}
	}

	private boolean isUserClerk() throws IOException {
		if (!this.currentConnection.getLoggedInState() || !this.currentConnection.getUserName().equals("clerk")) {
			this.displayMessage("This operation can only be performed by a clerk. Please login as a clerk");
			return false;
		}
		
		return true;
	}

	private void handleStudentCreation(String step) throws IOException {
		if (!this.isUserClerk()) {
			return;
		}
		
		if (step == "init") {
			String message = "To create a student, pass in the following parameters: \n"
					+ "Student's name, Student's number[int], Student's department[int], \n"
					+ "Student's full time status[true or false]. The parameters should be separated by semicolon ';'";
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("student-parameter-entry");
		}
		
		if (step == "params") {
			String[] paramTokens = this.userInput.split(";");
			
			if (paramTokens.length != 4) {
				this.displayMessage("Incomplete or invalid parameter count.");
				return;
			}
			
			try {
				int studentNumber = Integer.parseInt(paramTokens[1]);
				int studentDept = Integer.parseInt(paramTokens[2]);
				boolean isFullTime = Boolean.parseBoolean(paramTokens[3]);
				
				Student student = this.university.createStudent(paramTokens[0], studentNumber, studentDept, isFullTime);
				
				this.displayMessage("Success: Student has been created");
				this.displayMessage(student.toString());
				this.currentConnection.setState("menu-selection");
				System.out.println("Clerk at " + this.currentThreadName + " created student " + student);
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}
		}
	}

	private void handleCourseCreation(String step) throws IOException {
		if (!this.isUserClerk()) {
			return;
		}
		
		if (step == "init") {
			String message = "To create a course, pass in the following parameters: \n"
					+ "Course title, Course code[must be 6 integers], Course capacity[min. 25], \n"
					+ "number of midterms[0 - 2], number of assignments [0 - 5], \n"
					+ "has final exam[true or false]. The parameters should be separated by semicolon ';'";
			
			
			this.displayMessage(message);
			this.displayPrompt("parameters? ");
			this.currentConnection.setState("course-parameter-entry");
		}
		
		if (step == "params") {
			String[] paramTokens = this.userInput.split(";");
			
			if (paramTokens.length != 6) {
				this.displayMessage("Incomplete or invalid parameter count.");
				return;
			}
			
			try {
				int courseCode = Integer.parseInt(paramTokens[1]);
				int courseCapacity = Integer.parseInt(paramTokens[2]);
				int numMidterms = Integer.parseInt(paramTokens[3]);
				int numAssignments = Integer.parseInt(paramTokens[4]);
				boolean hasFinal = Boolean.parseBoolean(paramTokens[5]);
				
				Course course = this.university.createCourse(paramTokens[0], courseCapacity, 
						courseCode, false, numMidterms, numAssignments, hasFinal);
				
				this.displayMessage("Success: Course has been created");
				this.displayMessage(course.toString());
				this.currentConnection.setState("menu-selection");
				System.out.println("Clerk at " + this.currentThreadName + " created course " + course);
				
			} catch (Exception e) {
				this.displayMessage("An Exception Occured: " + e.getMessage());
			}	
		}
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
		this.currentThreadName = Thread.currentThread().getName();
		
		for (ConnectionState connection : this.connections) {	
			if (this.currentThreadName.equals(connection.getThreadName())) {
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
