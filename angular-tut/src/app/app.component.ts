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
  color = 'blue';

  handleColor(val: string) {
    this.color = val
  }

  changeColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }

}
