/**
 * This is a singleton to ensure we only instantiate Chargebee once.
 */
import { init } from '@chargebee/chargebee-js';
import type { ChargebeeInstance } from '@chargebee/chargebee-js';

let chargebeePromise: Promise<ChargebeeInstance | null>;

export default function getChargebee(): Promise<ChargebeeInstance | null> {  
  if (!chargebeePromise) {
    chargebeePromise = init({
      site: import.meta.env.VITE_CB_SITE!
    });
  }

  return chargebeePromise;
}
