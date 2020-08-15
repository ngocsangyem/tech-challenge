import { Pipe, PipeTransform } from '@angular/core';
import { BookAuthor } from '@shared/models/book-info.model';

@Pipe({
	name: 'bookAuthor',
})
export class BookAuthorPipe implements PipeTransform {
	transform(value: BookAuthor[], ...args: unknown[]): string {
		if (value.length > 1) {
			value.join(', ');
		}
		return value.join();
	}
}
