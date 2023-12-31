# Chargebee.js [UNOFFICIAL]

Chargebee provides the following web client SDKs to enable seamless integrations with popular JS frameworks like Vue, React, Angular and much more. We also provide pre-built UI [Components & Fields](https://www.chargebee.com/checkout-portal-docs/components-fields.html) that you can use, to create a payment form that lets you securely collect a customer’s card details without handling the sensitive data.

### ES Module

This package is a very thin wrapper around [Chargebee.js](https://www.chargebee.com/checkout-portal-docs/) providing first class ESM support for modern frameworks and native [javascript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

  * [ES Module](https://github.com/bharathvaj-ganesan/chargebee-js-wrappers/tree/master/packages/chargebee-js#readme)

### Components & Fields

This package is a thin wrapper around [Chargebee's Components & Fields](https://www.chargebee.com/checkout-portal-docs/components-fields.html). This allows you to add fields to any of the supported frameworks natively.

  * [Angular](https://github.com/bharathvaj-ganesan/chargebee-js-wrappers/tree/master/packages/chargebee-js-angular#readme)
  * [React](https://github.com/bharathvaj-ganesan/chargebee-js-wrappers/tree/master/packages/chargebee-js-react#readme)
  * [Vue](https://github.com/bharathvaj-ganesan/chargebee-js-wrappers/tree/master/packages/chargebee-js-vue#readme)


## Getting Started

This is a mono repository, please open the respective package module using the above links to get started with them.

This repo is powered by smart [pnpm workspaces](https://pnpm.io/workspaces) and fast build system [nx](https://nx.dev/).

```bash

# Install
pnpm i

# To run in dev
npx nx run-many --target=dev --all

# To Build all
npx nx run-many --target=build --all

# To Build in specific target
npx nx build @chargebee/chargebee-js

# To run test in specific target
npx nx test @chargebee/chargebee-js
```

### Documentation

- [Chargebee.js Docs](https://www.chargebee.com/checkout-portal-docs/)
- [Chargebee.js Tutorials](https://www.chargebee.com/tutorials/)
- [Chargebee Components & Fields - JS Docs](https://chargebee.com/checkout-portal-docs/components-fields-integrations.html#quick-start-integration)


## Support
Have any queries regarding the implementation? Reach out to [support@chargebee.com](mailto:support@chargebee.com)
