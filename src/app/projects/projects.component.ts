import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../shared/scroll-animate.directive';
import { GithubGraphComponent } from '../github-graph/github-graph.component';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, GithubGraphComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  ls = inject(LanguageService);

  projects = [
    {
      title: 'Blog Application',
      description: 'Full-stack blog platform built with Angular, Node.js, Express and MongoDB. Includes user authentication, CRUD for posts, and a CI/CD pipeline via GitHub Actions with Docker containerisation. Deployed live on Render.',
      descriptionSv: 'Fullstack-bloggplattform byggd med Angular, Node.js, Express och MongoDB. Inkluderar användarautentisering, CRUD för inlägg och en CI/CD-pipeline via GitHub Actions med Docker-containerisering. Driftsatt live på Render.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Docker', 'GitHub Actions', 'Render'],
      liveUrl: 'https://blog-application-1-5.onrender.com/',
      githubUrl: 'https://github.com/rakeshtt92',
      screenshot: 'assets/blog.png',
      highlight: true,
    },
    {
      title: 'Next Project',
      titleSv: 'Nästa projekt',
      description: 'Currently building a full-stack app using Docker Compose with Angular frontend, Node.js API and MongoDB. Coming soon.',
      descriptionSv: 'Bygger för närvarande en fullstack-app med Docker Compose, Angular frontend, Node.js API och MongoDB. Kommer snart.',
      tags: ['Docker Compose', 'Angular', 'Node.js', 'MongoDB'],
      liveUrl: '',
      githubUrl: 'https://github.com/rakeshtt92',
      screenshot: '',
      highlight: false,
    }
  ];
}