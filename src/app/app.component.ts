import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { NavbarComponent } from "./navbar/navbar.component";
import { TaskslistComponent } from "./tasks/taskslist/taskslist.component";
import { ButtonModule } from 'primeng/button';
import { TasksService } from './services/tasks.service';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Task } from './models/Task';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, BadgeModule, AvatarModule,
     InputTextModule, CommonModule, RippleModule, NavbarComponent, TaskslistComponent, ButtonModule,FormsModule, DialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit ,OnChanges {

constructor(private taskservice:TasksService) { }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['tasks'].currentValue) {
            this.tasks = changes['tasks'].currentValue;
        }
        
    }
tasks: Task[] = [];
visible: boolean = false;
title :string= '';
description = '';
lastid:number = 0;

showDialog() {
    this.visible = true;
}

addtask() {
    this.visible = true;
   
    this.taskservice.getTasks().subscribe(tasks => {
        console.log(tasks.length);
        let task : Task = {
      id: tasks.length + 1,
            title: this.title,
            description: this.description,
            done: false,
            created_at: new Date(),
            updated_at: new Date()
        };
        this.taskservice.createTask(task).subscribe(() => {
            this.title = '';
            this.description = '';
            this.visible = false;
            this.tasks.push(task);

        });
    }
    );
 


}
 

  ngOnInit() {
      this.taskservice.getTasks().subscribe(tasks => {
            this.tasks = tasks;
        }
        );

  }


}
