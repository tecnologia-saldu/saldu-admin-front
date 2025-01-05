import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RedirectGuard } from './guards/redirect.guard';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { InvoiceDetailComponent } from './views/dashboard-pages/invoices/invoice-detail/invoice-detail.component';

export const routes: Routes = [
    {
        path: '',
        canActivate: [ RedirectGuard ],
        component: AuthLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule)
          }
        ]
      },
      {
        path: '',
        canActivate: [AuthGuard],
        component: MainLayoutComponent,
        children: [
          {
            path: 'invoices',
            loadComponent: () => import('./views/dashboard-pages/invoices/invoices-list/invoices-list.component').then(m => m.InvoicesListComponent)
          },
          {
            path: 'dashboard',
            loadComponent: () => import('./views/dashboard-pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
          },
          
        ]
      },
      {
        path: 'invoice-detail/:id',
        component: InvoiceDetailComponent,
      }
];
