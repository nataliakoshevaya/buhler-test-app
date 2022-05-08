import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPageComponent } from './section-page.component';
import { SectionPageRoutingModule } from './section-page.routing';


@NgModule({
  declarations: [
    SectionPageComponent
  ],
  imports: [
    CommonModule,
    SectionPageRoutingModule
  ],
  exports: [
    SectionPageComponent
  ]
})
export class SectionPageModule { }
