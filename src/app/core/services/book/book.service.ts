import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../http';
import { Book } from '@shared/models';
import { environment } from '@env/environment';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	constructor(private API: ApiService) {}

	getAllBooks(): Observable<Book[]> {
		return this.API.GET(environment.api.book);
	}
}
