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
  color = 2;

  handleColor(value: number) {
    this.color = value;
  }

  handleInput(event: Event) {
    console.log(parseInt((event.target as HTMLInputElement).value));
    
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
