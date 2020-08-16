export class BookInfo {
	title: string;
	authors: BookAuthor[];
	publisher: string;
	publishedDate: Date;
	description: string;
	industryIdentifiers: IndustryIdentifiers[];
	readingModes: ReadingModes;
	pageCount: number;
	printType: string;
	categories: string[];
	averageRating: number;
	ratingsCount: number;
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	panelizationSummary: PanelizationSummary;
	imageLinks: BookImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
}

export class BookAuthor {
	authors: string;
}

class IndustryIdentifiers {
	type: string;
	identifier: string;
}

class ReadingModes {
	text: boolean;
	image: boolean;
}

class PanelizationSummary {
	containsEpubBubbles: boolean;
	containsImageBubbles: boolean;
}

export class BookImageLinks {
	smallThumbnail: string;
	thumbnail: string;
	small?: string;
	medium?: string;
	large?: string;
	extraLarge?: string;
}
