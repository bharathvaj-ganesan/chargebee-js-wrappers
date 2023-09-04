# Chargebee.js ES Module wrappers (a.k.a ESM)

Use [Chargebee.js](https://www.chargebee.com/checkout-portal-docs/) as an ES
module.

**Note**: To be
[PCI compliant](https://www.chargebee.com/security/pci/#chargebee-pci-compliance),
you must load Chargebee.js directly from `https://js.chargebee.com`. You cannot
include it in a bundle or host it yourself. This package wraps the global
`Chargebee` function provided by the Chargebee.js script as an ES module.

Calling the method `init` always loads and initializes the latest version of
Chargebee.js, regardless of which version of `@chargebee/chargebee-js` you use
and initializes it. Updates for this package only impact tooling around the
`init` helper itself and the TypeScript type definitions provided for
Chargebee.js. Updates do not affect runtime availability of features of
Chargebee.js.

## Getting Started

### Documentation 

- [Checkout User Docs](https://www.chargebee.com/docs/2.0/hosted-capabilities.html)
- [Chargebee.js Reference](https://www.chargebee.com/checkout-portal-docs/)
- [Chargebee.js Tutorials](https://www.chargebee.com/tutorials/)


## Installation

```sh
npm install @chargebee/chargebee-js
# or
yarn add @chargebee/chargebee-js
# or
pnpm install @chargebee/chargebee-js
```

## Usage

### `init`

This function returns a `Promise` that resolves with a newly created `Chargebee`
object once Chargebee.js has loaded. It will load Chargebee.js for you by
inserting the Chargebee.js script tag in the header. It takes the same
parameters passed when directly
[initializing a `Chargebee` instance](https://www.chargebee.com/checkout-portal-docs/api.html#chargebee-object).

> Note: If you call `init` in a server environment it will resolve to `null`.

```js
import * as Chargebee from '@chargebee/chargebee-js';

const chargebee = await Chargebee.init({ 
  site: 'acme',
  // Refer here https://www.chargebee.com/checkout-portal-docs/api.html#parameters for more about the parameters
});
```

Head over to [Chargebee JS reference docs](https://www.chargebee.com/checkout-portal-docs/api.html) to learn further more.

If you have enabled [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP) for you application,
make sure to [whitelist Chargebee.js in your directives](https://support.chargebee.com/support/solutions/articles/241740-content-security-policy-for-the-checkout-page).

### Lazy import

If you would like to use `init` in your application, but defer loading the Chargebee.js script until `init` is first called, use the alternative `@chargebee/chargebee-js/lazy` import path:

```js
import * as Chargebee from '@chargebee/chargebee-js/lazy';

const chargebee = await Chargebee.init({
  //...options
});
```

### Import as a side effect

Import `@chargebee/chargebee-js` as a side effect in code that will be included throughout your site (e.g. your root module). This will make sure the Chargebee.js script tag is inserted immediately upon page load.

```js
import '@chargebee/chargebee-js';
```

### Manually include the script tag

Manually add the Chargebee.js script tag to the `<head>` of each page on your site.
If an existing script tag is already present, this module will not insert a new
one. When you call `init`, it will use the existing script tag.

```html
<!-- In your site's <head> tag -->
<script src="https://js.chargebee.com/v2/chargebee.js" async></script>
```

## Typescript support

This package includes TypeScript declarations for Chargebee.js.

> Note: We may release new [minor and patch](https://semver.org/) versions of `@chargebee/chargebee-js` with small but backwards-incompatible fixes to the type declarations. These changes will not affect Chargebee.js itself.