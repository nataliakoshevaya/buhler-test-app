import { Pipe, PipeTransform } from '@angular/core';
import { StateIcons } from '../icons/states-icons';

@Pipe({
  name: 'iconStatus'
})
export class IconStatusPipe implements PipeTransform {
  transform(status: string): string {
      switch (status) {
        case 'warning':
          return StateIcons.WARNING;
        case 'alarm':
          return StateIcons.ALARM;
        default:
          return StateIcons.RUNNING
      }
  }
}
