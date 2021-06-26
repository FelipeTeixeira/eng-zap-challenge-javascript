import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    // {
    //     path: 'properties/:id',
    //     component: PropertyComponent,
    //     resolve: {
    //         property: PropertyResolver
    //     }
    // },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
        relativeLinkResolution: 'legacy'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
