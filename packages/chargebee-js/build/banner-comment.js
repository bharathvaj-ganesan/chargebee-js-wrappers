const pkg = require('../package.json');
const year = new Date().getFullYear();

module.exports = (exportType) => `/*
* Chargbee.js ${exportType} ${pkg.version}
*
* @link ${pkg.homepage}
* @copyright (c) ${year} Chargebee
* @license ${pkg.license}
*/
`;;