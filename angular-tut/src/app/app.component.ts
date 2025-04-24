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
  count = 0;

  // handleIncrement() {
  //   this.count = this.count + 1;
  // }

  // handleDecrement() {
  //   this.count = this.count - 1;
  // }

  // handleReset() {
  //   this.count = 0;
  // }
  
  handleCounter(val: string) {
    if(val == 'minus') {
      this.count = this.count - 1;
    } else if (val == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0
    }
  }

}
