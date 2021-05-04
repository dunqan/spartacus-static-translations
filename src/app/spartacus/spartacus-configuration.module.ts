import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://40.76.109.9:9002',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig({
    i18n: {
      resources: {},
      backend: { loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json' }
    },
    features: {
      level: '3.2'
    }
  })]
})
export class SpartacusConfigurationModule { }
