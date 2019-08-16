import { Component, OnInit } from '@angular/core';
import { Todo_Item } from '../classess/todo_item';
import { NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoRestApiService } from '../service/todo-rest-api.service';
import { GlobalService } from "../service/globalService.service";

@Component({
  selector: 'app-delete-todo-item',
  templateUrl: './delete-todo-item.component.html',
  styleUrls: ['./delete-todo-item.component.css']
})
export class DeleteTodoItemComponent implements OnInit {
  constructor(private modalService: NgbModal,private todoRestApiService:TodoRestApiService,private globalService: GlobalService,public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  //Method to delete specific single Todo item
  deleteToDo(item:Todo_Item){
    var temp_items = new Array<Todo_Item>();
    this.todoRestApiService.deleteToDoById(item.id).subscribe(data=>{
      for(let it of this.globalService.mainComponentRef.items){
        if(it.id != item.id){
          temp_items.push(it);
        }
      }
      this.globalService.mainComponentRef.items=temp_items;
      this.modalService.dismissAll();
    })
      
  }
}
