import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
    @Input() photos: string[] = [];
    customOptions: OwlOptions = {
        loop: true,
        dots: true,
        navSpeed: 700,
        navText: ['', ''],
        items: 1,
        lazyLoad: true,
        lazyLoadEager: 1
    }

    constructor() { }

    ngOnInit(): void { }
}
