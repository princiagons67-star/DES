import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    this.router.navigate(['/admin']);
  }
}
