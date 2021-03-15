import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // name of the directive
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // dependency injection
    console.log('Inside Constructor');
    console.log(this.elRef.nativeElement);

    const el = this.elRef.nativeElement;
    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'color', '#fff');
    this.renderer.setStyle(el, 'height', '300px');
  }

}
