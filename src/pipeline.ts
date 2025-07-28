import type { FinancialEvent } from '../types/events';
import type { Plugin } from '../types/plugins';
import { loadPlugins } from './services/plugin-loader';
import { processEventStream } from './services/event-stream';

const plugins = loadPlugins();

processEventStream(
  (event: FinancialEvent): void => {
    let transformed: FinancialEvent | undefined = event;
    for (const plugin of plugins) {
      if (plugin.supportedKinds.includes(event.kind)) {
        const result = plugin.handle(
          // Type violation possible here if not correctly typed
          event as any
        );
        if (result) {
          transformed = result;
        }
      }
    }
    // Further processing...
  }
);
