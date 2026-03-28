import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  ls = inject(LanguageService);

  year = new Date().getFullYear();
  email = 'rakeshyasht92@gmail.com';
  linkedin = 'https://linkedin.com/in/rakesh-tt';
  github = 'https://github.com/rakeshtt92';
  cvUrl = '/assets/Rakesha_TT_Frontend_Developer.docx';

  quickLinks = [
    { label: 'Skills', labelSv: 'Färdigheter', id: 'skills' },
    { label: 'Projects', labelSv: 'Projekt', id: 'projects' },
    { label: 'Experience', labelSv: 'Erfarenhet', id: 'experience' },
    { label: 'Contact', labelSv: 'Kontakt', id: 'contact' },
  ];

  ngOnInit(): void { }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', ' ');
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openEmail(): void {
    window.open(`https://mail.google.com/mail/?view=cm&to=${this.email}`, '_blank');
  }
}