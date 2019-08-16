package com.todo.webservice.repository;

import org.springframework.data.repository.CrudRepository;

import com.todo.webservice.entity.TodoEntity;

public interface TodoRepository extends CrudRepository<TodoEntity,Integer>{
}