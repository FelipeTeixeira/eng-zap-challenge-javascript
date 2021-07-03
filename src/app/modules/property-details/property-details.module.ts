import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PropertyDetailsComponent } from './property-details.component';
import { PricingInfosComponent } from './pricing-infos/pricing-infos.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
    declarations: [
        PropertyDetailsComponent,
        PricingInfosComponent,
        FeaturesComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class PropertyDetailsModule { }
