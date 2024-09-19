import { Routes } from '@angular/router';
import { AccountInfoComponent } from './features/components/account-info/account-info.component';

export const routes: Routes = [
  { path: 'account', component: AccountInfoComponent },
  { path: '', redirectTo: '/account', pathMatch: 'full' },
];
