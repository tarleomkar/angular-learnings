import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles:['h2{background-color: pink}']
})

export class AppComponent {
  name="";
  displayName = "";
  email="";

  getName(event:Event) {
    this.name = (event.target as HTMLInputElement).value
  }

  showName() {
      this.displayName = this.name;
    }

    setName() {
      this.name = "Sam"
    }

    getEmail(val:string) {
      console.log(val);
      this.email = val;
    }

    setEmail() {
      this.email = "default@test.com"
    }
  }
