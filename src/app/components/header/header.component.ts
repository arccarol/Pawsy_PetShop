import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false;
  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 600;
    if (!this.isMobile) {
      this.isMenuOpen = false; // fecha menu em tela grande
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}