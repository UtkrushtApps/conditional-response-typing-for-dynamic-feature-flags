import type { FinancialEvent } from '../../types/events';

// Treat as a simplified simulation of the external event bus
const eventQueue: FinancialEvent[] = [
  {
    kind: 'payment',
    amount: 250,
    currency: 'USD',
    accountId: 'acct_1'
  },
  {
    kind: 'refund',
    amount: 100,
    currency: 'EUR',
    referenceId: 'txn_15'
  },
  {
    kind: 'chargeback',
    caseId: 'cb_10',
    disputedAmount: 200,
    originalPaymentId: 'pay_77'
  },
  {
    kind: 'system',
    message: 'Upgrading system',
    timestamp: '2023-04-01T10:00:00'
  }
];

export function processEventStream(consume: (event: FinancialEvent) => void): void {
  for (const event of eventQueue) {
    consume(event);
  }
}
