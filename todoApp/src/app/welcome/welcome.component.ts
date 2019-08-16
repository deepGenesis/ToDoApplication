import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public show:boolean = false;
  buttonClass: string = "btn btn-outline-success";
  constructor() { }

  ngOnInit() {
  }

  //Method to maintain start and stop Button
  toggle(){
    this.show = !this.show;
    if(this.show){
      this.buttonClass="btn btn-outline-danger fa fa-power-off";
    }else{
      this.buttonClass="btn btn-outline-success fa fa-power-off";
    }
  }

}
