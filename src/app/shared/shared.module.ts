import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedPipes } from './pipes';

const REQUIRED_MODULES = [CommonModule, FormsModule];

@NgModule({
	declarations: [...SharedPipes],
	imports: [...REQUIRED_MODULES],
	exports: [...REQUIRED_MODULES, ...SharedPipes],
})
export class SharedModule {}
