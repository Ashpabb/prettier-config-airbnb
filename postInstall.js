const saveFile = require('fs').writeFileSync;

const pkgJsonPath = require.main.paths[0].split('node_modules')[0] + 'package.json';

const json = require(pkgJsonPath);

json.prettier = 'prettier-config-airbnb';

saveFile(pkgJsonPath, JSON.stringify(json, null, 2));
