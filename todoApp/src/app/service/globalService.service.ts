import { Injectable }  from "@angular/core";
import { MainComponent } from '../main/main.component';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
//Global Service class to access the refrence of one component to another 
@Injectable()
export class GlobalService{
    public mainComponentRef: MainComponent;
    public errorAlertComponentRef: ErrorAlertComponent;
    public todoItemComponentRef: TodoItemComponent;

    public setMainComponent(ref: MainComponent){
        this.mainComponentRef = ref;
    }
    public getMainComponent(): MainComponent{
        return this.mainComponentRef;
    }
    
    public setErrorAlertComponent(ref: ErrorAlertComponent){
        this.errorAlertComponentRef = ref;
    }
    public getErrorAlertComponent(): ErrorAlertComponent{
        return this.errorAlertComponentRef;
    }
    
    public setTodoItemComponent(ref: TodoItemComponent){
        this.todoItemComponentRef = ref;
    }
    public getTodoItemComponent(): TodoItemComponent{
        return this.todoItemComponentRef;
    }
}