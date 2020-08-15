import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedPipes } from './pipes';

const REQUIRED_MODULES = [CommonModule];

@NgModule({
	declarations: [...SharedPipes],
	imports: [...REQUIRED_MODULES],
	exports: [...REQUIRED_MODULES],
})
export class SharedModule {}
