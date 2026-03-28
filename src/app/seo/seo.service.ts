import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private meta: Meta, private title: Title) { }

  setPortfolioMeta(): void {
    this.title.setTitle('Rakesh TT — Senior Frontend Developer | Gothenburg, Sweden');

    // Name meta tags
    const nameTags = [
      {
        name: 'description',
        content: 'Senior Frontend Developer with 7+ years experience. Expert in Angular, TypeScript, RxJS, NgRx, Docker and AWS. Based in Gothenburg, Sweden. Available immediately, no sponsorship required.'
      },
      {
        name: 'keywords',
        content: 'Angular Frontend Developer, Senior Frontend Developer, TypeScript, RxJS, NgRx, Docker, AWS, Gothenburg, Sweden, Angular 20, Frontend Architect'
      },
      { name: 'author', content: 'Rakesh TT' },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#0d0d0d' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Rakesh TT — Senior Frontend Developer' },
      { name: 'twitter:description', content: 'Senior Frontend Developer with 7+ years experience. Based in Gothenburg, Sweden.' },
      { name: 'twitter:image', content: 'https://rakeshtt.dev/assets/RakeshTT.jpg' },
    ];

    // Property meta tags (Open Graph)
    const propertyTags = [
      { property: 'og:title', content: 'Rakesh TT — Senior Frontend Developer' },
      { property: 'og:description', content: 'Senior Frontend Developer with 7+ years experience. Based in Gothenburg, Sweden. Available immediately.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://rakeshtt.dev' },
      { property: 'og:image', content: 'https://rakeshtt.dev/assets/RakeshTT.jpg' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:site_name', content: 'Rakesh TT Portfolio' },
    ];

    nameTags.forEach(tag => {
      this.meta.updateTag({ name: tag.name, content: tag.content });
    });

    propertyTags.forEach(tag => {
      this.meta.updateTag({ property: tag.property, content: tag.content });
    });
  }
}