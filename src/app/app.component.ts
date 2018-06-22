import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from './Service/TaskService';
import { Filter } from './Service/Filter';
import { Task } from './Models/Task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private taskList: Array<Task>;
  private taskListName: Array<String>;

  constructor(
    private taskService: TaskService,
    private  filter: Filter,
  ) { }

  ngOnInit(): void {
    this.taskList = this.taskService.get("example");
    this.taskListName = this.taskService.getTaskListName();
  }

  public setToList(form: NgForm) : void {
    console.log(form.value);
    this.taskService.setToList(new Task(
      0,
      form.value.title,
      form.value.description,
      form.value.taskWeight,
      form.value.isImportant
    ));
  }

  public changeTodoCollection(form: NgForm) : void {
    this.taskList = this.taskService.get(form.value);
  }

  setCollection(form: NgForm) : void {
    console.log(form);
    this.taskService.setNewDirectory(form.taskNameCollection);
    this.taskListName = this.taskService.getTaskListName();
  }
}
