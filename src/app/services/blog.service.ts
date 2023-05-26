import { Injectable } from '@angular/core';
import { Blog } from 'src/app/models/Blog';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string = 'assets/data.json'

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url)
                    .catchError(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse): Observable<> {
    return Observable.throwError(error.message || 'Server Error');
  }
}