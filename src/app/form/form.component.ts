import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {

  @Output() activeSetTask = new EventEmitter<NgForm>();
  @Output() activeSetTaskCollection = new EventEmitter<NgForm>();
  private collectionIsNotEmpty = false;
  constructor() { }

  ngOnInit() {
  }

  setTask(form: NgForm) : void {
    this.collectionIsNotEmpty = true;
    this.activeSetTask.emit(form);
  }

  setCollectionName(formCollection: NgForm) : void {
    this.activeSetTaskCollection.emit(formCollection.value);
  }
}
