import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import {
  HttpClientModule,
} from '@angular/common/http';
import { MachineService } from './shared/services/machine.service';
import { NavigationModule } from './navigation/navigation.module';
import { AppRoutingModule } from './app.routes.module';
import { SectionPageModule } from './section-page/section-page.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    NavigationModule,
    HttpClientModule,
    SectionPageModule,
    AppRoutingModule
  ],
  providers: [MachineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
