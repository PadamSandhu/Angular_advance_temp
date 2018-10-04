import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from '@angular/forms';
=======
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
>>>>>>> d81a20c14c7b8a874b3040fc30c817982612eebf

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-ui-form';
<<<<<<< HEAD
  formDataFinal = {};
  formDataFinalArray: any = [];
  mainPage = true;
  reviewPage = false;
  submitPage = false;
=======


>>>>>>> d81a20c14c7b8a874b3040fc30c817982612eebf

  /// New Form creation
  submitForm: FormGroup;

<<<<<<< HEAD
  constructor() {}
  ngOnInit() {
    // Need to provide javascript object
    this.submitForm = new FormGroup({
      olaType: new FormControl('Hello', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      subscriber: new FormControl('', [Validators.required]),
      eventOwner: new FormControl('', [Validators.required]),
      feedName: new FormControl('', [Validators.required]),
      frequency: new FormControl('', [Validators.required]),
      calendarInclude: new FormControl('', [Validators.required]),
      calendarExclude: new FormControl('', [Validators.required]),
      calendarOffset: new FormControl('', [Validators.required]),
      offsetExclude: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      systemName: new FormControl('', [Validators.required]),
      systemInstance: new FormControl('', [Validators.required]),
      processName: new FormControl('', [Validators.required]),
      progress: new FormControl('', [Validators.required]),
      expectedTime: new FormControl('', [Validators.required]),
      alertType: new FormControl('', [Validators.required]),
      alertThreshold: new FormControl('', [Validators.required]),
      startBusinessDate: new FormControl('', [Validators.required]),
      endBusinessDate: new FormControl('', [Validators.required]),
      destinationZone: new FormControl('', [Validators.required]),
      feedType: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
      timeZone: new FormControl('', [Validators.required])
=======
  constructor() { }
  ngOnInit() {
    // Need to provide javascript object
    this.submitForm = new FormGroup({
      'olatype': new FormControl('', [Validators.required]),
      'publisher': new FormControl('', [Validators.required]),
      'subscriber': new FormControl('', [Validators.required]),
      'eventowner': new FormControl('', [Validators.required]),
      'feedname': new FormControl('', [Validators.required]),
      'frequency': new FormControl('', [Validators.required]),
      'delivery_days': new FormControl('', [Validators.required]),
      'delivery_exclusions': new FormControl('', [Validators.required]),
      't-offset': new FormControl('', [Validators.required]),
      'offset_exclude': new FormControl('', [Validators.required]),
>>>>>>> d81a20c14c7b8a874b3040fc30c817982612eebf
    });
  }

  getErrorMessage() {
<<<<<<< HEAD
    return this.submitForm.get('email').hasError('required')
      ? 'You must enter a value'
      : this.submitForm.get('email').hasError('email')
        ? 'Not a valid email'
        : '';
  }
  onSubmit() {
    console.log(this.submitForm);
    this.submitForm.status === 'VALID'
      ? this.reviewForm()
      : console.log('Invalid form');
  }
  reviewForm() {
    this.mainPage = false;
    this.reviewPage = true;
    this.submitPage = false;
    this.formDataFinal = this.submitForm.value;
    this.formDataFinalArray = Object.entries(this.formDataFinal);
  }

  reviewEditForm() {
    this.mainPage = true;
    this.reviewPage = false;
    this.submitPage = false;
    this.submitForm.setValue(this.formDataFinal);
  }
=======
    return this.submitForm.get('email').hasError('required') ? 'You must enter a value' :
      this.submitForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }
  onSubmit() {
    console.log(this.submitForm);
  }




>>>>>>> d81a20c14c7b8a874b3040fc30c817982612eebf
}
