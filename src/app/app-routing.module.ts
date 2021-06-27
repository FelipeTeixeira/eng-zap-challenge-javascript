import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/property/home/home.component';
import { PropertiesComponent } from './modules/property/properties/properties.component';
import { PropertyComponent } from './modules/property/property.component';
import { PropertyResolver } from './shared/services/property.resolver';

const routes: Routes = [
    {
        path: '',
        component: PropertyComponent,
        children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'company/:company',
                component: PropertiesComponent,
                resolve: {
                    property: PropertyResolver
                }
            }
        ],
    },
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
