import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetSequenceComponent } from './components/get-sequence.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequestNumberModule } from '../requestNumber/request-number.module';



@NgModule({
  declarations: [
    GetSequenceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    //RequestNumberModule
  ],
  exports:[
    GetSequenceComponent
  ]
})
export class GetSequenceModule { }
