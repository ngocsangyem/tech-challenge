import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BookViewComponent } from './pages/book-view/book-view.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

const routes: Routes = [
	{ path: '/book-views', component: BookViewComponent },
	{ path: '/book-detail', component: BookDetailComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ViewsRoutingModule {}
