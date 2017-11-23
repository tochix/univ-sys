package com.ogb.anselm.univ.sys;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;

import junit.framework.TestCase;

public class StepDefinitions extends TestCase {
	private static SimpleTelnetClient client = null;

	@Before
	public void before() {
		try {
			if (client == null) {
				/*Runnable runnable = new Runnable() {
					
					@Override
					public void run() {
						try {
							String[] params = {"8025"};
							Server.main(params);
						} catch (Exception e) {
							System.out.println(e);
						}
					}
				};
				
				Thread thread = new Thread(runnable);
				thread.start();
				*/
				client = new SimpleTelnetClient("localhost", 8025);
				client.connect();

				Runtime.getRuntime().addShutdownHook(new Thread() {
					public void run() {
						client.send("exit");
						client.stop();
						
						System.out.println("reg shutdown--------");
					}
				});
			}

		} catch (Exception e) {
			System.out.println("could not connect to University Server.");
			System.exit(0);
			return;
		}

		System.out.println("end of before");
	}

	@After
	public void after() {
		System.out.println("start of after");
	}

	@Given("^I want to create course$")
	public void I_want_to_create_course() throws Throwable {
		assertEquals(1, 1);
		String result = sendAndWaitFor("login", " -> username? ");
		System.out.println("Got " + result);

		result = sendAndWaitFor("clerk", " -> password? ");
		System.out.println("Got " + result);

		result = sendAndWaitFor("clrkio", "");
		System.out.println("Got " + result);

		result = sendAndWaitFor("create student", " -> parameters? ");
		System.out.println("Got " + result);

		result = sendAndWaitFor("Ebikeme;1234;12;true", "---");
		System.out.println("Got " + result);
		
		System.out.println("---------- vine truth ----------");
		//System.out.println(Server.getPromptHandler().university.students());
		System.out.println("---------- end vine truth ----------");
	}

	private String sendAndWaitFor(String command, String message) {
		client.send(command);
		
		if (message == "") {
			return "";
		}
		
		return client.waitFor(message);
	}
	
	@Given("^I login as a clerk$")
	public void i_login_as_a_clerk() {
		String result = sendAndWaitFor("login", " -> username? ");
		System.out.println("Got " + result);

		result = sendAndWaitFor("clerk", " -> password? ");
		System.out.println("Got " + result);

		result = sendAndWaitFor("clrkio", "clerk");
		System.out.println("Got " + result);
		
		assertTrue(result.contains("Success: You're now logged in as: clerk"));
	}
	
	@And("^course (.*?) is not in the list of courses$")
	public void name(String title) {
		String result = sendAndWaitFor("list courses", "");
		System.out.println("Got " + result);
		
		assertFalse(result.contains("Course "+ title));
	}
	
	@And("^I create course (.*?) (\\d+) (\\d+) (\\d+) (\\d+) (.*?)$")
	public void i_create_course(String title, int code, int capacity, 
			int numMidterms, int numAssignments, String hasFinal) {
		
		String result = sendAndWaitFor("create course", " -> parameters? ");
		System.out.println("Got " + result);
		
		String params = title +";" + code +";" + capacity + ";" + numMidterms 
				+";"+ numAssignments +";"+ hasFinal;

		System.out.println("params -----"+ params);
		
		result = sendAndWaitFor(params, "---");
		System.out.println("Got " + result);
		
		assertTrue(result.contains("Course "+ title +" has " + numAssignments + " assignments, " +
				numMidterms +" midterms"));
	}
	
	@Then("^I can verify that the course (.*?) is in the list of courses$")
	public void i_can_verify_course_in_course_list(String title) {
		String result = sendAndWaitFor("list courses", title);
		System.out.println("Got " + result);
		
		assertTrue(result.contains("Course "+ title));
	}
	
	@When("^you are in When annotation$")
	public void when() throws Throwable {
	}

	@Then("^you are in Then annotation$")
	public void then() throws Throwable {
	}

	@And("^you are in And annotation$")
	public void and() throws Throwable {
	}

	@But("^you are in But annotation$")
	public void but() throws Throwable {
	}

}
