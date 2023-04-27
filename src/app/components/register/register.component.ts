import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterRequest } from 'src/app/interfaces/account';
import { ILoginRequest } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm = this.fb.group({
    displayUsername: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phoneNumber: '',
  });

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  loginRequest: ILoginRequest = {
    username: '',
    password: ''
  };

  register(): void {
    if (!this.registerForm.valid) {
      return;
    }

    let request = this.registerForm.value as IRegisterRequest;
    request.username = this.registerForm.value.displayUsername?.toLowerCase() || ''

    console.log(request)
    this.loginRequest.password = request.password;
    this.loginRequest.username = request.username;
    this.accountService.register(request).subscribe(res => {
      this.accountService.login(request).subscribe(res => {
        this.accountService.saveToken(res.token);
        this.accountService.setCurrentUserId(res.userId);
        this.router.navigate(['']);
      })
    });
  }
}
