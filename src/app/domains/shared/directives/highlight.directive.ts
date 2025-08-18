import { Directive, ElementRef, inject } from '@angular/core';

// manipulate directly the DOM
// This directive can be used to highlight elements, for example, by changing their background color or
@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  element = inject(ElementRef);
  constructor() { }

  ngOnInit() {
    // Example: Change the background color of the element to yellow
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
