import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task', 
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task; //Recibe la tarea
  @Output() complete = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onComplete()
  {
    this.complete.emit(this.task.id);//Marca como completado la tarea es decir que el estado pasa a ser true
  }

  onDelete()
  {
    this.delete.emit(this.task.id);//Elimina la tarea
  }
}
