import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  categories = [
    { title: 'Frontend',          skills: ['Angular 2–20', 'React', 'TypeScript','JavaScript ES6+','HTML5','CSS3','Tailwind CSS'] },
    { title: 'State Management',  skills: ['RxJS','NgRx','WebSockets','Signals (Angular 17+)'] },
    { title: 'UI Libraries',      skills: ['Angular Material','Kendo UI','Bootstrap','PrimeNG'] },
    { title: 'Testing',           skills: ['Jasmine','Karma','Jest','Angular Testing Utilities', 'React Testing Libraray'] },
    { title: 'DevOps & Cloud',    skills: ['Docker','GitHub Actions','AWS','Jenkins','CI/CD','SonarQube'] },
    { title: 'Backend & APIs',    skills: ['Node.js','Express.js','MongoDB','REST APIs','GraphQL','.NET / C#'] },
  ];
}
