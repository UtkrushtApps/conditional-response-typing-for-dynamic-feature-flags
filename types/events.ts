export type PaymentEvent = {
  kind: 'payment';
  amount: number;
  currency: string;
  accountId: string;
};

export type RefundEvent = {
  kind: 'refund';
  amount: number;
  currency: string;
  referenceId: string;
};

export type ChargebackEvent = {
  kind: 'chargeback';
  caseId: string;
  disputedAmount: number;
  originalPaymentId: string;
};

export type SystemEvent = {
  kind: 'system';
  message: string;
  timestamp: string;
};

export type FinancialEvent = PaymentEvent | RefundEvent | ChargebackEvent | SystemEvent;
export type FinancialEventKind = FinancialEvent['kind'];
