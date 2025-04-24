import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name: string = "Alice"
  data: string | number = "Hello"
  other = true

  updateName() {
    this.name = "Bruno"
    this.data = 60
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }
}
