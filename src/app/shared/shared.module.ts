import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconStatusPipe } from './pipes/icon-status.pipe';



@NgModule({
  declarations: [ IconStatusPipe ],
  imports: [
    CommonModule
  ],
  exports: [ IconStatusPipe ]
})
export class SharedModule { }
