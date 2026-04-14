import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';
import { LanguageService } from '../language/language.service';
import { GithubGraphComponent } from '../github-graph/github-graph.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, GithubGraphComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  ls = inject(LanguageService);

  experiences = [
    { 
      title: 'Lead Digital Engineer (Senior Frontend Developer)',
      titleSv: 'Lead Digital Engineer (Senior Frontendutvecklare)',
      company: 'Sonata Software',
      location: 'Bengaluru, India',
      period: 'Jan 2025 – Jun 2025',
      clients: 'Kund: Epicor | Projekt: Bistrack',
      points: [
        'Modernised legacy desktop app to Angular 19 for 500+ end users.',
        'Implemented WebSockets — reduced data-refresh latency by ~60%.',
        'Built reusable component library, cutting delivery time by 30%.',
        'Architected scalable frontend using modular design and lazy loading.',
      ],
      pointsSv: [
        'Moderniserade legacy-desktopapp till Angular 19 för 500+ slutanvändare.',
        'Implementerade WebSockets — minskade datafördröjning med ~60%.',
        'Byggde återanvändbart komponentbibliotek, minskade leveranstid med 30%.',
        'Designade skalbar frontend med modulär design och lazy loading.',
      ]
    },
    {
      title: 'Associate Consultant (Senior Frontend Developer)',
      titleSv: 'Associate Consultant (Senior Frontendutvecklare)',
      company: 'Capgemini',
      location: 'Bengaluru, India',
      period: 'Jul 2021 – Dec 2024',
      clients: 'Kunder: Honeywell, GE Vernova, GE Renewables, GE Healthcare',
      points: [
        'Enterprise Angular apps for global industrial and energy platforms.',
        'Led legacy migration across 5+ product lines, reducing technical debt.',
        'Achieved 90%+ unit test coverage using Jasmine and Karma.',
        'Maintained CI/CD pipelines with Jenkins and SonarQube.',
      ],
      pointsSv: [
        'Enterprise Angular-appar för globala industri- och energiplattformar.',
        'Ledde legacy-migrering över 5+ produktlinjer, minskade teknisk skuld.',
        'Uppnådde 90%+ enhetstäckning med Jasmine och Karma.',
        'Underhöll CI/CD-pipelines med Jenkins och SonarQube.',
      ]
    },
    {
      title: 'Associate Consultant (Frontend — Angular / JavaScript)',
      titleSv: 'Associate Consultant (Frontend — Angular / JavaScript)',
      company: 'Mobijini',
      location: 'Bengaluru, India',
      period: 'Sep 2018 – Mar 2021',
      clients: 'Projekt: Orderjini, One2One',
      points: [
        'Built SPAs using Angular, Node.js, Express.js, and MongoDB.',
        'Integrated REST APIs and built reusable Angular components.',
        'Unit tested with Jest, participated in Agile sprints.',
      ],
      pointsSv: [
        'Byggde SPA:er med Angular, Node.js, Express.js och MongoDB.',
        'Integrerade REST-API:er och byggde återanvändbara Angular-komponenter.',
        'Enhetstestade med Jest, deltog i Agile-sprintar.',
      ]
    },
    {
      title: 'Software Engineer (Frontend)',
      titleSv: 'Mjukvaruingenjör (Frontend)',
      company: 'DigitalIT360',
      location: 'Bengaluru, India',
      period: 'Oct 2017 – Jul 2018',
      clients: '',
      points: [
        'Built responsive web interfaces using JavaScript, HTML5, CSS3 and Bootstrap.',
        'Converted design mockups into production-ready web pages.',
      ],
      pointsSv: [
        'Byggde responsiva webbgränssnitt med JavaScript, HTML5, CSS3 och Bootstrap.',
        'Konverterade designmockups till produktionsklara webbsidor.',
      ]
    },
  ];
}