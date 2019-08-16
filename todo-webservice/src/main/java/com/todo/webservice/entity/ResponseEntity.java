package com.todo.webservice.entity;

public class ResponseEntity {
	int statusCode;
	String title;
	String message;
	Object data;
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
	public void setResponse(int statusCode, String title, String message, Object todoEntity) {
		
		this.setStatusCode(statusCode);
		this.setTitle(title);
		this.setMessage(message);
		this.setData(todoEntity);
	}
}
