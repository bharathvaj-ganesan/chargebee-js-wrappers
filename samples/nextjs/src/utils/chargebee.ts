/**
 * This is a singleton to ensure we only instantiate Chargebee once.
 */
import { ChargebeeInstance, init } from '@chargebee/chargebee-js';

let chargebeePromise: Promise<ChargebeeInstance | null>;

export default function getChargebee(): Promise<ChargebeeInstance | null> {
  if (!chargebeePromise) {
    chargebeePromise = init({
      site: process.env.NEXT_PUBLIC_CB_SITE!,
      publishableKey: process.env.NEXT_PUBLIC_CB_PUBLISHABLE_KEY!,
    });
  }

  return chargebeePromise;
}
