import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api: string = 'https://localhost:7085/api/Posts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.api);
  }

  getById(id: number): Observable<IPost> {
    return this.http.get<IPost>(`${this.api}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  create(post: IPost): Observable<any> {
    return this.http.post(this.api, post);
  }

  edit(post: IPost): Observable<any> {
    return this.http.put(this.api, post);
  }
}
