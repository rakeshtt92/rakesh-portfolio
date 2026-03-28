// language/language.service.ts
import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'sv';

export const TRANSLATIONS = {
  en: {
    // available:    'Available for work — Gothenburg, Sweden',
    greeting: "Hey! I'm",
    sub1: 'Senior Frontend Developer with 7+ years of experience designing and building scalable enterprise web applications for global clients including',
    sub2: 'Proven expertise in Angular (2–20), React, TypeScript, RxJS, NgRx and WebSockets, with hands-on experience in CI/CD pipelines using Docker, GitHub Actions and AWS. Passionate about clean code and exceptional user experience.',
    downloadCv: 'Download CV',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    yearsExp: 'Years experience',
    projects: 'Projects delivered',
    clients: 'Enterprise clients',
    countries: 'Countries worked',
    skillsLabel: 'What I know',
    skillsTitle: 'Technical Skills',
    projLabel: 'What I built',
    projTitle: 'Projects',
    expLabel: 'Where I worked',
    expTitle: 'Experience',
    contactLabel: 'Get in touch',
    contactTitle: 'Contact',
    contactHead: 'Open to new opportunities',
    contactSub: 'Available immediately — open to remote, hybrid or on-site roles',
    sendEmail: 'Send me an email',
    noSponsorship: 'No sponsorship required',
  },
  sv: {
    available: 'Tillgänglig för arbete — Göteborg, Sverige',
    greeting: 'Hej! Jag är',
    sub1: 'Senior frontendutvecklare med 7+ års erfarenhet av att designa och bygga skalbara enterprise-webbapplikationer för globala kunder inklusive',
    sub2: 'Bevisad expertis inom Angular (2–20), React, TypeScript, RxJS, NgRx och WebSockets, med praktisk erfarenhet av CI/CD-pipelines med Docker, GitHub Actions och AWS. Passionerad om ren kod och exceptionell användarupplevelse.',
    downloadCv: 'Ladda ner CV',
    viewProjects: 'Se projekt',
    contactMe: 'Kontakta mig',
    yearsExp: 'Års erfarenhet',
    projects: 'Levererade projekt',
    clients: 'Företagskunder',
    countries: 'Länder arbetat i',
    skillsLabel: 'Vad jag kan',
    skillsTitle: 'Tekniska färdigheter',
    projLabel: 'Vad jag byggt',
    projTitle: 'Projekt',
    expLabel: 'Var jag arbetat',
    expTitle: 'Erfarenhet',
    contactLabel: 'Kom i kontakt',
    contactTitle: 'Kontakt',
    contactHead: 'Öppen för nya möjligheter',
    contactSub: 'Tillgänglig omedelbart — öppen för distans, hybrid eller på plats',
    sendEmail: 'Skicka ett mejl',
    noSponsorship: 'Inget sponsringskrav',
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<Lang>('en');

  get t() {
    return TRANSLATIONS[this.currentLang()];
  }

  toggle(): void {
    this.currentLang.set(this.currentLang() === 'en' ? 'sv' : 'en');
  }

  setLang(lang: Lang): void {
    this.currentLang.set(lang);
  }
}
