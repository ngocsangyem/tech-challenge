import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '@core/services';
import { Book } from '@shared/models';

@Component({
	selector: 'app-book-detail',
	templateUrl: './book-detail.component.html',
	styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
	bookData: Book;
	bookId: string;
	constructor(
		private activeRoute: ActivatedRoute,
		private bookService: BookService
	) {}

	ngOnInit(): void {
		this.activeRoute.paramMap.subscribe((params) => {
			this.bookId = params.get('id');

			if (this.bookId) {
				this.getBookByAlias(this.bookId);
			}
		});
	}

	getBookByAlias(bookId: string): void {
		this.bookService.getBook(bookId).subscribe((book) => {
			this.bookData = book;
			console.log(
				'BookDetailComponent -> getBookByAlias -> this.bookData',
				this.bookData
			);
		});
	}
}
