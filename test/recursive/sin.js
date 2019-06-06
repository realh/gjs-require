print(__filename);
const random = require('../ran/dom');
print('Imported random: ' + random);
exports.rand_sin = () => { return Math.sin(random); };
