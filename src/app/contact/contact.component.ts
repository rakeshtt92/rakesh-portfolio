import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  email = 'rakeshyasht92@gmail.com';
  // phone    = '+46 761 509 115  | +91 9620156725';
  linkedin = 'https://linkedin.com/in/rakesh-tt';
  github = 'https://github.com/rakesh-tt';

  openEmail(): void {
    window.open('https://mail.google.com/mail/?view=cm&to=rakeshyasht92@gmail.com', '_blank');
  }
}


