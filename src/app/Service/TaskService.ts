import {Task} from '../Models/Task';
import {ExampleTaskList} from '../Data/TaskList';
export class TaskService {
 private taskList: Array<Task>;
 private taskDirectory: Map  <String, Array<Task>>;
 private editedKey: String;

 constructor () {
  this.initService();
 }

  private initService () : void {
    this.taskList  = new Array<Task>();
    this.taskDirectory = new Map ();
    this.taskList = ExampleTaskList;
    this.taskDirectory.set("example", this.taskList);
    this.taskList = [];
 }

  public setNewDirectory (keyValue) : void {
    this.taskDirectory.set(keyValue, this.taskList);
    this.editedKey = keyValue;
    console.log(this.taskDirectory);
  }

  public setToList(task) : void {
    this.taskList.push(task);
  }

  public intergrateToMap() : void {
    let editedList = this.taskDirectory.get(this.editedKey);
    editedList = this.taskList;
    this.taskDirectory.set(this.editedKey, editedList);
  }

  public get(key) : Array<Task> {
    return this.taskDirectory.get(key);
  }

  public getTaskListName() : Array<String> {
    return Array.from(this.taskDirectory.keys());
  }
}
