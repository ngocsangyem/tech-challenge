import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '@shared/models';

@Pipe({
	name: 'filterBook',
})
export class FilterBookPipe implements PipeTransform {
	transform(books: Book[], type: string): Book[] {
		if (type === 'most_recently') {
			return this.sort(books, 'publishedDate');
		} else if (type === 'top_view') {
			return this.sort(books, 'averageRating');
		}

		return books;
	}

	sort(books: Book[], item) {
		return books
			.slice()
			.sort((a: Book, b: Book) =>
				this.descendingOrder(a.volumeInfo[item], b.volumeInfo[item])
			);
	}

	descendingOrder = (a, b) => {
		if (a > b) return -1;
		if (a < b) return 1;
		return 0;
	};
}
