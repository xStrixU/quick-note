const MINIFY_HTML_REGEX = /\n|\t/g;

export const getInitials = (fullName: string) =>
	fullName
		.split(' ')
		.map(name => name[0])
		.join('');

export const minifyHTML = (html: string) => html.replace(MINIFY_HTML_REGEX, '');
