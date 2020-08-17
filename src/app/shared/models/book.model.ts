import { BookInfo } from './book-info.model';
import { BookSaleInfo } from './book-sale-info.model';
import { BookAccessInfo } from './book-access-info';

export class BookData {
	kind: string;
	total: number;
	items: Book[];
}

export class Book {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: BookInfo;
	saleInfo: BookSaleInfo;
	accessInfo: BookAccessInfo;
	searchInfo: BookSearchInfo;
}

class BookSearchInfo {
	textSnippet: string;
}
