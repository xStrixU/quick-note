import { describe, expect, it } from 'vitest';

import { getInitials, minifyHTML } from './utils';

describe('utils', () => {
	describe('getInitials', () => {
		it.each([
			{ fullName: 'Foo', initials: 'F' },
			{ fullName: 'Foo bar', initials: 'Fb' },
			{ fullName: 'Foo bar Baz', initials: 'FbB' },
			{ fullName: 'Lorem Ipsum', initials: 'LI' },
			{ fullName: 'lorem Ipsum', initials: 'lI' },
		])('getInitials($fullName) returns $initials', ({ fullName, initials }) => {
			expect(getInitials(fullName)).toBe(initials);
		});
	});

	describe('minifyHTML', () => {
		it('should minify HTML', () => {
			const html = `
				<!DOCTYPE html>
				<html>
					<head>
						<title>Minify HTML</title>
					</head>
					<body>
						<h1>Minify HTML</h1>
						<p>This code minifies HTML</p>
					</body>
				</html>
			`;
			const minifiedHTML =
				'<!DOCTYPE html><html><head><title>Minify HTML</title></head><body><h1>Minify HTML</h1><p>This code minifies HTML</p></body></html>';

			expect(minifyHTML(html)).toBe(minifiedHTML);
		});
	});
});
