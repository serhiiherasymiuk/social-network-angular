import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api: string = 'https://localhost:7085/api/Users';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.api);
  }

  getById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.api}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  create(movie: IUser): Observable<any> {
    return this.http.post(this.api, movie);
  }
}
