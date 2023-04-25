import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';
import { environment } from 'src/environments/api-environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private api: string;

  currentUserId: string;

  constructor(private http: HttpClient) {
    this.api = environment.apiUrl + 'Users';  
    this.setCurrentUserId("3209e5e1-8522-4a4c-83e1-129d63caa50c")
   }

  setCurrentUserId(userId: string) {
    this.currentUserId = userId;
  }

  getCurrentUserId(): string {
    return this.currentUserId;
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.api);
  }

  getById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.api}/${id}`);
  }

  getByUserName(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.api}/getByUserName/${id}`);
  }

  getFollowersByUserId(id: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.api}/getFollowersByUserId/${id}`);
  }

  getFollowingByUserId(id: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.api}/GetFollowingByUserId/${id}`);
  }

  getLikedUsersByPostId(id: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.api}/getLikedUsersByPostId/${id}`);
  }

  getLikedUsersByCommentId(id: number): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.api}/getLikedUsersByCommentId/${id}`);
  }

  edit(user: IUser): Observable<any> {
    return this.http.put(this.api, user);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  create(user: IUser): Observable<any> {
    return this.http.post(this.api, user);
  }
}
