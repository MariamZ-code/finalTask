import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  email = 'mariamm@gmail.com';
  

  sendEmail(value: string) {
    this.email = value;
  }


  update() {
    this.email = 'Update@gmail.com';
  }


  userLoggedIn = true;

  updateUserState() {
    this.userLoggedIn = !this.userLoggedIn;
  }


  
  userType: string = 'mariam';

  todos: string[] = [
    'todo 1',
    'todo 2',
    'todo 3',
    'todo 4',
    'todo 5',

  ]

  user = {
    name: 'mariam',
    age: 20
  }

  now = new Date();

}