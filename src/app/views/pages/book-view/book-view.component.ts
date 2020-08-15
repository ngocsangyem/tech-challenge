import { Component, OnInit } from '@angular/core';
import { BookService } from '@core/services';
import { Book } from '@shared/models';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-book-view',
	templateUrl: './book-view.component.html',
	styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit {
	books$: Observable<Book[]>;
	constructor(private bookService: BookService) {}

	ngOnInit(): void {
		this.books$ = this.bookService.getAllBooks();
		this.books$.subscribe((book) => {
			console.log('BookViewComponent -> ngOnInit -> book', book);
		});
	}
}
