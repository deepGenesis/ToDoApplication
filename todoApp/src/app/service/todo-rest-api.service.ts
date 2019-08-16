import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo_Item } from '../classess/todo_item';
import { Observable, throwError } from 'rxjs';
import { Response } from '../classess/Response';

@Injectable({
  providedIn: 'root'
})
// Service class for rest api
export class TodoRestApiService {

  // Define API
  apiURL:string;
  constructor(private http: HttpClient) {
    this.apiURL = 'http://52.57.174.72:8000/items';
   }

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    })

  }  

   // HttpClient API get() method => Fetch List of Todo Items
   getAllToDoItems(): Observable<Response> {
    return this.http.get<Response>(this.apiURL)
  }

  // HttpClient API post() method => Add new Todo item
  addToDoItem(todo_item:Todo_Item) : Observable<Response>{
    return this.http.post<Response>(this.apiURL,todo_item);
  }

  // HttpClient API post() method => Add new Todo item
  editToDoItem(todo_item:Todo_Item):Observable<Response>{
    return this.http.put<Response>(this.apiURL,todo_item);
  }

  // HttpClient API Delete By Id method => Delete Single ToDo Item by ToDo_Id 
  deleteToDoById(todo_id:number):Observable<Response>{
    return this.http.delete<Response>(this.apiURL+"/"+todo_id);
  }

  // HttpClient API Delete() method => Delete All Items
  deleteMultipleTodoItems(todo_items:Todo_Item[]):Observable<Response>{
    return this.http.post<Response>(this.apiURL+"/multipleItems",todo_items);
  }

  // HttpClient API Delete() method => Delete All Items
  deleteAllTodoItems():Observable<Response>{
    return this.http.delete<Response>(this.apiURL);
  }
   // Error handling 
   handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
