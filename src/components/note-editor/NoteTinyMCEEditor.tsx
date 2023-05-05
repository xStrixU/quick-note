'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useCallback, useEffect, useRef } from 'react';

import { useUpdateNoteById } from '@/hooks/notes/useUpdateNoteById';

import type { Editor as TinyMCEEditor } from 'tinymce';

import type { NoteDetails } from '@/server/modules/notes/notes.schemas';

type NoteTinyMCEEditorProps = Readonly<{
	note: NoteDetails;
}>;

export const NoteTinyMCEEditor = ({ note }: NoteTinyMCEEditorProps) => {
	const editorRef = useRef<TinyMCEEditor | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const updateNoteById = useUpdateNoteById();

	const saveNote = useCallback(() => {
		const editor = editorRef?.current;

		if (editor) {
			const content = editor.save();

			updateNoteById({ id: note.id, data: { content } });
		}
	}, [note.id, updateNoteById]);

	const handleEditorChange = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(saveNote, 500);
	};

	useEffect(() => {
		window.addEventListener('beforeunload', saveNote);

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			window.removeEventListener('beforeunload', saveNote);
		};
	}, [saveNote]);

	return (
		<>
			<Editor
				onInit={(_evt, editor) => (editorRef.current = editor)}
				initialValue={note.content}
				tinymceScriptSrc="/scripts/tinymce.min.js"
				init={{
					height: '100%',
					menubar: false,
					resize: false,
					placeholder: 'Write something here...',
					toolbar_location: 'bottom',
					plugins:
						'lists advlist autolink charmap codesample emoticons image link media searchreplace table visualblocks visualchars wordcount',
					toolbar:
						'undo redo | styles | emoticons charmap codesample | numlist bullist | link image media | table tabledelete | searchreplace visualblocks visualchars',
				}}
				onEditorChange={handleEditorChange}
			/>
		</>
	);
};
