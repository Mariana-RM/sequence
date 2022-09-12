import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-request-number',
  templateUrl: './request-number.component.html',
  styleUrls: ['./request-number.component.css']
})
export class RequestNumberComponent implements OnInit {
  formSequence = new FormGroup({
   txtNumber: new FormControl('', [Validators.required]),
  });
 @Output() onIndex: EventEmitter<number> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  get form() {
    return this.formSequence.controls;
  }

  ngOnInit(): void {
    this.formSequence = this.formBuilder.group(
      {
        txtNumber: ['', Validators.required],
      },
    );
  }

  onSubmit():void {
    if (this.formSequence.invalid) {
      return;
    }
    this.onIndex.emit(Number(this.form.txtNumber.value));
  }

}
