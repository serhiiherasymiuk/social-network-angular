import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = 'https://localhost:7085/api/Users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.api);
  }

  getById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.api}/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  create(user: IUser): Observable<any> {
    return this.http.post(this.api, user);
  }
}
