import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  sectionTitle = 'Nossos Serviços';
  services = [
    {
      icon: '📱',
      title: 'App Development',
      description: 'Creating seamless and user-friendly mobile applications tailored to your needs.'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Building responsive and dynamic websites that engage and convert visitors.'
    },
    {
      icon: '⚙️',
      title: 'System Integration',
      description: 'Integrating various systems to ensure seamless operations and improved efficiency.'
    }
  ];
}
