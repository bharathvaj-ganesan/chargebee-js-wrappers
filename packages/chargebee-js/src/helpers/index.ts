import { Chargebee, ChargebeeInstance, InitOptions } from '@/types';

export * from './dom';

export type InitChargebee = (
  options: InitOptions
) => Promise<ChargebeeInstance | null>;

/**
 * Initializes Chargebee.js else returns null
 * @param Chargebee
 * @param options
 * @returns ChargebeeInstance | null
 */
export const initChargebee = (
  Chargebee: Chargebee | null,
  options: InitOptions
): ChargebeeInstance | null => {
  if (Chargebee === null) {
    return null;
  }

  const chargebee = Chargebee?.init?.(options) || null;
  return chargebee;
};
