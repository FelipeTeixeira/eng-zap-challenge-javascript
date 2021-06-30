import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

// MODULES
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';

// DIRECTIVES
import { AppShellNoRenderDirective } from './directives/app-shell-norender.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';

// PROVIDERS
import { PropertyService } from './services/property.service';
import { PropertyResolver } from './services/property.resolver';
import { PropertyDetailsResolver } from './services/property-details.resolver';
import { RegrasUtils } from './utils/regras.util';
import { PropertyInfoCardComponent } from './components/property-info-card/property-info-card.component';
import { CanonicalService } from './services/canonical.service';
import { MetaTagSeoService } from './services/meta-tag-seo.service';

registerLocaleData(localePt)

const modules = [
    CarouselModule,
    NgxPaginationModule
];

const components = [
    HeaderComponent,
    GalleryComponent,
    PropertyInfoCardComponent
];

const directives = [
    AppShellRenderDirective,
    AppShellNoRenderDirective
];

const providers = [
    PropertyService,
    PropertyResolver,
    PropertyDetailsResolver,
    RegrasUtils,
    CanonicalService,
    MetaTagSeoService,
    CurrencyPipe,
    DatePipe
]

@NgModule({
    imports: [
        CommonModule,
        ...modules
    ],
    declarations: [
        ...components,
        ...directives,
    ],
    exports: [
        ...modules,
        ...components,
        ...directives,
    ],
    providers: [
        ...providers,
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        },
    ],
})
export class SharedModule { }
