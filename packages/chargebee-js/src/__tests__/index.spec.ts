/* eslint-disable @typescript-eslint/no-var-requires */

const dispatchScriptEvent = (eventType: string): void => {
  const injectedScript = document.querySelector(
    'script[src="https://js.chargebee.com/v2/chargebee.js"]'
  );

  if (!injectedScript) {
    throw new Error('could not find Chargebee.js script element');
  }

  injectedScript.dispatchEvent(new Event(eventType));
};

describe('Chargebee.js ESM', () => {
  afterEach(() => {
    /**
     * Cleanup the injected DOMs
     */
    const script = document.querySelector(
      'script[src="https://js.chargebee.com/v2/chargebee.js"]'
    );
    if (script && script.parentElement) {
      script.parentElement.removeChild(script);
    }
    delete window.Chargebee;
    jest.resetModules();
  });

  it('injects the Chargebee.js script as a side effect', () => {
    require('../index');

    return Promise.resolve().then(() => {
      expect(
        document.querySelector('script[src="https://js.chargebee.com/v2/chargebee.js"]')
      ).not.toBe(null);
    });
  });

  it('does not inject the script when Chargebee.js is already loaded', () => {
    window.Chargebee = jest.fn((key) => ({ key })) as any;

    require('../index');

    return new Promise((resolve) => setTimeout(resolve)).then(() => {
      expect(
        document.querySelector('script[src="https://js.chargebee.com/v2/chargebee.js"]')
      ).toBe(null);
    });
  });

  describe.each(['../index', '../lazy'])('init (%s.ts)', (requirePath) => {
    beforeEach(() => {
      jest.restoreAllMocks();
      jest.spyOn(console, 'warn').mockReturnValue();
    });

    it('rejects when the script fails', async () => {
      const { init } = require(requirePath);
      const option = {
        site: 'acme-test'
      }
      const chargebeePromise = init(option);

      await Promise.resolve();
      dispatchScriptEvent('error');

      await expect(chargebeePromise).rejects.toEqual(
        new Error('Failed to load Chargebee.js')
      );

      expect(console.warn).not.toHaveBeenCalled();
    });

    it('rejects when Chargebee.js is not added to the window for some reason', async () => {
      const { init } = require(requirePath);
      const option = {
        site: 'acme-test'
      }
      const chargebeePromise = init(option);

      await Promise.resolve();
      dispatchScriptEvent('load');

      return expect(chargebeePromise).rejects.toEqual(
        new Error('Chargebee.js not available')
      );
    });
  });
});
