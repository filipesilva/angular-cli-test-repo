import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

  private hasSet = false;

  @Input() isRunning = false;
  @Input() color;
  @Input() width;
  @Input() height;
  @Input() rectWidth;

  @Input() set layout(id: string) {
    this.hasSet = true;
    switch (id) {
      case 'mode1':
        this.mode1();
        break;

      case 'mode2':
        this.mode2();
        break;
    }
  }

  ngOnInit() {
    if (!this.hasSet) {
      this.mode1();
    }
  }

  private mode1(): void {
    this.color = '#20a8d8';
    this.width = '60px';
    this.height = '80px';
    this.rectWidth = '6px';
  }

  private mode2(): void {
    this.color = '#20a8d8';
    this.width = '60px';
    this.height = '44px';
    this.rectWidth = '2px';
  }

}
