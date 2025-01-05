import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { faChartLine, faChevronDown, faFileLines, faList, faDolly, faChartBar, faRightFromBracket, faX } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CdkAccordionModule, FontAwesomeModule, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faChartLine = faChartLine;
  faFileLines = faFileLines;
  faList = faList;
  faDolly = faDolly;
  faChartBar = faChartBar;
  faRightFromBracket = faRightFromBracket;
  faX = faX;
  faChevronDown = faChevronDown;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
