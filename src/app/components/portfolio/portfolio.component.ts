import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Lacet Engenharia e Arquitetura',
      description: 'Website para Lacet Engenharia e Arquitetura, empresa especializada em construção civil.',
      imageUrl: 'assets/portfolio/lacet.png',
      link: 'https://www.lacet.tech/home'
    },
    {
      title: 'Project Beta',
      description: 'A mobile app for online learning platforms.',
      imageUrl: 'assets/portfolio/project-beta.jpg',
      link: 'https://project-beta.example.com'
    },
    {
      title: 'Project Gamma',
      description: 'A custom system integration solution.',
      imageUrl: '/assets/portfolio/project-gamma.jpg',
      link: 'https://project-gamma.example.com'
    }
  ];

  activeIndex = 0;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.projects.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.projects.length) % this.projects.length;
  }

}
