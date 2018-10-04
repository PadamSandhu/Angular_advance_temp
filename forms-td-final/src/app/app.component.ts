import { Component, ViewChild } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log('This is cool');
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
}
