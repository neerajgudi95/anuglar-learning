import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css'],
})
export class TdFormComponent {
  @ViewChild('myForm') myForm: NgForm;
  subscription = 'advanced';
  formData;
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    // this.formData = { ...this.myForm.controls };
    // console.log(first)
  }
}
