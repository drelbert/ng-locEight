import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'loc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent  {
  loginFormModel: FormGroup;

  constructor() { 
    this.loginFormModel = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      passwordsGroup: new FormGroup({
        password: new FormControl(),
        pconfirm: new FormControl()
      })

    });
  }
    onsubmit() {
      console.log(this.loginFormModel.value);
    }

}
