export class BookAccessInfo {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: Epub;
	pdf: Pdf;
	webReaderLink: string;
	accessViewStatus: string;
	quoteSharingAllowed: boolean;
}

class Epub {
	isAvailable: boolean;
	acsTokenLink: string;
}

class Pdf {
	isAvailable: boolean;
}
