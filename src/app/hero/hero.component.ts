import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language/language.service';
import { CounterDirective } from '../shared/counter.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, CounterDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  ls = inject(LanguageService);

  linkedinUrl = 'https://linkedin.com/in/rakesh-tt';
  githubUrl = 'https://github.com/rakeshtt92';
  email = 'rakeshyasht92@gmail.com';
  cvUrl = '/assets/Rakesha_TT_Frontend_Developer.docx';

  typedText = '';
  showCursor = true;

  private titles = [
    'Angular Developer',
    'React Developer',
    'Frontend Developer',
    'Frontend Architect',
    'UI Developer',
  ];

  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: any;
  private cursorTimer: any;
  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private animFrame: any;
  private resizeObserver!: ResizeObserver;

  stats = [
    { value: '7+', label: 'Years experience' },
    { value: '15+', label: 'Projects delivered' },
    { value: '5+', label: 'Enterprise clients' },
    // { value: '3', label: 'Countries worked' },
  ];

  techIcons = [
    { name: 'Angular', symbol: 'A', top: '15%', left: '5%', delay: '0s', size: '36px' },
    { name: 'TypeScript', symbol: 'TS', top: '60%', left: '3%', delay: '1.2s', size: '32px' },
    { name: 'RxJS', symbol: 'Rx', top: '30%', left: '88%', delay: '0.6s', size: '30px' },
    { name: 'Docker', symbol: 'D', top: '70%', left: '90%', delay: '1.8s', size: '34px' },
    { name: 'AWS', symbol: '☁', top: '10%', left: '82%', delay: '2.4s', size: '28px' },
    { name: 'NgRx', symbol: 'N', top: '80%', left: '15%', delay: '0.9s', size: '28px' },
  ];

  // ── ADD cdr to constructor ─────────────────────
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.typedText = '';
    this.charIndex = 0;
    this.isDeleting = false;
    this.titleIndex = 0;
    this.tick();
    this.cursorTimer = setInterval(() => {
      this.showCursor = !this.showCursor;
      this.cdr.detectChanges(); // ← force update cursor
    }, 530);
  }

  ngAfterViewInit(): void {
    this.initParticles();
    this.resizeObserver = new ResizeObserver(() => this.resizeCanvas());
    this.resizeObserver.observe(this.canvasRef.nativeElement.parentElement!);
  }

  ngOnDestroy(): void {
    clearTimeout(this.typingTimer);
    clearInterval(this.cursorTimer);
    cancelAnimationFrame(this.animFrame);
    this.resizeObserver?.disconnect();
  }

  private tick(): void {
    const current = this.titles[this.titleIndex];
    const fullLen = current.length;

    if (!this.isDeleting) {
      this.charIndex++;
      this.typedText = current.substring(0, this.charIndex);
      this.cdr.detectChanges(); // ← force update typing text

      if (this.charIndex >= fullLen) {
        this.isDeleting = true;
        this.typingTimer = setTimeout(() => this.tick(), 2000);
        return;
      }
      this.typingTimer = setTimeout(() => this.tick(), 100);

    } else {
      this.charIndex--;
      this.typedText = current.substring(0, this.charIndex);
      this.cdr.detectChanges(); // ← force update typing text

      if (this.charIndex <= 0) {
        this.isDeleting = false;
        this.charIndex = 0;
        this.typedText = '';
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        this.typingTimer = setTimeout(() => this.tick(), 500);
        return;
      }
      this.typingTimer = setTimeout(() => this.tick(), 55);
    }
  }

  private initParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.animateParticles();
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement!;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
    this.createParticles();
  }

  private createParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    this.particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
  }

  private animateParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(74,222,128,${p.alpha})`;
      this.ctx.fill();
    });
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(74,222,128,${0.12 * (1 - dist / 100)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }
    this.animFrame = requestAnimationFrame(() => this.animateParticles());
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.pushState(null, '', ' ');
  }

  openEmail(): void {
    window.open(`https://mail.google.com/mail/?view=cm&to=${this.email}`, '_blank');
  }

}