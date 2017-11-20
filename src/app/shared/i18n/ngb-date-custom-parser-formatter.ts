import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from './../services/settings.service';

function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return '';
  }
}

function isNumber(value: any): boolean {
  return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {

  constructor(private settingsService: SettingsService) {
    super();
  }

  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');

      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { year: toInteger(dateParts[0]), month: null, day: null };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        if (this.settingsService.dateFormat === 'mm/dd/yyyy') {
          return { year: toInteger(dateParts[2]), month: toInteger(dateParts[0]), day: toInteger(dateParts[1]) };
        }

        return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
      }
    }
    return null;
  }

  format(date: NgbDateStruct): string {
    let stringDate = '';
    if (date) {
      if (this.settingsService.dateFormat === 'mm/dd/yyyy') {
        stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
        stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
      } else {
        stringDate += isNumber(date.day) ? padNumber(date.day) + '/' : '';
        stringDate += isNumber(date.month) ? padNumber(date.month) + '/' : '';
      }
      stringDate += date.year;
    }

    return stringDate;
  }
}
