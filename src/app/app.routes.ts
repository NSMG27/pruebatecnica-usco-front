import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '', 
        loadChildren: () => import('./modules/login/routes')
    },
    {
        path: 'login', 
        loadChildren: () => import('./modules/login/routes')
    },
    {
        path: 'dashboard',
        title: 'Dashboard',
        loadChildren: () => import('./modules/tramites/panel-funcionario/routes')
    },
    {
        path: 'register', 
        loadComponent: () =>
            import('./modules/registro/registro').then((m) => m.Registro),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./modules/not-found/not-found').then((m) => m.NotFound),
    }
];
