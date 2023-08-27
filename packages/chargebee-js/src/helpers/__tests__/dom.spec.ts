import { findScript } from '../dom';

describe('findScript', () => {
  const URL = 'https://js.chargebee.com/v2';
  afterEach(() => {
    const script = document.querySelector(`script[src="${URL}"]`);

    if (script && script.parentElement) {
      script.parentElement.removeChild(script);
    }

    delete window.Chargebee;
  });

  test(`findScript with <script src="${URL}"></script>`, () => {
    const script = document.createElement('script');
    script.src = URL;
    document.body.appendChild(script);

    expect(!!findScript()).toBe(true);
  });
});
