import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_ACCOUNT_DETAILS } from '../../mock/mock-account-data';
import { AccountDetails } from '../models/account.interface';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    getAccountDetails(accountNumber: string): Observable<AccountDetails | undefined> {
        const mockAccountDetails: AccountDetails = MOCK_ACCOUNT_DETAILS[accountNumber];
        return of(mockAccountDetails);
    }

    updateAccountDetails(accountNumber: string, updatedDetails: AccountDetails): Observable<{ success: boolean }> {
        return of({ success: true });
    }
}
