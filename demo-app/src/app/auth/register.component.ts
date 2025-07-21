import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add registration logic here
    alert(`Registration attempted for user: ${this.username}`);
  }
}
