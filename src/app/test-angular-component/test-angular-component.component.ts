import { Component, Input, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const isObservable = (input: any) => input
  && typeof input === 'object'
  && input.constructor
  && input.constructor.name
  && input.constructor.name === 'Observable';

@Component({
  selector: 'app-test-angular-component',
  templateUrl: './test-angular-component.component.html',
  styleUrls: ['./test-angular-component.component.scss'],
})
export class TestAngularComponentComponent {
  @Input() value: number;

  constructor(private elementRef: ElementRef) {}

  handleClick() {
    this.elementRef.nativeElement.dispatchEvent(new Event('button-click'));
  }
}
