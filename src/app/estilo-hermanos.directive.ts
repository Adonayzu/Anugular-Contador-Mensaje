import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]' // el app se lleve al html los dos hermanos
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = ' green'; 

  }

}
