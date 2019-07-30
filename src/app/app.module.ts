import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { TestAngularComponentComponent } from './test-angular-component/test-angular-component.component';

declare var WebComponents: any;

let customElementDefined = false;

@NgModule({
  declarations: [
    AppComponent,
    TestAngularComponentComponent
  ],
  entryComponents: [
    TestAngularComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const testAngularComponentElement = createCustomElement(TestAngularComponentComponent, { injector });
    window.addEventListener('WebComponentsReady', () => {
      if (!customElementDefined && customElements) {
        customElements.define('test-angular-component', testAngularComponentElement);
        customElementDefined = true;
      } else {
        console.log('error');
      }
    });
  }

  ngDoBootstrap() {}
}
