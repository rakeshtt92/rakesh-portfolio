import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Lead Digital Engineer (Senior Angular Developer)',
      company: 'Sonata Software', location: 'Bengaluru, India', period: 'Jan 2025 – Jun 2025',
      clients: 'Client: Epicor | Project: Bistrack',
      points: [
        'Modernised legacy desktop app to Angular 19 for 500+ end users.',
        'Implemented WebSockets — reduced data-refresh latency by ~60%.',
        'Built reusable component library, cutting delivery time by 30%.',
        'Architected scalable frontend using modular design and lazy loading.',
      ]
    },
    {
      title: 'Associate Consultant (Senior Angular Developer)',
      company: 'Capgemini', location: 'Bengaluru, India', period: 'Jul 2021 – Dec 2024',
      clients: 'Clients: Honeywell, GE Vernova, GE Renewables, GE Healthcare',
      points: [
        'Enterprise Angular apps for global industrial and energy platforms.',
        'Led legacy migration across 5+ product lines, reducing technical debt.',
        'Achieved 90%+ unit test coverage using Jasmine and Karma.',
        'Maintained CI/CD pipelines with Jenkins and SonarQube.',
      ]
    },
    {
      title: 'Associate Consultant (Frontend — Angular / JavaScript)',
      company: 'Mobijini', location: 'Bengaluru, India', period: 'Sep 2018 – Mar 2021',
      clients: 'Projects: Orderjini, One2One',
      points: [
        'Built SPAs using Angular, Node.js, Express.js, and MongoDB.',
        'Integrated REST APIs and built reusable Angular components.',
        'Unit tested with Jest, participated in Agile sprints.',
      ]
    },
    {
      title: 'Software Engineer (Frontend)',
      company: 'DigitalIT360', location: 'Bengaluru, India', period: 'Oct 2017 – Jul 2018',
      clients: '',
      points: [
        'Built responsive web interfaces using JavaScript, HTML5, CSS3 and Bootstrap.',
        'Converted design mockups into production-ready web pages.',
      ]
    },
  ];
}
