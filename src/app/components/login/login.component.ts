import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private accountService: AccountService, private userService: UserService) { }

  login(): void {
    if (!this.loginForm.valid) {
      alert("Invalid value, please enter again!");
      return;
    }

    let request = this.loginForm.value as ILoginRequest;

    // send POST request
    this.accountService.login(request).subscribe(res => {

      this.accountService.saveToken(res.token);
      this.userService.setCurrentUserId(res.userId)
      console.log("Logged In! Token: " + res.token);
    });
  }
}
