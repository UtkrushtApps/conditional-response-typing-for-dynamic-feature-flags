import type { FinancialEvent, FinancialEventKind } from './events';

export interface Plugin<K extends FinancialEventKind = FinancialEventKind> {
  supportedKinds: K[];
  handle: (event: Extract<FinancialEvent, { kind: K }>) => FinancialEvent | void | undefined;
}

export type PluginRegistry = Plugin[];
