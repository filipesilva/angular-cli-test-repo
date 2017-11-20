import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDecimal]'
})
export class DecimalDirective {

  @HostListener('keypress', ['$event']) onKeyPress(evt: KeyboardEvent) {
    if (evt.ctrlKey === true) {
      if (evt.charCode === 67 || evt.charCode === 99) { return true; }
    } else if (evt.shiftKey === true) {
      if (evt.keyCode >= 35 && evt.keyCode <= 37) { return true; }
      if (evt.keyCode === 9 || evt.keyCode === 39) { return true; }
    } else {
      if (evt.keyCode === 0 || evt.keyCode === evt.charCode) {
        if (evt.charCode === 45) { return true; }
        if (evt.charCode >= 48 && evt.charCode <= 57) { return true; }
        if (evt.charCode === 44) { return true; }
        if (evt.charCode === 46) { return true; }
      } else if (evt.charCode === 0) {
        if (evt.keyCode === 8 || evt.keyCode === 9 || evt.keyCode === 39 || evt.keyCode === 46) { return true; }
        if (evt.keyCode >= 35 && evt.keyCode <= 37) { return true; }
      }
    }

    evt.preventDefault();
  }

  constructor() { }

}
