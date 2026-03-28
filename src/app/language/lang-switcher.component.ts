// language/lang-switcher.component.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lang-switcher">
      <button
        class="lang-btn"
        [class.active]="ls.currentLang() === 'en'"
        (click)="ls.setLang('en')">
        EN
      </button>
      <span class="lang-divider">|</span>
      <button
        class="lang-btn"
        [class.active]="ls.currentLang() === 'sv'"
        (click)="ls.setLang('sv')">
        SV
      </button>
    </div>
  `,
  styles: [`
    .lang-switcher {
      display: flex; align-items: center; gap: 4px;
    }
    .lang-btn {
      background: transparent; border: none;
      font-size: 12px; font-weight: 600;
      color: #555; cursor: pointer;
      padding: 4px 6px; border-radius: 4px;
      transition: color .2s, background .2s;
    }
    .lang-btn.active { color: #4ade80; background: #0d2b0d; }
    .lang-btn:hover  { color: #4ade80; }
    .lang-divider    { color: #333; font-size: 12px; }
  `]
})
export class LangSwitcherComponent {
  ls = inject(LanguageService);
}
