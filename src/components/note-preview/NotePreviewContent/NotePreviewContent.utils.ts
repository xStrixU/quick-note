import { minifyHTML } from '@/lib/utils';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

export const createNotePreviewIFrameSrcDoc = (
	note: NoteDetails,
	isDark: boolean
) => {
	const variant = isDark ? 'dark' : 'default';

	return minifyHTML(`
	<!DOCTYPE html>
	<html>
		<head>
			<link rel="stylesheet" href="/tinymce/skins/content/${variant}/content.min.css">
		</head>
		<body class="mce-content-body">
			${note.content}
		</body>
	</html>
`);
};
