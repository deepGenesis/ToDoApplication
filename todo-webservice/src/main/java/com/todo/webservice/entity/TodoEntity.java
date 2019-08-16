package com.todo.webservice.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todoentity")
public class TodoEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;

	@Column(name="title")
	private String title;

	@Column(name="description")
	private String description;

	@Column(name="time")
	private String time;

	public int getId(){
		return this.id;
	}

	public void setId(int id){
		this.id=id;
	}

	public String getTitle(){
		return this.title;
	}

	public void setTitle(String title){
		this.title=title;
	}

	public String getDescription(){
		return this.description;
	}

	public void setDescription(String description){
		this.description=description;
	}

	public String getTime(){
		return this.time;
	}

	public void setTime(String time){
		this.time=time;
	}

}