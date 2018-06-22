import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../Models/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() tasks : Array<Task>;
  constructor() { }

  ngOnInit() {
    console.log(this.tasks);
  }

}
