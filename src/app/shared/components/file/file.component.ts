import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FileFormData } from './../../models/file-form-data';

declare const $: any;

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html'
})
export class FileComponent implements AfterViewInit {

  private removed: boolean;

  @ViewChild('inputFile') inputFile: ElementRef;

  @Input() name: string;
  @Input() accept: string;

  constructor(
    private translateService: TranslateService) {
    this.removed = false;
  }

  ngAfterViewInit(): void {
    $(this.inputFile.nativeElement).filestyle({
      buttonText: this.translateService.instant('shared.buttons.search'),
      buttonName: 'btn-primary',
      iconName: 'fa fa-search'
    });
  }

  public appendFiles(name, filesFormData: FileFormData[]): void {
    const el = this.inputFile.nativeElement;

    if (el.files.length > 0 || this.removed === true) {
      if (el.files.length === 0) {
        const formData = new FormData();
        filesFormData.push({ name: name, fileName: null, formData: formData });
      }

      for (let i = 0; i < el.files.length; i++) {
        const formData = new FormData();
        formData.append(name, el.files[i]);
        filesFormData.push({ name: name, fileName: el.files[i].name, formData: formData });
      }
    }
  }

  public removeFile(): void {
    this.removed = true;
  }

}
