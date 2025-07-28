import type { Plugin } from '../types/plugins';
import type { ChargebackEvent } from '../types/events';

export class ChargebackDetectorPlugin implements Plugin<'chargeback'> {
  supportedKinds = ['chargeback'] as const;

  handle(event: ChargebackEvent) {
    // Implementation missing
    // Should handle chargeback events
    return undefined;
  }
}
