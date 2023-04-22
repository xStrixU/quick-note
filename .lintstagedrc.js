module.exports = {
	'*.{ts,tsx}': [() => 'pnpm lint:fix'],
	'*.{js,json,css}': ['pnpm prettier -w'],
};
