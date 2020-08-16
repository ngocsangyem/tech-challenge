import { NgModule } from '@angular/core';
import { ViewsRoutingModule } from './views-routing.module';

import { SharedModule } from '@shared/shared.module';

import {
	BookDetailComponent,
	BookViewComponent,
	SearchComponent,
} from './pages';
import { Components } from './components';

import { ViewsComponent } from './views.component';

@NgModule({
	declarations: [
		ViewsComponent,
		BookDetailComponent,
		BookViewComponent,
		SearchComponent,
		...Components,
	],
	imports: [ViewsRoutingModule, SharedModule],
})
export class ViewsModule {}
