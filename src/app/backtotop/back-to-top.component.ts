// back-to-top.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="back-to-top"
      [class.visible]="isVisible"
      (click)="scrollTop()"
      title="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 42px; height: 42px;
      border-radius: 50%;
      background: #0d2b0d;
      border: 1px solid #2d5a2d;
      color: #4ade80;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer;
      opacity: 0; visibility: hidden;
      transform: translateY(10px);
      transition: opacity .3s, visibility .3s, transform .3s, background .2s;
      z-index: 999;
    }
    .back-to-top.visible {
      opacity: 1; visibility: visible; transform: translateY(0);
    }
    .back-to-top:hover { background: #1a3a1a; transform: translateY(-3px); }
  `]
})
export class BackToTopComponent implements OnInit, OnDestroy {
  isVisible = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible = window.scrollY > 400;
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
