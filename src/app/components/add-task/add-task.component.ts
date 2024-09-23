import { Component, EventEmitter, Output } from '@angular/core';
import { TaskClass } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() addTask = new EventEmitter<TaskClass>(); //Evento que se emite cuando se agrega una nueva tarea
  taskTitle: string = '';

  onAddTask(){
    if(this.taskTitle.trim()){
      const newTask = new TaskClass(Date.now(), this.taskTitle);
      this.addTask.emit(newTask);
      this.taskTitle = ''; // Clear the input
    }
  }
}
