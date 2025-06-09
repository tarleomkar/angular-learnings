import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = ["Anil", "Sam", "John", "Jane", "Alice", "Bob"];

  students = [
    { name: "Anil", age: 20, city: "New York" },
    { name: "Sam", age: 22, city: "Los Angeles" },
    { name: "John", age: 21, city: "Chicago" },
    { name: "Jane", age: 23, city: "Houston" },
    { name: "Alice", age: 19, city: "Phoenix" },
    { name: "Bob", age: 24, city: "Philadelphia" }
  ];

  getName(name:string) {
    console.log(name);
  }
}
