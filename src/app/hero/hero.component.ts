import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  linkedinUrl = 'https://linkedin.com/in/rakesh-tt';
  githubUrl   = 'https://github.com/rakesh-tt';
  email       = 'rakeshyasht92@gmail.com';
  cvUrl       = '/assets/Rakesha_TT_Frontend_Developer.docx';
  stats = [
    { value: '7+',  label: 'Years experience' },
    { value: '15+', label: 'Projects delivered' },
    { value: '5+',  label: 'Enterprise clients' },
    // { value: '3',   label: 'Countries worked' },
  ];
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
