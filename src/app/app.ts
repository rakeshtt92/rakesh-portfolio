import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  template: `
    <div class="portfolio-root">
      <nav class="navbar">
        <div class="nav-inner">
          <div class="nav-brand">
            <div class="nav-avatar">RT</div>
            <span class="nav-name">RakeshTT</span>
          </div>
          <div class="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="/assets/Rakesha_TT_Frontend_Developer.docx" download class="nav-cv-btn">
            Download CV
          </a>
        </div>
      </nav>
      <app-hero></app-hero>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact></app-contact>
      <footer class="footer">
        <p>Rakesh TT &copy; 2026 
        </p>
      </footer>
    </div>
  `,
  styles: [`
    .portfolio-root { background: #0d0d0d; min-height: 100vh; color: #fff; }
    .navbar { background: #111; border-bottom: 1px solid #1e1e1e; position: sticky; top: 0; z-index: 100; }
    .nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 2rem; height: 56px; display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { display: flex; align-items: center; gap: 10px; }
    .nav-avatar { width: 32px; height: 32px; border-radius: 50%; background: #4ade80; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #052e16; }
    .nav-name { font-size: 15px; font-weight: 600; color: #fff; }
    .nav-links { display: flex; gap: 1.5rem; }
    .nav-links a { font-size: 13px; color: #888; text-decoration: none; transition: color 0.2s; }
    .nav-links a:hover { color: #4ade80; }
    .nav-cv-btn { background: #4ade80; color: #052e16; padding: 7px 16px; border-radius: 6px; font-size: 12px; font-weight: 700; text-decoration: none; transition: background 0.2s; }
    .nav-cv-btn:hover { background: #86efac; }
    .footer { border-top: 1px solid #1e1e1e; padding: 1.5rem 2rem; text-align: center; display: flex; flex-direction: column; gap: 4px; }
    .footer p { font-size: 12px; color: #444; }
    @media (max-width: 700px) { .nav-links { display: none; } }
  `]
})
export class App { }
