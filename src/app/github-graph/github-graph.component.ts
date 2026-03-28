import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-github-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-graph.component.html',
  styleUrls: ['./github-graph.component.css']
})
export class GithubGraphComponent implements OnInit {
  @Input() username = 'rakeshtt92';

  ls = inject(LanguageService);
  graphUrl = '';
  githubUrl = '';

  ngOnInit(): void {
    this.graphUrl = `https://ghchart.rshah.org/4ade80/${this.username}`;
    this.githubUrl = `https://github.com/${this.username}`;
  }
}