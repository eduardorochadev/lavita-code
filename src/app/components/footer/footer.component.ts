import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactTitle = 'Contact Us';

  contactInfo = {
    email: 'contact@lavitacode.com',
    phone: '+1 (123) 456-7890',
    location: '123 Main St, City, Country'
  };

  socials = [
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' }
  ];
}
