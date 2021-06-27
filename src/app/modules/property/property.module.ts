import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property.component';
import { RouterModule } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
    declarations: [
        HomeComponent,
        PropertyComponent,
        PropertiesComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class PropertyModule { }
