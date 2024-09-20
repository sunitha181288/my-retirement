import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInfoComponent } from './account-info.component';

import { AccountService } from '../../services/account.service';

import { of } from 'rxjs';

import { MOCK_ACCOUNT_DETAILS } from '../../../mock/mock-account-data';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

describe('AccountInfoComponent', () => {
  let component: AccountInfoComponent;

  let fixture: ComponentFixture<AccountInfoComponent>;

  let accountService: jasmine.SpyObj<AccountService>;

  beforeEach(async () => {
    const accountServiceSpy = jasmine.createSpyObj('AccountService', [
      'getAccountDetails',
      'updateAccountDetails',
    ]);

    await TestBed.configureTestingModule({
      imports: [AccountInfoComponent, CommonModule, FormsModule],

      providers: [{ provide: AccountService, useValue: accountServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountInfoComponent);

    component = fixture.componentInstance;

    accountService = TestBed.inject(
      AccountService
    ) as jasmine.SpyObj<AccountService>;

    // Mock account service response

    accountService.getAccountDetails.and.callFake((accountNumber: string) => {
      return of(MOCK_ACCOUNT_DETAILS[accountNumber]);
    });

    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load account data on initialization', () => {
    expect(accountService.getAccountDetails).toHaveBeenCalledWith(
      component.selectedAccountNumber
    );

    expect(component.accountData).toEqual(
      MOCK_ACCOUNT_DETAILS[component.selectedAccountNumber]
    );

    expect(component.accountOptionsForSelect.length).toBe(3); // Should match the mock data count
  });

  it('should open and close the modal', () => {
    component.openEditDialog();

    expect(component.modalVisible).toBeTrue();

    component.closeModal();

    expect(component.modalVisible).toBeFalse();
  });

  it('should update the account balance when an account is selected', () => {
    component.updateSelectedAccountBalance();

    expect(component.selectedAccountBalance).toBe(200000000); // Balance for selectedAccountNumber in mock data

    component.selectedAccountNumber = '112188120145';

    component.updateSelectedAccountBalance();

    expect(component.selectedAccountBalance).toBe(199999999); // new balance for selected account
  });

  it('should save account number and reload account data', () => {
    component.accountData = MOCK_ACCOUNT_DETAILS['00107019304']; // Set initial data

    accountService.updateAccountDetails.and.returnValue(of());

    component.saveAccountNumber();

    expect(accountService.updateAccountDetails).toHaveBeenCalledWith(
      component.selectedAccountNumber,
      component.accountData
    );

    expect(accountService.getAccountDetails).toHaveBeenCalledWith(
      component.selectedAccountNumber
    );
  });
});
