import { Component, OnInit } from '@angular/core';
import { Todo_Item } from '../classess/todo_item';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoRestApiService } from '../service/todo-rest-api.service';
import { GlobalService } from "../service/globalService.service";
import { ErrorAlertComponent } from '../error-alert/error-alert.component';


@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.css']
})
export class EditTodoItemComponent implements OnInit {
  public todo_item = new Todo_Item(0,'','',new Date().getHours()+":"+new Date().getMinutes(), false);
  
  constructor(private modalService: NgbModal,private todoRestApiService:TodoRestApiService,private globalService: GlobalService,public activeModal: NgbActiveModal) { }

  ngOnInit() {}

  onSubmit(){
    var flag = true;
    var e_message = new Array<string>();

    if(this.todo_item.title == ""){
      flag = false;
      e_message.push("Title Required !!!");
    }
    if(this.todo_item.description == ""){
      flag = false;
      e_message.push("Description Required !!!");
    }
    if(this.todo_item.time == ""){
      flag = false;
      e_message.push("Time Required !!!");
    }else{
      var user_time = this.todo_item.time;
      var now_time = new Date().getHours() + ':' + new Date().getMinutes();
      if(user_time>now_time){
        //Time is greater than current i.e., valid time
      }else{
        //Time should be greater than current time
        e_message.push("Time should be greater than current time !!!");
        flag = false;
      }
    }

    if(flag){
      // All input data is valid and calling Resp API to add new todo
        this.todoRestApiService.editToDoItem(this.todo_item).subscribe(data => {
        this.modalService.dismissAll();
    })
    }else{
      var modRef = this.modalService.open(ErrorAlertComponent);
      modRef.componentInstance.error_title="Fail to Edit";
      modRef.componentInstance.error_message=e_message;
    }     
   }
}
