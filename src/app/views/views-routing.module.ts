import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsComponent } from './views.component';
import {
	BookViewComponent,
	BookDetailComponent,
	SearchComponent,
} from './pages';

const routes: Routes = [
	{
		path: '',
		component: ViewsComponent,
		children: [
			{ path: '', redirectTo: '/books', pathMatch: 'full' },
			{
				path: 'books',
				component: BookViewComponent,
			},
			{
				path: 'books/:id',
				component: BookDetailComponent,
			},
			{
				path: 'search',
				component: SearchComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ViewsRoutingModule {}
