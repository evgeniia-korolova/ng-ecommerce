import { DOCUMENT, inject, Injectable, REQUEST } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from '../models/seo-data.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoManagerService {
  title = inject(Title);
  meta = inject(Meta);
  router = inject(Router);
  request = inject(REQUEST, {optional: true});
  document = inject(DOCUMENT);

  private readonly siteName = 'Ng-ecommerce';
  private readonly defaultImage = 'https://dummyimage.com/600x400/ffffff/03003.png&text=Ng-ecommerce';

  updateSeoTags(seoData: SeoData) {
    this.title.setTitle(`${seoData.title} | ${this.siteName}`);
    this.meta.updateTag({name: 'description', content: seoData.description});

    let origin = '';
    if(this.request) {
      const headers = this.request.headers as Headers | undefined;
      const protocol = (headers?.get('x-forwarded-proto') || this.request.url.split(':')[0] || 'htpps') + '://';
      const host = headers?.get('x-forwarded-host') || headers?.get('host') || '';
      origin = host ? `${protocol}${host}` : '';      
    } else if (typeof window !== 'undefined') {
      origin = window.location.origin
    }
    const fullUrl = `${origin}${this.router.url}`;

    let canonicalLink = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if(!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    const imageUrl = seoData.image || this.defaultImage;

    this.meta.updateTag({property: 'og:type', content: seoData.type || 'website'});
    this.meta.updateTag({property: 'og:site_name', content: this.siteName});
    this.meta.updateTag({property: 'og:title', content: seoData.title});
    this.meta.updateTag({property: 'og:description', content: seoData.description});
    this.meta.updateTag({property: 'og:url', content: fullUrl});
    this.meta.updateTag({property: 'og:image', content: imageUrl});
    this.meta.updateTag({property: 'og:image:width', content: '1200'});
    this.meta.updateTag({property: 'og:image:height', content: '630'});
    this.meta.updateTag({property: 'og:locale', content: 'en_US'});
  }
}
