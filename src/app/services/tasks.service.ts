import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
tasks: Task[] = [];
  constructor(private http:HttpClient) {

   }

    getTasks(): Observable<Task[]>{
      return this.http.get<Task[]>('http://localhost:3000/tasks');
    }

    getTask(id: number) : Observable<Task>{
      return this.http.get<Task>(`http://localhost:3000/tasks/${id}`);
    }

    createTask(task: Task){
      return this.http.post<Task>('http://localhost:3000/tasks', task);
   
    }

    updateTask(task: Task){
      
      return this.http.put(`http://localhost:3000/tasks/${task.id}`, task);
    }

    deleteTask(id: number){
      return this.http.delete(`http://localhost:3000/tasks/${id}`);
    }
}
