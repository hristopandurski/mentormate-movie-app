import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes,  RouterModule} from '@angular/router';
import { ProxyRouteComponent } from './core/proxy-route/proxy-route.component';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'details',
        outlet: 'sidebar',
        component: ProxyRouteComponent,
        children: [
            {
                path: '',
                loadChildren: './details/details.module#DetailsModule',
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
