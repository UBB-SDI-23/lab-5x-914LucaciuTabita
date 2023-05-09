import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { AddBookDto, Author, AuthorWithBooks, BookDTO, Book, AddAuthorDTO } from 'src/app/features/books/components/overview/models/books.models';
import { throwError } from 'rxjs';
import { AddLibraryDTO, Borrowing, BorrowingDTO, Library, LibraryWithBorrowings} from 'src/app/features/libraries/component/overview/models/libraries.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // baseUrl = 'http://javaenv-env.eba-whjysakq.us-east-1.elasticbeanstalk.com'
  // baseUrl = 'https://library-env-1.eba-jpxbezfp.us-east-1.elasticbeanstalk.com'
  // baseUrl = 'http://javra-env.eba-n7jqtarq.us-east-1.elasticbeanstalk.com'
  // baseUrl = 'http://java-env.eba-ej3asysn.us-east-1.elasticbeanstalk.com'
  // baseUrl = 'http://localhost:5000'
  baseUrl = 'https://5000-cs-f7bdc13b-ecdb-4e69-88a2-10371a3be6e1.cs-europe-west4-bhnf.cloudshell.dev'
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<any> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  getBooks(): Observable<BookDTO[]> {
    return this.http.get(`${this.baseUrl}/books`) as Observable<BookDTO[]>;
  }

  getBook(bookId: string): Observable<Book> {
    return this.http.get(`${this.baseUrl}/books/${bookId}`) as Observable<Book>;
  }

  addBook(book: AddBookDto): Observable<BookDTO> {
     return this.http.post(`${this.baseUrl}/books/add?authorId=${book.authorId}`, book) as Observable<BookDTO>
  }

  filterBooks(authorname: string): Observable<BookDTO[]> {
    return this.http.get(`${this.baseUrl}/books/filter?authorName=${authorname}`) as Observable<BookDTO[]>
  }

  updateBook(book: BookDTO): Observable<BookDTO> {
    const url = `${this.baseUrl}/books`;
    return this.http.put<BookDTO>(url, book);
  }

  // deleteBook(id: string): Observable<string> {
  //   return this.http.delete(`${this.baseUrl}/books?id=${id}`, { responseType: 'text' })
  // }
  deleteBook(bookId: string): Observable<any> {
    const url = `${this.baseUrl}/books/${bookId}`;
    return this.http.delete<any>(url, { responseType: 'json' }).pipe(
      catchError(this.handleError)
    );
  }
  // deleteBook(bookId: string){
  //   return this.http.delete(`${this.baseUrl}/books/${bookId}`);
  // }

  getAuthors(): Observable<Author[]> {
    return this.http.get(`${this.baseUrl}/authors`) as Observable<Author[]>;
  }

  getAuthor(authorId: string): Observable<AuthorWithBooks> {
    return this.http.get(`${this.baseUrl}/authors/${authorId}`) as Observable<AuthorWithBooks>;
  }

  addAuthor(author: AddAuthorDTO): Observable<Author> {
    return this.http.post(`${this.baseUrl}/authors`, author) as Observable<Author>
  }

  updateAuthor(author: Author): Observable<Author> {
    const url = `${this.baseUrl}/authors`;
    return this.http.put<Author>(url, author);
  }

  deleteAuthor(authorId: string): Observable<any> {
    const url = `${this.baseUrl}/authors/${authorId}`;
    return this.http.delete<any>(url, { responseType: 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  getLibraries(): Observable<Library[]> {
    return this.http.get(`${this.baseUrl}/libraries`) as Observable<Library[]>;
  }

  getLibrary(libraryId: string): Observable<LibraryWithBorrowings> {
    return this.http.get(`${this.baseUrl}/libraries/${libraryId}`) as Observable<LibraryWithBorrowings>;
  }

  addLibrary(library: AddLibraryDTO): Observable<AddLibraryDTO> {
    return this.http.post(`${this.baseUrl}/libraries`, library) as Observable<AddLibraryDTO>
  }

  updateLibrary(library: Library): Observable<Library> {
    const url = `${this.baseUrl}/libraries`;
    return this.http.put<Library>(url, library);
  }

  deleteLibrary(libraryId: string): Observable<any> {
    const url = `${this.baseUrl}/libraries/${libraryId}`;
    return this.http.delete<any>(url, { responseType: 'json' }).pipe(
      catchError(this.handleError)
    );
  }

  getBorrowings(): Observable<BorrowingDTO[]> {
    return this.http.get(`${this.baseUrl}/borrowings`) as Observable<BorrowingDTO[]>;
  }

  getBorrowingsExtended(): Observable<Borrowing[]> {
    return this.http.get(`${this.baseUrl}/borrowingsExtended`) as Observable<Borrowing[]>;
  }

  getBorrowing(bookId: string, libraryId: string): Observable<Borrowing> {
    return this.http.get(`${this.baseUrl}/borrowings/${bookId}&${libraryId}`) as Observable<Borrowing>;
  }

  // getBorrowingDTO(bookId: string, libraryId: string): Observable<BorrowingDTO> {
  //   return this.http.get(`${this.baseUrl}/borrowings/${bookId}&${libraryId}`) as Observable<BorrowingDTO>;
  // }

  addBorrowing(borrowing: BorrowingDTO): Observable<BorrowingDTO> {
    return this.http.post(`${this.baseUrl}/borrowings`, borrowing) as Observable<BorrowingDTO>
  }

  updateBorrowing(borrowing: BorrowingDTO): Observable<BorrowingDTO> {
    const url = `${this.baseUrl}/borrowings`;
    console.log(borrowing);
    return this.http.put<BorrowingDTO>(url, borrowing);
  }

  deleteBorrowing(bookId: string, libraryId: string): Observable<any> {
    const url = `${this.baseUrl}/borrowings/${bookId}&${libraryId}`;
    return this.http.delete<any>(url, { responseType: 'json' }).pipe(
      catchError(this.handleError)
    );
  }
}
