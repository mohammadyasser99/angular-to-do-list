import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { Task } from '../../models/Task';
import { TasksService } from '../../services/tasks.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-taskslist',
  standalone: true,
  imports: [AccordionModule, AvatarModule, BadgeModule,ButtonModule ,DialogModule, ButtonModule,FormsModule],
  templateUrl: './taskslist.component.html',
  styleUrl: './taskslist.component.scss',
  animations: [
    trigger('taskAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TaskslistComponent implements OnInit ,OnChanges {
  @Input() tasks: Task[] = [];
  title :string= '';
description = '';

done = false;
  constructor(private taskservice:TasksService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tasks'].currentValue) {
      this.tasks = changes['tasks'].currentValue;
  }
  }

  task: Task = {
    id: 1, // The id of the task to update
    title: '',
    description: '',
    done: false,
    updated_at: new Date()
  };
onsubmit(task :Task) {
  this.taskservice.updateTask(task).subscribe(() => {
    this.tasks = this.tasks.map(t => {
      if (t.id === task.id) {
        t = task;
      }
      return t;
    });
  });
  this.visible = false;
}







visible: boolean = false;

  ngOnInit(): void {
  
  }

  deletetask(id: number | undefined) {
    console.log(id);
    
    if (id) {
      this.taskservice.deleteTask(id).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== id);

      }
      );
    }
  }



  showDialog() {
    this.visible = true;
    }

}




