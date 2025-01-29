import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faUser = faUser;
  faBars = faBars;

  @Output() toggle = new EventEmitter<void>();

  onToggleSidebar(): void {
    this.toggle.emit();
  }
}
