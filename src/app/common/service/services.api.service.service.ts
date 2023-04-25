import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddBookDto, Book, BookDTO } from 'src/app/features/books/components/overview/models/books.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // baseUrl = 'http://javaenv-env.eba-whjysakq.us-east-1.elasticbeanstalk.com'
  baseUrl = 'http://library-env-1.eba-jpxbezfp.us-east-1.elasticbeanstalk.com'
  // baseUrl = 'http://java-env.eba-ej3asysn.us-east-1.elasticbeanstalk.com'
  // baseUrl = 'http://localhost:5000'
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(`${this.baseUrl}/books`) as Observable<Book[]>;
  }

  getBook(bookId: string): Observable<BookDTO> {
    return this.http.get(`${this.baseUrl}/books/${bookId}`) as Observable<BookDTO>;
  }

  addBook(book: AddBookDto): Observable<Book> {
     return this.http.post(`${this.baseUrl}/books/add?authorId=${book.authorId}`, book) as Observable<Book>
  }

  filterBooks(authorname: string): Observable<Book[]> {
    return this.http.get(`${this.baseUrl}/books/filter?authorName=${authorname}`) as Observable<Book[]>
  }
}
