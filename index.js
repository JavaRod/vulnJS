const _ = require('lodash');

// Example of merging user-provided input (potentially malicious)
let safeObject = {};
let maliciousPayload = JSON.parse('{"__proto__": {"polluted": "yes"}}');

_.merge(safeObject, maliciousPayload);

console.log({}.polluted); // If vulnerable, this will output 'yes'
