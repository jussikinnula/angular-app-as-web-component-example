import { Component, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
})
export class AppComponent {
  valueObservable: Observable<number> = of(-1);
}
