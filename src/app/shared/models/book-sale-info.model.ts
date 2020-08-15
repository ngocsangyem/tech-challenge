export class BookSaleInfo {
	country: string;
	saleability: string;
	isEbook: boolean;
	listPrice: Price;
	retailPrice: Price;
	buyLink: string;
	offers: Offers[];
}

class Offers {
	finskyOfferType: number;
	listPrice: Price;
	retailPrice: Price;
}

export class Price {
	amount: number;
	currencyCode: string;
}
