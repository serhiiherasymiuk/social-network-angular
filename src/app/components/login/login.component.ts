import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginRequest } from 'src/app/interfaces/account';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

  login(): void {
    console.log(this.loginForm.value)
    if (!this.loginForm.valid) {
      return;
    }

    let request = this.loginForm.value as ILoginRequest;

    this.accountService.login(request).subscribe(res => {
      this.accountService.saveToken(res.token);
      this.accountService.setCurrentUserId(res.userId);
      this.router.navigate(['']);
    });
  }
}
