import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme = signal<Theme>('dark');

  constructor() {
    // load saved theme from localStorage
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) this.theme.set(saved);

    // apply theme to body whenever signal changes
    effect(() => {
      document.body.setAttribute('data-theme', this.theme());
      localStorage.setItem('theme', this.theme());
    });
  }

  toggle(): void {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }
}