const _ = require('lodash');

const items = [1, [2, 4, 5, [8, 9, [2929, [233]]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);