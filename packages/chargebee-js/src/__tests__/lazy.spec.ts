/* eslint-disable @typescript-eslint/no-var-requires */

const SCRIPT_SELECTOR = 'script[src^="https://js.chargebee.com/v2"]';

describe('Chargebee.js Lazy ESM', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockReturnValue();
  });

  afterEach(() => {
    const scripts = Array.from(document.querySelectorAll(SCRIPT_SELECTOR));

    for (const script of scripts) {
      if (script.parentElement) {
        script.parentElement.removeChild(script);
      }
    }

    delete window.Chargebee;

    jest.resetModules();
    jest.restoreAllMocks();
  });

  test('does not inject the script if init is not called', async () => {
    require('../lazy');

    expect(document.querySelector(SCRIPT_SELECTOR)).toBe(null);
  });

  test('it injects the script if init is called', async () => {
    const { init } = require('../lazy');
    const option = {
      site: 'acme-test',
    };
    init(option);

    expect(document.querySelector(SCRIPT_SELECTOR)).not.toBe(null);
  });
});
