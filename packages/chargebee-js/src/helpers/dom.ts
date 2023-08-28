import { Chargebee, ChargebeeInstance, InitOptions } from '@/types';

const CDN = 'https://js.chargebee.com/v2/chargebee.js';
const EXISTING_SCRIPT_MESSAGE =
  'Appears to be Chargebee.js is already loaded. Make sure you are not trying to load it again.';
let chargebeePromise: Promise<Chargebee | null> | null = null;

export const findScript = (): HTMLScriptElement | null => {
  const scripts = document.querySelectorAll<HTMLScriptElement>(
    `script[src^="${CDN}"]`
  );

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];

    if (!(CDN === script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

export const injectScript = (): HTMLScriptElement => {
  const script = document.createElement('script');
  script.src = CDN;

  (document.head || document.body).appendChild(script);

  return script;
};

export const loadScript = (): Promise<Chargebee | null> => {
  // Load only once
  if (chargebeePromise !== null) {
    return chargebeePromise;
  }

  chargebeePromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      /**
       * Note: Resolve to null when imported server side. This makes it safe to import in an isomorphic code base.
       */
      resolve(null);
      return;
    }

    if (window.Chargebee) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
      resolve(window.Chargebee);
    }

    try {
      let script = findScript();

      if (script) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript();
      }

      script.addEventListener('load', () => {
        if (window.Chargebee) {
          resolve(window.Chargebee);
        } else {
          reject(new Error('Chargebee.js not available'));
        }
      });

      script.addEventListener('error', () => {
        reject(new Error('Failed to load Chargebee.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });

  return chargebeePromise;
};
