import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotificationResult } from './../models/notification-result';

declare const $: any;

export class Message {

  constructor(private toastr: ToastsManager) { }

  public success(result: NotificationResult): void {
    if (result && result.messages.length > 0) {
      this.toastr.success(result.messages[0].message);
    }
  }

  public error(result: NotificationResult): void {
    if (result && result.errors.length > 0) {
      this.toastr.error(result.errors[0].message, undefined, { dismiss: 'click' });
    }
  }

  public errorMessage(message: string) {
    this.toastr.error(message, undefined, { dismiss: 'click' });
  }

}

export class Anchor {

  public top(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  public scrollTo(el: string, delay = 1000) {
    setTimeout(() => {
      const startY = currentYPosition();
      let stopY = elmYPosition(el);

      if (!stopY) {
        return;
      }

      // Top height
      stopY = stopY - 70;

      const distance = stopY > startY ? stopY - startY : startY - stopY;

      if (distance < 100) {
        scrollTo(0, stopY); return;
      }

      let speed = Math.round(distance / 100);

      if (speed >= 20) { speed = 20; }
      const step = Math.round(distance / 25);
      let leapY = stopY > startY ? startY + step : startY - step;
      let timer = 0;

      if (stopY > startY) {
        for (let i = startY; i < stopY; i += step) {
          setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
          leapY += step;
          if (leapY > stopY) { leapY = stopY; }
          timer++;
        } return;
      }

      for (let i = startY; i > stopY; i -= step) {
        setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
        leapY -= step;
        if (leapY < stopY) { leapY = stopY; }
        timer++;
      }

      function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) { return self.pageYOffset; }
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop) {
          return document.documentElement.scrollTop;
        }
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) { return document.body.scrollTop; }
        return 0;
      }

      function elmYPosition(_el) {
        const elm = document.getElementById(_el);
        if (!elm) {
          return null;
        }

        let y = elm.offsetTop;
        let node: any = elm;
        while (node.offsetParent && node.offsetParent !== document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        } return y;
      }
    }, delay);
  }

}

@Injectable()
export class HelperService {

  public message: Message = new Message(this.toastr);
  public anchor: Anchor = new Anchor();

  constructor(
    public toastr: ToastsManager) { }

}
