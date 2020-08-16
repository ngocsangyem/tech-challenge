import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ApiService } from '../../http';
import { Book } from '@shared/models';
import { environment } from '@env/environment';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	private subject = new BehaviorSubject<Book[]>([]);
	book$: Observable<Book[]> = this.subject.asObservable();
	constructor(private API: ApiService) {}

	init() {
		this.API.GET(environment.api.books)
			.pipe(
				tap(() => console.log('HTTP request executed')),
				map((res) => Object.values(res['items']))
			)
			.subscribe((books: Book[]) => this.subject.next(books));
	}

	getAllBooks(): Observable<Book[]> {
		return this.book$;
	}

	getBook(bookId: string): Observable<Book> {
		console.log(`${environment.api.book}/${bookId}`);

		return this.API.GET(`${environment.api.book}/${bookId}`);
	}

	searchBooks(search: string): Observable<Book[]> {
		const encodedURI = encodeURI(
			'https://www.googleapis.com/books/v1/volumes?q=' +
				search +
				'+inauthor:king&maxResults=5&printType=books'
		);

		return this.API.GET(encodedURI);
	}

	searchBookByIsbn(isbn: string): Observable<Book[]> {
		const encodedURI = encodeURI(
			'https://www.googleapis.com/books/v1/volumes?q=isbn:' +
				isbn +
				'&maxResults=3'
		);

		return this.API.GET(encodedURI);
	}
}
