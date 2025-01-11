import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { NgxSpinnerModule } from 'ngx-spinner';
import { uploadInterceptor } from './shared-components/modals/upload.interceptor';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideHttpClient(),
  provideRouter(routes, withComponentInputBinding()),
  provideHttpClient(withInterceptorsFromDi()),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: uploadInterceptor,
    multi: true,
  },
  importProvidersFrom(NgxSpinnerModule.forRoot({ type: 'line-spin-clockwise-fade' }), BrowserModule, BrowserAnimationsModule)]
};
