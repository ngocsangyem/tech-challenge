import { Pipe, PipeTransform } from '@angular/core';
import { BookAuthor } from '@shared/models/book-info.model';

@Pipe({
	name: 'bookAuthor',
})
export class BookAuthorPipe implements PipeTransform {
	transform(value: BookAuthor[], ...args: unknown[]): string {
		console.log('BookAuthorPipe -> transform -> value', value);
		if (value.length > 1) {
			value.join(', ');
		}
		return value.join();
	}
}
