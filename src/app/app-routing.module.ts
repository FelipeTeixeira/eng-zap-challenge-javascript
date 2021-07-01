import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './modules/property/home/home.component';
import { PropertiesComponent } from './modules/property/properties/properties.component';
import { PropertyDetailsComponent } from './modules/property/property-details/property-details.component';
import { PropertyComponent } from './modules/property/property.component';
import { PropertiesResolver } from './shared/services/properties.resolver';
import { PropertyDetailsResolver } from './shared/services/property-details.resolver';
import { PropertiesSimilarResolver } from './shared/services/properties-similar.resolver';

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
        component: PropertyComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'empresa/:company',
                component: PropertiesComponent,
                resolve: {
                    properties: PropertiesResolver
                }
            },
            {
                path: 'empresa/:company/:propertyId',
                component: PropertyDetailsComponent,
                resolve: {
                    PropertiesResolver,
                    property: PropertyDetailsResolver,
                    propertiesSimilar: PropertiesSimilarResolver,
                }
            }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
