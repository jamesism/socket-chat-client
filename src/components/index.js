const dirs = require.context(".", true, /^\.\/(\w*)\/\1.js$/g);

const mods = dirs.keys()
	.map(k => [k, k.match(/([^\/]+)(?=\.\w+$)/g)[0]])
	.map(([path, name]) => [name, dirs(path)]);

const getCommonExport = (mods, key, asObj) =>
	mods.map(([name, mod]) => [name, mod[key]])
	.filter(([name, exp]) => !!exp)
	.reduce((p, [name, exp]) => {
		if (asObj) p[name] = exp;
		else p.push(exp);
		return p;
	});

module.exports.routes = getCommonExport(mods, 'routes');
module.exports.reducers = getCommonExport(mods, 'reducer');
module.exports.containers = getCommonExport(mods, 'default', true);
