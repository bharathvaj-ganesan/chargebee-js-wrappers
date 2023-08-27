/**
 * This is for consumer to use `import * as Chargebee from '@chargebee/chargebee-js/lazy'`
 * else they might to import like '@chargebee/chargebee-js/dist/lazy'.
 * A simple DevX.
 */
module.exports = require('./dist/lazy.js');