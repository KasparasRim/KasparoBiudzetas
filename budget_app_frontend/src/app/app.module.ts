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
import {MatTabsModule} from '@angular/material/tabs';
import { ModalpopuptipasComponent } from './ModalPopUpTipas/modalpopuptipas.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalpopupComponent,
    ModalpopuptipasComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    
  ],
  providers: [MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }