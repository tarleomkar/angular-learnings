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
  handleClickEvent() {
    console.log("Function Called")

    // calling difrrent function
    this.otherFunction()
  }

  otherFunction() {
    console.log("other function");
  }
}
