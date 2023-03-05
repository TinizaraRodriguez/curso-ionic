import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private httpClient: HttpClient) { }
  newBook = new EventEmitter<Book>();
  deletedBook = new EventEmitter<number>();

  findAll(): Observable<Book[]>{
    let params = new HttpParams();
    params = params.append("page", 0);
    params = params.append("size", 10);
    params = params.append("sortDir", 'desc');
    params = params.append("sort", 'id');
    return this.httpClient.get<Book[]>('http://localhost:8080/books', {params});
  }

  findById(bookId: string | null): Observable<Book> {
    return this.httpClient.get<Book>('http://localhost:8080/books/' + bookId);
  }

  getBooks(size? :number): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('page', 0);
    params = params.append('size', !!size ? size: 50);
    params = params.append('sortDir', 'asc');
    params = params.append('sort', 'id');
    return this.httpClient.get<Book[]>('http://localhost:8080/books', { params });
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>('http://localhost:8080/books', book);
  }
  

  updateBook(book: Book) {
    return this.httpClient.put('http://localhost:8080/books/' + book.id, book);
  }

  deleteBook(bookId: number) {
    return new Promise(resolve => {
      return this.httpClient.delete('http://localhost:8080/books/' + bookId).subscribe( (response) => {
        this.deletedBook.emit(bookId);
        resolve(true);
      });
    });
  }


}
