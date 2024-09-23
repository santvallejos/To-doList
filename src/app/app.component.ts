import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./components/task/task.component";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { TaskClass } from './models/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, TaskListComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectBootcamp';

  tasks: TaskClass[] = [];
  
  addTask(newTask: TaskClass){
    this.tasks.push(newTask); //pushea una nueva tarea al array 
  }

  completeTask(taskId: number){
    const task = this.tasks.find(t => t.id === taskId);

    if(task){
      task.state = true;
    }
  }

  deleteTask(taskId: number){
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
}
