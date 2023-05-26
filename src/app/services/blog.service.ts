import { Injectable } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/throw';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string = 'assets/data.json'

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse): Observable<> {
    return Observable.throw(error.message || 'Server Error');
  }
}
