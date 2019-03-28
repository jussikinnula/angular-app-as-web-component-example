import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { TestAngularComponentComponent } from './test-angular-component/test-angular-component.component';

@NgModule({
  declarations: [
    AppComponent,
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
    customElements.define('test-angular-component', testAngularComponentElement);
  }

  ngDoBootstrap() {}
}
