import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import('./ticket/ticket/ticket.component'),
    title: 'ticket',
  },
];
