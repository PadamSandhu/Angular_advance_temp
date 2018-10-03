import { Component, OnInit } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators, FormGroup} from '@angular/forms';

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
    'username': new FormControl('Default UserName', [ Validators.required ] ),
    'gender': new FormControl('male'),
    'email': new FormControl('', [ Validators.required, Validators.email ] ),

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
