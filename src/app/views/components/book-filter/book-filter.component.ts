import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { toSnakeCase } from '@core/helpers';

@Component({
	selector: 'app-book-filter',
	templateUrl: './book-filter.component.html',
	styleUrls: ['./book-filter.component.scss'],
})
export class BookFilterComponent implements OnInit {
	selectOptions = ['All', 'Most recently', 'Top view'];
	selectedOption = 'Test';
	@Output() select = new EventEmitter<string>();
	constructor() {}

	ngOnInit(): void {}

	selectedFilter(value: string) {
		const valueSnakeCase = toSnakeCase(value);
		this.select.emit(valueSnakeCase);
	}
}
