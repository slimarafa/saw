import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { UnSelfieReadonlyComponent } from './un-selfie-readonly/un-selfie-readonly.component';
import { AddSelfieComponent } from './add-selfie/add-selfie.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import {WebcamModule} from 'ngx-webcam';
@NgModule({
  declarations: [
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfieComponent,
  ],
  imports: [CommonModule,
     SharedModule,
    WebcamModule],
  exports: [SelfieListComponent],
})
export class SelfieModule {}
