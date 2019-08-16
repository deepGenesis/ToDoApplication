import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Todo_Item } from '../classess/todo_item';
import { TodoRestApiService } from '../service/todo-rest-api.service';
import { GlobalService } from "../service/globalService.service";
import { ErrorAlertComponent } from '../error-alert/error-alert.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  todo_item = new Todo_Item(0,'','',new Date().getHours()+":"+new Date().getMinutes(), false);
  public selectAllCheckBox:boolean=false;
  constructor(private modalService: NgbModal,private todoRestApiService:TodoRestApiService,private globalService: GlobalService) {
  }

  ngOnInit() {
    this.globalService.setTodoItemComponent(this);
  }

  // Method to open Add new Todo Item Model
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    });
  }
 
   //Method to Check the data validity and add new todo item
  onSubmit(){
    var flag = true;
    var e_message = new Array<string>();
    
    if(this.todo_item.title == ""){
      //Title should not be blank
      flag = false;
      e_message.push("Title Required !!!");
    }
    if(this.todo_item.description == ""){
      //Description should not be blank
      flag = false;
      e_message.push("Description Required !!!");
    }
    if(this.todo_item.time == ""){
      //Time should not be blank
      flag = false;
      e_message.push("Time Required !!!");
    }else{
      console.log("Time : "+this.todo_item.time);
      var user_time = this.todo_item.time;
      var now_time = new Date().getHours() + ':' + new Date().getMinutes();
      console.log("User Time : "+user_time);
      console.log("Now Time : "+now_time);
      if(user_time>now_time){
        //Time is greater than current i.e., valid time
      }else{
        //Time should be greater than current time
        e_message.push("Time should be greater than current time !!!");
        flag = false;
      }
    }
    
    if(flag){
      // All input data is valid and calling webservice to add new todo
      this.todoRestApiService.addToDoItem(this.todo_item).subscribe(data => {
      this.globalService.mainComponentRef.items.push(data.data);
      this.modalService.dismissAll();
    })
   }else{
     // In valid data or in complete data
    var modRef = this.modalService.open(ErrorAlertComponent);
    modRef.componentInstance.error_title="Fail to Add";
    modRef.componentInstance.error_message=e_message;
   }
  }

  //Method to select all todo items card
  selectAll(){
    if(this.selectAllCheckBox){
      for(let item of this.globalService.mainComponentRef.items){
        item.checkState=true;
      }
    }else{
      for(let item of this.globalService.mainComponentRef.items){
        item.checkState=false;
      }
    }
   
  }

  // Method to delete multiple or all todo items 
  deleteToDo(){
    if(this.selectAllCheckBox){
      var flag=false;
      var temp_item_list: Array<Todo_Item> = new Array<Todo_Item>(); 
    for(let item of this.globalService.mainComponentRef.items){
      if(item.checkState){
        flag = true;
        temp_item_list.push(item);
      }
    }
    if(!flag){
      // delete selected todo items (multiple delete)
      this.todoRestApiService.deleteMultipleTodoItems(temp_item_list).subscribe(data=>{})
    }else{
      // delete all todo items
      this.todoRestApiService.deleteAllTodoItems().subscribe(data =>{
        this.globalService.mainComponentRef.items = new Array<Todo_Item>();
      })
    }
    }
  }
}