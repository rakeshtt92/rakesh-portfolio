// loading.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Output() loaded = new EventEmitter<void>();

  progress = 0;
  hiding = false;
  loadingText = 'Initialising...';

  private texts = [
    'Initialising...',
    'Loading components...',
    'Almost ready...',
    'Welcome!',
  ];

  ngOnInit(): void {
    this.animate();
  }

  private animate(): void {
    const steps = [
      { target: 30, delay: 200, text: this.texts[0] },
      { target: 60, delay: 500, text: this.texts[1] },
      { target: 85, delay: 800, text: this.texts[2] },
      { target: 100, delay: 1100, text: this.texts[3] },
    ];

    steps.forEach(step => {
      setTimeout(() => {
        this.progress = step.target;
        this.loadingText = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      this.hiding = true;
      setTimeout(() => this.loaded.emit(), 650);
    }, 1800);
  }
}
