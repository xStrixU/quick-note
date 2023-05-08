import type { ReactNode } from 'react';

const NotePreviewLayout = ({ children }: { readonly children: ReactNode }) => (
	<main className="h-full p-2">{children}</main>
);

export default NotePreviewLayout;
