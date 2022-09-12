import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestNumberComponent } from './components/request-number.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetSequenceModule } from '../get-sequence/get-sequence.module';



@NgModule({
  declarations: [
    RequestNumberComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    GetSequenceModule
  ],
  exports:[
    RequestNumberComponent
  ]
})
export class RequestNumberModule { }
