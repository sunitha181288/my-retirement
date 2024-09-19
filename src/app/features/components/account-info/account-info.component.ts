import { Component, OnInit } from '@angular/core';
import { CommonModalComponent } from '../../../shared/components/common-modal/common-modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../services/account.service';
import { AccountDetails } from '../../models/account.interface';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SelectComponent } from '../../../shared/components/select/select.component';

@Component({
  selector: 'app-account-info',
  standalone: true,
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    CommonModalComponent,
    ButtonComponent,
    SelectComponent,
  ],
})
export class AccountInfoComponent implements OnInit {
  accountData: AccountDetails | undefined;
  modalVisible = false;
  selectedAccountNumber: string = '00107019304';
  selectedAccountBalance: number | undefined;
  selectedCurrency: string = 'TWD';
  accountOptionsForSelect: { value: string; label: string }[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccountData(this.selectedAccountNumber);
  }

  loadAccountData(accountNumber: string): void {
    this.accountService.getAccountDetails(accountNumber).subscribe((data) => {
      if (data) {
        this.accountData = data;
        this.accountOptionsForSelect =
          data.accountOptions?.map((option) => ({
            value: option.accountNumber,
            label: option.accountNumber,
          })) || [];
        this.updateSelectedAccountBalance();
      }
    });
  }

  openEditDialog(): void {
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  saveAccountNumber(): void {
    if (this.accountData) {
      this.accountService
        .updateAccountDetails(this.selectedAccountNumber, this.accountData)
        .subscribe(() => {
          this.loadAccountData(this.selectedAccountNumber);
          this.modalVisible = false;
        });
    }
  }

  updateSelectedAccountBalance(): void {
    const selectedOption = this.accountData?.accountOptions?.find(
      (option) => option.accountNumber === this.selectedAccountNumber
    );
    this.selectedAccountBalance = selectedOption
      ? selectedOption.balance
      : undefined;
  }
}
