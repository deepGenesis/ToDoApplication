package com.todo.webservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.webservice.entity.ResponseEntity;
import com.todo.webservice.entity.TodoEntity;
import com.todo.webservice.service.TodoServiceImpl;

@CrossOrigin
@RestController
public class TodoController {

	@Autowired
	TodoServiceImpl todoServiceImpl;

	//Add todo items
	@PostMapping("/items")
	private ResponseEntity addTodoItem(@RequestBody TodoEntity todoEntity) {
		return todoServiceImpl.addTodoItem(todoEntity);
	}

	//Update todo items
	@PutMapping("/items")
	public ResponseEntity editTodoItem(@RequestBody TodoEntity todoEntity) {
		return todoServiceImpl.editTodoItem(todoEntity);
	}

	//Delete todo items by id
	@DeleteMapping("/items/{id}")
	public ResponseEntity deleteTodoItem(@PathVariable int id) {
		return todoServiceImpl.deleteTodoItem(id);
	}

	//Delete all todo items
	@DeleteMapping(value = "/items")
	public ResponseEntity deleteAllTodoItems() {
		return todoServiceImpl.deleteAllTodoItems();
	}

	//Delete multiple todo items
	@PostMapping("/items/multipleItems")
	public ResponseEntity deleteMultipleTodoItems(@RequestBody Iterable<TodoEntity> todoList) {
		return todoServiceImpl.deleteMultipleTodoItems(todoList);
	}

	//Get all todo items
	@GetMapping("/items")
	public ResponseEntity getAllTodoItems() {
		return todoServiceImpl.getAllTodoItems();
	}
}