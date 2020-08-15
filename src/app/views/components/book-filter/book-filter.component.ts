import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-book-filter',
	templateUrl: './book-filter.component.html',
	styleUrls: ['./book-filter.component.scss'],
})
export class BookFilterComponent implements OnInit {
	selectOptions = ['All', 'Most recently', 'High rate'];
	constructor() {}

	ngOnInit(): void {}
}
