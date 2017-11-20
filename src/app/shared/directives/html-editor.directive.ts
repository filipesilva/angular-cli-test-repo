import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { NgControl } from '@angular/forms';

declare const $;

@Directive({
  selector: '[appHtmlEditor]'
})
export class HtmlEditorDirective implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private control: NgControl
  ) { }

  ngAfterViewInit(): void {
    const _self = this;
    const obj = $(this.el.nativeElement);

    obj.summernote({
      lang: 'pt-BR'
    });

    obj.on('summernote.change', function (e) {
      const contents = obj.summernote('code');
      if (contents === '<p><br></p>' || contents === '<br>') {
        _self.control.control.setValue('');
      } else {
        _self.control.control.setValue(contents);
      }
    });

    setTimeout(() => {
      obj.trigger('summernote.change');
    }, 0);
  }
}
