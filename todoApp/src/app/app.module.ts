import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {HttpClientModule} from '@angular/common/http';
import { EditTodoItemComponent } from './edit-todo-item/edit-todo-item.component';
import { DeleteTodoItemComponent } from './delete-todo-item/delete-todo-item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GlobalService } from './service/globalService.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TodoItemComponent,
    EditTodoItemComponent,
    DeleteTodoItemComponent,
    ErrorAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    SweetAlert2Module,
    AmazingTimePickerModule
  ],
  providers: [ GlobalService ],
  bootstrap: [AppComponent],
  entryComponents:[EditTodoItemComponent,DeleteTodoItemComponent,ErrorAlertComponent]
})
export class AppModule { }
