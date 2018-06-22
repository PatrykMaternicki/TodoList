import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../Models/Task';
import { Input } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})

export class SelectComponent implements OnInit {

  @Input() taskCollectName : Array<String>;
  @Output() activeChangeTodoCollection = new EventEmitter<NgForm>();
  constructor() { }

  changeCollectTodoList(list: NgForm) : void {
    this.activeChangeTodoCollection.emit(list);
  }

  ngOnInit() {
  }


}
