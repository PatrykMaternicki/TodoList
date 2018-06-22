import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SelectComponent } from './select/select.component';

import { TaskService } from './Service/TaskService';
import { Filter } from './Service/Filter';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodoListComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [TaskService, Filter],
  bootstrap: [AppComponent]
})
export class AppModule { }
