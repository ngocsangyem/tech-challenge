import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedPipes } from './pipes';

const REQUIRED_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
	declarations: [...SharedPipes],
	imports: [...REQUIRED_MODULES],
	exports: [...REQUIRED_MODULES, ...SharedPipes],
})
export class SharedModule {}
