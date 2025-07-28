import type { Plugin } from '../../types/plugins';
import { CurrencyNormalizerPlugin } from '../../utils/currency-normalizer';
import { ChargebackDetectorPlugin } from '../../utils/chargeback-detector';

export function loadPlugins(): Plugin[] {
  return [
    new CurrencyNormalizerPlugin(),
    new ChargebackDetectorPlugin(),
  ];
}
