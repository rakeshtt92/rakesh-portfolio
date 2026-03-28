// shared/counter.directive.ts
import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[counterAnim]',
  standalone: true,
})
export class CounterDirective implements OnInit, OnDestroy {
  @Input() targetValue  = 0;   // target number
  @Input() duration    = 1800; // ms
  @Input() suffix      = '';   // e.g. '+' or '%'

  private observer!: IntersectionObserver;
  private started = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.started) {
          this.started = true;
          this.animate();
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animate(): void {
    const start     = 0;
    const end       = this.targetValue ;
    const startTime = performance.now();
    const el        = this.el.nativeElement;

    const step = (currentTime: number) => {
      const elapsed  = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      // ease out cubic
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = Math.floor(start + (end - start) * ease);
      el.textContent = current + this.suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }
}
