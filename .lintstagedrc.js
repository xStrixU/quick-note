module.exports = {
	'*.{ts,tsx}': [() => 'pnpm next:lint:fix'],
	'*.{js,json,css}': ['pnpm prettier -w'],
};
