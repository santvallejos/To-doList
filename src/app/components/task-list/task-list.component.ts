import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { Task } from "../../models/task.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = []; //Recibe una lista de tareas desde el componente padre
  @Output() complete = new EventEmitter<number>(); //Emite al componente padre un entero
  @Output() delete = new EventEmitter<number>(); 

  //El id se marca como tarea completa
  onTaskComplete(id: number) {
    this.complete.emit(id);
  }

  //El id se elimina, es decir la tarea
  onTaskDelete(id: number) {
    this.delete.emit(id);
  }
}
