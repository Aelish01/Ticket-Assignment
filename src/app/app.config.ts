import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}
