import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(private fb: FormBuilder) { }

    createManageAccountForm(accountData: any): FormGroup {
        return this.fb.group({
            accountNumber: [accountData.accountNumber || '', [Validators.required]]
        });
    }

    getValidationMessages(form: FormGroup, field: string): string {
        const control = form.get(field);
        if (control && control.errors && (control.dirty || control.touched)) {
            if (control.errors['required']) {
                return 'This field is required';
            }

            if (control.errors['invalidAccountNumber']) {
                return 'Invalid account number format';
            }
        }
        return '';
    }
}
