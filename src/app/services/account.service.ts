import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/api-environment';
import { ILoginRequest, ILoginResponse } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private tokenKey: string = 'access_token';
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'accounts';
  }

  login(data: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      `${this.url}/login`, 
      { 
        username: data.username,
        password: data.password 
      }
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.url}/logout`, null);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  saveToken(token: string): void{
    localStorage[this.tokenKey] = token;
  }
  getToken(): string {
    return localStorage[this.tokenKey];
  }
}