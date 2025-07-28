import type { Plugin } from '../types/plugins';
import type { PaymentEvent, RefundEvent } from '../types/events';

export class CurrencyNormalizerPlugin implements Plugin<'payment' | 'refund'> {
  supportedKinds = ['payment', 'refund'] as const;

  handle(event: PaymentEvent | RefundEvent) {
    // Implementation missing
    // Should return normalized event if conversion is needed
    return undefined;
  }
}
