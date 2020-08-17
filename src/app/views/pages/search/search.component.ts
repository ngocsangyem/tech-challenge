import { Component, OnInit } from '@angular/core';
import { Book, BookData } from '@shared/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from '@core/services';
import { Observable, of } from 'rxjs';
import {
	debounceTime,
	distinctUntilChanged,
	map,
	concatMap,
	filter,
} from 'rxjs/operators';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	books$: Observable<Book[]>;
	form: FormGroup;

	constructor(private fb: FormBuilder, private bookService: BookService) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			input_search: this.fb.control(''),
		});

		this.books$ = this.form.valueChanges.pipe(
			filter((input) => input != null),
			debounceTime(500),
			map((value: { [key: string]: string }) =>
				value.input_search.trim()
			),
			distinctUntilChanged(),
			concatMap((changes) => (changes ? this.getBooks(changes) : of([]))),
			map((bookData: BookData) => bookData.items)
		);
	}

	getBooks(input: string): Observable<BookData> {
		return this.bookService.searchBooks(input);
	}
}
