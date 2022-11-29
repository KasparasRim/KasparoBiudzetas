import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';
import {HttpClientModule} from '@angular/common/http';
import { ModalpopupComponent } from './ModalPopUp/modalpopup.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MasterService } from './Service/master.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }