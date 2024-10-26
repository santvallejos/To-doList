import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./components/task/task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskClass } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, TaskListComponent, AddTaskComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do List';

  tasks: TaskClass[] = []; //Tareas

  addTask(newTask: TaskClass){
    this.tasks.push(newTask); //pushea una nueva tarea al array 
  }

  completeTask(taskId: number){
    const task = this.tasks.find(t => t.id === taskId);//Busca el id de la tarea

    //Si se encuentra la tarea
    if(task){
      task.state = !task.state; //cambia al valor opuesto
    }
  }

  deleteTask(taskId: number){
    //Mantendrá solo aquellas tareas cuyo id es diferente a taskId
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
}
