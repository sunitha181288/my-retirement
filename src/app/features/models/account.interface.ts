export interface AccountOption {
  accountNumber: string;
  balance: number;
}

export interface AccountDetails {
  accountNumber: string;
  creationDate: string;
  chargeDate: string;
  status: string;
  investmentAmount: number;
  accumulatedAmount: number;
  currentMarketValue: number;
  balance?: number;
  accountOptions?: AccountOption[];
}
