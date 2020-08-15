import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';

import { BookViewComponent, BookDetailComponent } from './pages';
import {
	HeaderComponent,
	FooterComponent,
	BookCardComponent,
	BookEditComponent,
	BannerComponent,
} from './components';

import { ViewsComponent } from './views.component';
import { BookFilterComponent } from './components/book-filter/book-filter.component';

@NgModule({
	declarations: [
		ViewsComponent,
		BookViewComponent,
		BookDetailComponent,
		HeaderComponent,
		FooterComponent,
		BookCardComponent,
		BookEditComponent,
		BannerComponent,
		BookFilterComponent,
	],
	imports: [ViewsRoutingModule],
})
export class ViewsModule {}
