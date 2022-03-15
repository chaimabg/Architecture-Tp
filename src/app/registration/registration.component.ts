import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router
             ) { }
  get form() { return this.registerForm.controls; }

  public registerForm =  this.fb.group({
    name: ['', Validators.required],
    mobile: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    IdNumber : ['', Validators.required],
    dateOfBirth: ['', Validators.required],
  });
  ngOnInit(): void {
  }
  submit(): void {
    const user = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      mobile: this.registerForm.value.mobile,
     IdNumber: this.registerForm.value.IdNumber,
      dateOfBirth: this.registerForm.value.dateOfBirth
    };
    console.log("id",user.IdNumber)
    this.router.navigateByUrl(`reference/${user.IdNumber}`).then(r => {

    });

  }
}
