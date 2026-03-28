import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef>;
  ls = inject(LanguageService);

  private observer!: IntersectionObserver;

  categories = [
    { title: 'Frontend', skills: ['Angular 2–20', 'React', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { title: 'State Management', skills: ['RxJS', 'NgRx', 'WebSockets', 'Signals (Angular 17+)'] },
    { title: 'UI Libraries', skills: ['Angular Material', 'Kendo UI', 'Bootstrap', 'PrimeNG'] },
    { title: 'Testing', skills: ['Jasmine', 'Karma', 'Jest', 'Angular Testing Utilities'] },
    { title: 'DevOps & Cloud', skills: ['Docker', 'GitHub Actions', 'AWS', 'Jenkins', 'CI/CD', 'SonarQube'] },
    { title: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL', '.NET / C#'] },
  ];

  keySkills = [
    { name: 'Angular', level: 95 },
    { name: 'React', level: 90 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'TypeScript', level: 82 },
    { name: 'RxJS / NgRx', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'Docker', level: 72 },
    { name: 'AWS', level: 65 },
  ];

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const target = bar.getAttribute('data-level') || '0';
            bar.style.width = target + '%';
            this.observer.unobserve(bar);
          }
        });
      },
      { threshold: 0.3 }
    );
    setTimeout(() => {
      this.progressBars.forEach(bar => {
        this.observer.observe(bar.nativeElement);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}