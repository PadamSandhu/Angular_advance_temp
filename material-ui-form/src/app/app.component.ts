import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-ui-form';



  /// New Form creation
  submitForm: FormGroup;

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
    });
  }

  getErrorMessage() {
    return this.submitForm.get('email').hasError('required') ? 'You must enter a value' :
      this.submitForm.get('email').hasError('email') ? 'Not a valid email' :
        '';
  }
  onSubmit() {
    console.log(this.submitForm);
  }




}
