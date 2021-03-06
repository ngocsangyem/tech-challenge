import { Component, OnInit, Input } from '@angular/core';
import { Book } from '@shared/models';

@Component({
	selector: 'app-book-card',
	templateUrl: './book-card.component.html',
	styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
	starTotal = 5;
	@Input() book: Book;
	constructor() {}

	ngOnInit(): void {}

	hasImage(): boolean {
		return !!this.book.volumeInfo.imageLinks;
	}
}
