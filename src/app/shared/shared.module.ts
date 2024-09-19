import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommonModalComponent } from './components/common-modal/common-modal.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModalComponent,
    ButtonComponent,
    SelectComponent,
    FormsModule,
  ],
  exports: [
    CommonModalComponent,
    ButtonComponent,
    SelectComponent,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule {}
