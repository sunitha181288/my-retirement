import { AccountDetails } from '../features/models/account.interface';

export const MOCK_ACCOUNT_DETAILS: Record<string, AccountDetails> = {
  '00107019304': {
    creationDate: '2019-01-18',
    accountNumber: '00107019304',
    chargeDate: '1 of the month',
    status: 'Monthly charge',
    investmentAmount: 50000,
    accumulatedAmount: 50000,
    currentMarketValue: 50011,
    accountOptions: [
      { accountNumber: '00107019304', balance: 200000000 },
      { accountNumber: '112188120145', balance: 199999999 },
      { accountNumber: '123456789012', balance: 150000000 },
    ],
  },
  '112188120145': {
    creationDate: '2020-05-20',
    accountNumber: '112188120145',
    chargeDate: '15 of the month',
    status: 'Quarterly charge',
    investmentAmount: 100000,
    accumulatedAmount: 300000,
    currentMarketValue: 310000,
    accountOptions: [
      { accountNumber: '112188120145', balance: 199999999 },
      { accountNumber: '123456789012', balance: 150000000 },
      { accountNumber: '00107019304', balance: 200000000 },
    ],
  },
  '123456789012': {
    creationDate: '2021-08-14',
    accountNumber: '123456789012',
    chargeDate: 'End of the month',
    status: 'Yearly charge',
    investmentAmount: 150000,
    accumulatedAmount: 450000,
    currentMarketValue: 470000,
    accountOptions: [
      { accountNumber: '123456789012', balance: 150000000 },
      { accountNumber: '112188120145', balance: 199999999 },
      { accountNumber: '00107019304', balance: 200000000 },
    ],
  },
};
