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
  @Input() task!: Task; 
  @Output() complete = new EventEmitter<number>();//Emite al componente padre un entero
  @Output() delete = new EventEmitter<number>();

  onComplete()
  {
    this.complete.emit(this.task.id);//Emite el id de la tarea
  }

  onDelete()
  {
    this.delete.emit(this.task.id);
  }
}
