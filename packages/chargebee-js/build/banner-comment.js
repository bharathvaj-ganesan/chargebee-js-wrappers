const pkg = require('../package.json');
const year = new Date().getFullYear();

module.exports = (exportType) => `/*
* Chargebee.js ${exportType} ${pkg.version}
*
* @link ${pkg.homepage}
* @copyright (c) 2011-${year} Chargebee, Inc.
* @license ${pkg.license}
*/
`;;