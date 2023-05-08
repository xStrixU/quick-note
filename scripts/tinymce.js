const fs = require('node:fs');
const path = require('node:path');
const fse = require('fs-extra');

const rootDir = path.join(__dirname, '..');

fse.emptyDirSync(path.join(rootDir, 'public', 'tinymce'));
fse.copySync(
	fs.realpathSync(path.join(rootDir, 'node_modules', 'tinymce')),
	path.join(rootDir, 'public', 'tinymce'),
	{ overwrite: true }
);
