import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formErrors = {
    'userName': '',
    'password': ''
  };

  validationMessage = {
    'userName': {'required': '用户名不能为空'},
    'password': {'required': '密码不能为空'}
  };
  
  validateForm: FormGroup;
  userName: string;
  password: string;
  remember: boolean;

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void{
    this.validateForm = this.fb.group({
      userName: [this.userName, [Validators.required]],
      password: [this.password, [Validators.required]],
      remember:  [this.remember],
    });

    this.validateForm.valueChanges.subscribe((value) => this.checkForm());
  }

  private checkForm(): void {
  }
}
