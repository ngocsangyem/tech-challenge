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
		this.API.GET(environment.api.book)
			.pipe(
				tap(() => console.log('HTTP request executed')),
				map((res) => Object.values(res['items']))
			)
			.subscribe((books: Book[]) => this.subject.next(books));
	}

	getAllBooks(): Observable<Book[]> {
		return this.book$;
	}
}
