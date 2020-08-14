import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	isActive = false;

	constructor() {}

	ngOnInit(): void {}

	@HostListener('window:scroll', ['$event'])
	onScroll() {
		const windowScroll = window.pageYOffset;
		if (windowScroll >= 300) {
			this.isActive = true;
		} else {
			this.isActive = false;
		}
	}
}
