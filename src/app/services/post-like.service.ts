import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPostLike } from '../interfaces/postLike';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostLikeService {

  private api: string = 'https://localhost:7085/api/PostLikes';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPostLike[]> {
    return this.http.get<IPostLike[]>(this.api);
  }

  getById(id: number): Observable<IPostLike> {
    return this.http.get<IPostLike>(`${this.api}/${id}`);
  }

  getByPostId(id: number): Observable<IPostLike[]> {
    return this.http.get<IPostLike[]>(`${this.api}/getByPostId/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  create(comment: IPostLike): Observable<any> {
    return this.http.post(this.api, comment);
  }

  edit(comment: IPostLike): Observable<any> {
    return this.http.put(this.api, comment);
  }
}
