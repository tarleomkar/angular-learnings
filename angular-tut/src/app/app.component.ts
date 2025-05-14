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
  display = true;
  x = 20;
  toggleDiv = true

  hide() {
    this.display = false
  }

  show() {
    this.display = true
  }

  toggle() {
    this.display = !this.display
  }

  toggleTwo() {
    this.toggleDiv = !this.toggleDiv
  }
}
