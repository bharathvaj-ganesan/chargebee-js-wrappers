import {
  loadScript,
  initChargebee,
} from './helpers';
import type { InitChargebee }  from './helpers';
import { InitOptions } from '@/types';

export const init: InitChargebee = (
  options: InitOptions
) => {
  return loadScript().then((Chargebee) => initChargebee(Chargebee, options));
};