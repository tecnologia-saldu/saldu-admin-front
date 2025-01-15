import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { uploadInterceptor } from './shared-components/modals/upload.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withComponentInputBinding(), withRouterConfig({
    paramsInheritanceStrategy: 'always',
    onSameUrlNavigation: 'reload',
  })),
  provideHttpClient(withInterceptorsFromDi()),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: uploadInterceptor,
    multi: true,
  },
  importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'line-spin-clockwise-fade' }), BrowserModule, BrowserAnimationsModule, ScrollingModule, ToastrModule.forRoot({
    positionClass: 'toast-bottom-center', timeOut: 3000, toastClass: '!mb-20 ngx-toastr'

  }))]
};
