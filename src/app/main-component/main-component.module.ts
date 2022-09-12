import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponentComponent } from './components/main-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetSequenceModule } from '../get-sequence/get-sequence.module';
import { RequestNumberModule } from '../requestNumber/request-number.module';

@NgModule({
  declarations: [
    MainComponentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RequestNumberModule,
    GetSequenceModule
  ],
  exports:[
  MainComponentComponent
  ]
})
export class MainComponentModule { }
