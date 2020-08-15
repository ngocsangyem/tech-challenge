import {
	NgModule,
	Optional,
	ModuleWithProviders,
	SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

export const CORE_PROVIDER = [];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		ReactiveFormsModule,
	],
	exports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		ReactiveFormsModule,
	],
	providers: [],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() _parentModule: CoreModule) {
		if (_parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only'
			);
		}
	}

	static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [...CORE_PROVIDER],
		};
	}
}
