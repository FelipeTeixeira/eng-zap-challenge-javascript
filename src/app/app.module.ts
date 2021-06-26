import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { PropertyResolver } from './services/property.resolver';
import { HttpClientModule } from '@angular/common/http';
import { PropertyService } from './services/property.service';
import { AppShellNoRenderDirective } from './directives/app-shell-norender.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppShellRenderDirective,
        AppShellNoRenderDirective
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserTransferStateModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        PropertyService,
        PropertyResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
