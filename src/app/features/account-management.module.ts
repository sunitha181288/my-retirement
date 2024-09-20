import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { SharedModule } from '../shared/shared.module';
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, SharedModule, AccountInfoComponent],
  providers: [AccountService],
})
export class AccountManagementModule {}
