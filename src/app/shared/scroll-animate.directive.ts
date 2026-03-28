// shared/scroll-animate.directive.ts
// Add this directive to any element to get fade-in on scroll

import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[scrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animDelay = '0s';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;
    element.style.opacity    = '0';
    element.style.transform  = 'translateY(30px)';
    element.style.transition = `opacity 0.6s ease ${this.animDelay}, transform 0.6s ease ${this.animDelay}`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            element.style.opacity   = '1';
            element.style.transform = 'translateY(0)';
            this.observer.unobserve(element);
          }
        });
      },
      { threshold: 0.15 }
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
