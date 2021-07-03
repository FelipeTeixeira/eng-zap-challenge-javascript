import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PropertiesResolver } from './shared/services/properties.resolver';
import { HomeComponent } from './modules/home/home.component';
import { PropertiesListComponent } from './modules/properties-list/properties-list.component';
import { PropertyDetailsComponent } from './modules/property-details/property-details.component';

const routerOptions: ExtraOptions = {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 16],
};

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'empresa/:company',
        component: PropertiesListComponent,
        resolve: {
            resolvedProperties: PropertiesResolver
        }
    },
    {
        path: 'empresa/:company/:propertyId',
        component: PropertyDetailsComponent,
        resolve: {
            resolvedProperties: PropertiesResolver,
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
