import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PropertiesListComponent } from './properties-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        PropertiesListComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        NgxPaginationModule
    ]
})
export class PropertiesListModule { }
