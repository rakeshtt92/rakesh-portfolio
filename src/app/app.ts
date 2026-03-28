import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent }         from './hero/hero.component';
import { SkillsComponent }       from './skills/skills.component';
import { ProjectsComponent }     from './projects/projects.component';
import { ExperienceComponent }   from './experience/experience.component';
import { ContactComponent }      from './contact/contact.component';
import { FooterComponent }       from './footer/footer.component';
import { LoadingComponent }      from './loading/loading.component';
import { BackToTopComponent }    from './backtotop/back-to-top.component';
import { LangSwitcherComponent } from './language/lang-switcher.component';
import { SeoService }            from './seo/seo.service';
import { LanguageService }       from './language/language.service';

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
    FooterComponent,
    LoadingComponent,
    BackToTopComponent,
    LangSwitcherComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private seo = inject(SeoService);
  ls          = inject(LanguageService);

  isLoading = true;
  menuOpen  = false;
  cvUrl     = '/assets/Rakesha_TT_Frontend_Developer.docx';

  ngOnInit(): void {
    this.seo.setPortfolioMeta();
  }

  onLoaded(): void { this.isLoading = false; }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }

  scrollTo(sectionId: string): void {
    this.menuOpen = false;
    setTimeout(() => {
      document.getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', ' ');
    }, 100);
  }
}