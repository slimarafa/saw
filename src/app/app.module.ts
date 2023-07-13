import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { SelfieListComponent } from './features/selfies/selfie-list/selfie-list.component';
import { UnSelfieReadonlyComponent } from './features/selfies/un-selfie-readonly/un-selfie-readonly.component';
import { LoggerService } from './shared/services/logger/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    SelfieListComponent,
    UnSelfieReadonlyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ], providers: [],
  // providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
