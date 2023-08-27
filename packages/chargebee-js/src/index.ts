
import { loadScript, initChargebee } from './helpers';
import type { InitChargebee }  from './helpers';
import type { InitOptions } from '@/types';

const chargebeePromise = loadScript();

export const init: InitChargebee = (options: InitOptions) => {
  return chargebeePromise.then((Chargebee) =>
    initChargebee(Chargebee, options)
  );
};
