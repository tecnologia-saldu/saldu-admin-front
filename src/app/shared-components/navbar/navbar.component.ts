import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { TokenService } from '../../services/token.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faUser = faUser;
  faBars = faBars;
  userName: string | null = 'Invitado';

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.getUserName();
  }

  @Output() toggle = new EventEmitter<void>();

  onToggleSidebar(): void {
    this.toggle.emit();
  }

  getUserName() {
    this.userName = this.tokenService.getUserName()
  }
}
