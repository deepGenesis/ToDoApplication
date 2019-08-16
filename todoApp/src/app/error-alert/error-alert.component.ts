import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TodoRestApiService } from '../service/todo-rest-api.service';
import { GlobalService } from "../service/globalService.service";

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css']
})
//Component to show Error message while adding or editing any Todo Item
export class ErrorAlertComponent implements OnInit {

  public error_title:string="Error";
  public error_message: Array<string> = new Array<string>(); 
  constructor(private modalService: NgbModal,private todoRestApiService:TodoRestApiService,private globalService: GlobalService,public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.globalService.setErrorAlertComponent(this);
  }

}
