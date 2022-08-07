import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.scss']
})
export class RegistrationpageComponent implements OnInit {

  registerForm!: FormGroup;

  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit()  {
    //validation

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]

    })
  }

  onSubmit() {

    this.submitted = true

    if(this.registerForm.invalid) {
      return
    }
    alert("Success")
  }

}
