import { Routes } from '@angular/router';
//import { sessionGuard } from '../Core/Guards/Session/session-guard';
//import { postIdGuard } from '../Core/Guards/PostId/post-id-guard';

export default [
  {
    path: '',
    loadComponent: () =>
      import('./panel-funcionario').then((m) => m.PanelFuncionario),
    children: [
        {
        path: '',
        loadComponent: () =>
          import('../dashboard/dashboard')
            .then(m => m.Dashboard)
            .catch(err => {
              console.error('Error loading Feed', err);
              return null;
            }),
      },
      {
        path: 'tramites/radicar',
        loadComponent: () =>
          import('../radicacion/radicacion')
            .then(m => m.Radicacion)
            .catch(err => {
              console.error('Error loading Feed', err);
              return null;
            }),
      },
      {
        path: 'tramites/:id',
        loadComponent: () =>
          import('../detalle-tramite/detalle-tramite')
            .then(m => m.DetalleTramite)
            .catch(err => {
              console.error('Error loading Feed', err);
              return null;
            }),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ],
  },
] as Routes;