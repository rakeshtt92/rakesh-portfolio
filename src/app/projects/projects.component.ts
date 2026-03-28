import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Blog Application',
      description: 'Full-stack blog platform built with Angular, Node.js, Express and MongoDB. Includes user authentication, CRUD for posts, and a CI/CD pipeline via GitHub Actions with Docker containerisation. Deployed live on Render.',
      tags: ['Angular','Node.js','MongoDB','Docker','GitHub Actions','Render'],
      liveUrl: 'https://blog-application-1-5.onrender.com',
      githubUrl: 'https://github.com/rakesh-tt',
      highlight: true,
    },
    {
      title: 'Coming Soon',
      description: 'A second project is on the way a Docker Compose full-stack app with Angular frontend, Node.js API, and MongoDB running as separate containers.',
      tags: ['Angular','TypeScript','Docker Compose'],
      liveUrl: '',
      githubUrl: 'https://github.com/rakesh-tt',
      highlight: false,
    },
  ];
}
