import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { BookViewComponent } from './pages/book-view/book-view.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ViewsComponent } from './views.component';

@NgModule({
	declarations: [
		ViewsComponent,
		BookViewComponent,
		BookDetailComponent,
		HeaderComponent,
		FooterComponent,
		BookCardComponent,
	],
	imports: [CommonModule, ViewsRoutingModule],
})
export class ViewsModule {}
