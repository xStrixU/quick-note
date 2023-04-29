import { useEffect, useState } from 'react';

import type { RefObject } from 'react';

type SidebarResizerProps = Readonly<{
	sidebarRef: RefObject<HTMLElement>;
	minWidth: number;
	maxWidth: number;
	updateWidth: (width: number) => void;
}>;

export const SidebarResizer = ({
	sidebarRef,
	minWidth,
	maxWidth,
	updateWidth,
}: SidebarResizerProps) => {
	const [isTracking, setIsTracking] = useState(false);

	useEffect(() => {
		const handleMouseUp = () => {
			setIsTracking(false);
		};

		const handleMouseMove = (event: MouseEvent) => {
			if (!isTracking || !sidebarRef.current) return;

			const newWidth =
				event.clientX - sidebarRef.current.getBoundingClientRect().left;

			updateWidth(Math.max(minWidth, Math.min(newWidth, maxWidth)));
		};

		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});

	return (
		<div
			onMouseDown={() => setIsTracking(true)}
			className="absolute right-0 top-0 hidden h-full w-1.5 cursor-col-resize select-none active:cursor-auto desktop:block"
		/>
	);
};
