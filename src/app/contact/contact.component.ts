import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ls = inject(LanguageService);
  email = 'rakeshyasht92@gmail.com';
  linkedin = 'https://linkedin.com/in/rakesh-tt';
  github = 'https://github.com/rakeshtt92';

  openEmail(): void {
    window.open(`https://mail.google.com/mail/?view=cm&to=${this.email}`, '_blank');
  }
}