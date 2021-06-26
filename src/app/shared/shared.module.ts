import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// MODULES
import { CarouselModule } from 'ngx-owl-carousel-o';

// DIRECTIVES
import { AppShellNoRenderDirective } from './directives/app-shell-norender.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

// COMPONENTS
import { GalleryComponent } from './components/gallery/gallery.component';
import { PropertyService } from './services/property.service';
import { PropertyResolver } from './services/property.resolver';

const modules = [
    CarouselModule
];

const components = [
    GalleryComponent
];

const directives = [
    AppShellRenderDirective,
    AppShellNoRenderDirective
];

const services = [
    PropertyService,
    PropertyResolver
]

@NgModule({
    imports: [
        CommonModule,
        ...modules
    ],
    declarations: [
        ...components,
        ...directives
    ],
    exports: [
        ...components,
        ...directives
    ],
    providers: [
        ...services
    ],
})
export class SharedModule { }
