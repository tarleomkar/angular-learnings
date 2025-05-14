import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name=""
  displayName = "";

  getName(event:Event) {
    this.name = (event.target as HTMLInputElement).value
  }

  showName() {
      this.displayName = this.name;
    }
  }
