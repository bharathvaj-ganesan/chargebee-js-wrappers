
import { loadScript, initChargebee } from './helpers';
import type { InitChargebee } from './helpers';
import type { Chargebee, InitOptions } from '@/types';

let chargebeePromise: Promise<Chargebee | null> = Promise.resolve(null);

if (!window.Chargebee) {
  chargebeePromise = loadScript();
}

export const init: InitChargebee = (options: InitOptions) => {
  return chargebeePromise.then((Chargebee) =>
    initChargebee(Chargebee, options)
  );
};
