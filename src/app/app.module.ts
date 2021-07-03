import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './modules/home/home.module';
import { PropertiesListModule } from './modules/properties-list/properties-list.module';
import { PropertyDetailsModule } from './modules/property-details/property-details.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserTransferStateModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        PropertiesListModule,
        PropertyDetailsModule,
        SharedModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
