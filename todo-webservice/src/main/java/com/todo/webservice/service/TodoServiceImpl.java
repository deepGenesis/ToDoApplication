package com.todo.webservice.service;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.webservice.entity.ResponseEntity;
import com.todo.webservice.entity.TodoEntity;
import com.todo.webservice.repository.TodoRepository;

@Service
public class TodoServiceImpl {

	@Autowired
	TodoRepository todoRepository;

	ResponseEntity responseEntity;

	//Add todo items
	public ResponseEntity addTodoItem(TodoEntity todoEntity) {
		responseEntity = new ResponseEntity();
		if (todoEntity != null) {
			try {
				todoEntity = todoRepository.save(todoEntity);
				responseEntity.setResponse(200, "Success", "Todo item added succussfully", todoEntity);
			} catch (Exception e) {
				e.printStackTrace();
				responseEntity.setResponse(500, "Error", "Something went wrong. Please try again!", todoEntity);
			}
		} else {
			responseEntity.setResponse(400, "Error", "Incomplete data", todoEntity);
		}
		return responseEntity;
	}

	//Update todo items
	public ResponseEntity editTodoItem(TodoEntity todoEntity) {
		responseEntity = new ResponseEntity();
		if (todoEntity != null) {
			try {
				todoEntity = todoRepository.save(todoEntity);
				responseEntity.setResponse(200, "Success", "Todo item added succussfully", todoEntity);
			} catch (Exception e) {
				e.printStackTrace();
				responseEntity.setResponse(500, "Error", "Something went wrong. Please try again!", todoEntity);
			}
		} else {
			responseEntity.setResponse(400, "Error", "Incomplete data", todoEntity);
		}
		return responseEntity;
	}

	//Delete todo items by id
	public ResponseEntity deleteTodoItem(int id) {
		responseEntity = new ResponseEntity();
		try {
			todoRepository.deleteById(id);
			responseEntity.setResponse(200, "Success", "Todo item added succussfully", id);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity.setResponse(500, "Error", "Something went wrong. Please try again!", id);
		}
		return responseEntity;
	}

	//Delete all todo items
	public ResponseEntity deleteAllTodoItems() {
		responseEntity = new ResponseEntity();
		try {
			todoRepository.deleteAll();
			responseEntity.setResponse(200, "Success", "Todo item added succussfully", null);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity.setResponse(500, "Error", "Something went wrong. Please try again!", null);
		}
		return responseEntity;
	}

	//Delete multiple todo items
	public ResponseEntity deleteMultipleTodoItems(Iterable<TodoEntity> todoList) {
		responseEntity = new ResponseEntity();
		if (todoList != null) {
			try {
				todoRepository.deleteAll(todoList);
				responseEntity.setResponse(200, "Success", "Todo item added succussfully", todoList);
			} catch (Exception e) {
				e.printStackTrace();
				responseEntity.setResponse(500, "Error", "Something went wrong. Please try again!", todoList);
			}
		} else {
			responseEntity.setResponse(400, "Error", "Incomplete data", todoList);
		}
		return responseEntity;
	}

	//Get all todo items
	public ResponseEntity getAllTodoItems() {
		responseEntity = new ResponseEntity();
		Iterable<TodoEntity> todoList = new  ArrayList<TodoEntity>();
		try {
			todoList = todoRepository.findAll();
			responseEntity.setResponse(200, "Success", "Todo item added succussfully", todoList);
		} catch (Exception e) {
			e.printStackTrace();
			responseEntity.setResponse(500, "Error", "Something went wrong. Please try again!", todoList);
		}
		return responseEntity;
	}
}