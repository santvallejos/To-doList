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
  @Output() complete = new EventEmitter<number>(); //Evento que indica que una tarea esta complete
  @Output() delete = new EventEmitter<number>(); //Evento que indica que una tarea se eliminara

  onTaskComplete(id: number) {
    this.complete.emit(id);
  }

  onTaskDelete(id: number) {
    this.delete.emit(id);
  }
}
