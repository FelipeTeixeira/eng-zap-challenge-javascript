import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';

// MODULES
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

// DIRECTIVES
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';

// PROVIDERS
import { PropertyService } from './services/property.service';
import { PropertiesResolver } from './services/properties.resolver';
import { PropertyInfoCardComponent } from './components/property-info-card/property-info-card.component';
import { CanonicalService } from './services/canonical.service';
import { MetaTagSeoService } from './services/meta-tag-seo.service';
import { ButtonRoundComponent } from './components/button-round/button-round.component';
import { BusinessTypeComponent } from './components/business-type/business-type.component';
import { InfoWithIconComponent } from './components/info-with-icon/info-with-icon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ButtonComponent } from './components/button/button.component';
import { PluralPipe } from './pipes/plural.pipe';
import PropertyRulesUtils from './utils/property-rules.util';

registerLocaleData(localePt)

const modules = [
    RouterModule,
    CarouselModule
];

const components = [
    HeaderComponent,
    GalleryComponent,
    PropertyInfoCardComponent,
    ButtonRoundComponent,
    BusinessTypeComponent,
    InfoWithIconComponent,
    SpinnerComponent,
    ButtonComponent,
];

const pipes = [
    PluralPipe
];

const directives = [
    AppShellRenderDirective,
];

const providers = [
    PropertyService,
    PropertiesResolver,
    CanonicalService,
    MetaTagSeoService,
    CurrencyPipe,
    DatePipe,
    PropertyRulesUtils
]

@NgModule({
    imports: [
        CommonModule,
        ...modules
    ],
    declarations: [
        ...components,
        ...directives,
        ...pipes
    ],
    exports: [
        ...modules,
        ...components,
        ...directives,
        ...pipes
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
