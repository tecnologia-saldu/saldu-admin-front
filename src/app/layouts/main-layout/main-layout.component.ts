import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../../shared-components/navbar/navbar.component';
import { SidebarComponent } from '../../shared-components/sidebar/sidebar.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet, NgxSpinnerComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  isSidebarVisible = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.toggleSidebar();
      }
    });
  }

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  closeSidebar(): void {
    this.isSidebarVisible = false; // Cierra el sidebar
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    // Cierra el sidebar si el clic ocurre fuera de él
    if (this.isSidebarVisible && !clickedElement.closest('.sidebar') && !clickedElement.closest('.navbar')) {
      this.closeSidebar();
    }
  }
}
