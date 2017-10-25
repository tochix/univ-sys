package com.ogb.anselm.univ.sys;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

import java.net.ServerSocket;
import java.net.Socket;

public class RequestHandler implements Runnable {
	private Socket client;
	private PromptHandler promptHandler;
	ServerSocket serverSocket = null;

    public RequestHandler(Socket client, PromptHandler promptHandler) {
    		this.client = client;
    		this.promptHandler = promptHandler;
    }

    @Override
    public void run() {
    		try ( BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
    				BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(client.getOutputStream()));) {
	
    			System.out.println("Thread started with name:" + Thread.currentThread().getName());
    			String userInput;
    			promptHandler.addClient(this.client, writer);
	
    			while ((userInput = in.readLine()) != null) {
    				userInput=userInput.replaceAll("[^A-Za-z0-9 ]", "");
    				System.out.println("Received message from " + Thread.currentThread().getName() + " : " + userInput);
    				
    				promptHandler.handleInput(userInput);
    			}
    		} catch (IOException e) {
    			System.out.println("I/O exception: " + e);
        } catch (Exception ex) {
        		System.out.println("Exception in Thread Run. Exception : " + ex);
        }
    }

}