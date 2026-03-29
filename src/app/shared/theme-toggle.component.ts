import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="theme-btn" (click)="ts.toggle()"
      [title]="ts.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
      <span *ngIf="ts.theme() === 'dark'">
        <!-- Sun icon -->
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1"  x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1"  y1="12" x2="3"  y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </span>
      <span *ngIf="ts.theme() === 'light'">
        <!-- Moon icon -->
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      </span>
    </button>
  `,
  styles: [`
    .theme-btn {
      width: 34px; height: 34px;
      border-radius: 8px;
      background: transparent;
      border: 0.5px solid #333;
      display: flex; align-items: center; justify-content: center;
      color: #888; cursor: pointer;
      transition: color .2s, border-color .2s, background .2s;
    }
    .theme-btn:hover { color: #4ade80; border-color: #4ade80; }
  `]
})
export class ThemeToggleComponent {
  ts = inject(ThemeService);
}