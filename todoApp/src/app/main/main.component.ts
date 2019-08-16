import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EditTodoItemComponent } from '../edit-todo-item/edit-todo-item.component';
import { Todo_Item } from '../classess/todo_item';
import { DeleteTodoItemComponent } from '../delete-todo-item/delete-todo-item.component';
import { TodoRestApiService } from '../service/todo-rest-api.service';
import { GlobalService } from "../service/globalService.service";
import { all } from 'q';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  closeResult: string;
  modRef:any;
  cardClass:string="card shadow-sm";
  cardStyle:string="width: 15%; float:left";
  checkState:string = 'checked'; 
  selectedAll:boolean = false;
  public items: Array<Todo_Item> = new Array<Todo_Item>(); 
  constructor(private modalService: NgbModal,private todoRestApiService: TodoRestApiService, private globalService: GlobalService) { }
 
  ngOnInit() {
    // Calling webservice to get all Todo items
    this.todoRestApiService.getAllToDoItems().subscribe(response => {
      this.items = response.data;
    })
    this.globalService.setMainComponent(this);
  }

  //Method to open Edit Todo item Model
  openEditTodo(item:Todo_Item){
    const modRef = this.modalService.open(EditTodoItemComponent);
    modRef.componentInstance.todo_item=item;
  }

  //Method to open Delete confirmation Model
  openDeleteTodo(item:Todo_Item,index:number){
    this.modRef = this.modalService.open(DeleteTodoItemComponent);
    item.index=index;
    this.modRef.componentInstance.todo_item=item;
  }

  // deleteMultiple(){
  //   console.log(this.items);
  //     for(let i = (this.items.length-1); i >= 0; i--){
  //       console.log(this.items[i].checkState);
  //        if(this.items[i].checkState){
  //          console.log(i)
  //         this.items.splice(i, 1);
  //        }
  //     }
  // }

  // //Method to select all checkbox on the check of main checkbox
  // selectAll() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     this.items[i].checkState = this.selectedAll;
  //   }
  // }

  // checkIfAllSelected() {
  //   this.selectedAll = this.items.every(function(item:any) {
  //       return item.checkState == true;
  //     })
  // }

  //Method to check weather all todo's checkbox is checked or not  based on which main check will be checked or unchecked
  checkAllOrNot(){
    var allCheck = true;
    for(let it of this.items){
      if(!it.checkState){
        allCheck = false;
        break;
      }
    }
    this.globalService.todoItemComponentRef.selectAllCheckBox=allCheck;
  }
}
