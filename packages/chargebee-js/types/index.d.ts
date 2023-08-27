import {Chargebee, InitOptions, ChargebeeInstance} from './chargebee-js';

declare global {
  interface Window {
    Chargebee?: Chargebee;
  }
}

export * from './chargebee-js';

export const init: (
  options?: InitOptions | undefined
) => Promise<ChargebeeInstance | null>;

