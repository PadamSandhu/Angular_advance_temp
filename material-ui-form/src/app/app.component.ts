import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-ui-form';
  formDataFinal = {};
  formDataFinalArray: any = [];
  mainPage = true;
  reviewPage = false;
  submitPage = false;

  /// New Form creation
  submitForm: FormGroup;

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
    });
  }

  getErrorMessage() {
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
  sumbitFinalForm() {
    // API call should be made here
    console.log(this.formDataFinal);
    this.mainPage = false;
    this.reviewPage = false;
    this.submitPage = true;
  }

  createNewForm() {
    this.mainPage = true;
    this.reviewPage = false;
    this.submitPage = false;
    this.submitForm.reset();
  }
}
