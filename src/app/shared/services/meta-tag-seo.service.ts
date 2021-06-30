import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()

export class MetaTagSeoService {

    constructor(
        @Inject(DOCUMENT) private dom,
        private title: Title,
        private meta: Meta
    ) { }

    setMetaTags(title: string, description: string) {
        // SEO metadata
        this.title.setTitle(title);
        this.meta.addTag({ name: 'description', title });

        // Facebook & Instagram cards
        this.meta.addTag({ name: 'og:type', content: 'website' });
        this.meta.addTag({ name: 'og:title', content: '@zapimoveis' });
        this.meta.addTag({ name: 'og:image', content: 'ttps://assets.zap.com.br/assets/v5.115.0/zap-imoveis-ok.png' });
        this.meta.addTag({ name: 'og:site_name', content: 'Grupo ZAP - Abrindo caminhos para o mercado imobiliário no Brasil' });
        this.meta.addTag({ name: 'og:url', content: this.dom.URL });
        this.meta.addTag({ name: 'og:description', content: description });


        // Twitter metadata
        this.meta.addTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.addTag({ name: 'twitter:site', content: '@zapimoveis' });
        this.meta.addTag({ name: 'twitter:title', title });
        this.meta.addTag({ name: 'twitter:description', description });
        this.meta.addTag({ name: 'twitter:image', content: 'ttps://assets.zap.com.br/assets/v5.115.0/zap-imoveis-ok.png' });
    }
}
