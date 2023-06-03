import type { RefObject } from 'react';

import 'client-only';

type MouseEvents = {
	[P in keyof WindowEventMap]: WindowEventMap[P] extends MouseEvent ? P : never;
}[keyof WindowEventMap];

type MouseEventHandler = (event: MouseEvent) => void;

export const createBindIframeMouseEventHandlers = (
	iframeRef: RefObject<HTMLIFrameElement | null>,
	eventTypes: MouseEvents[]
) => {
	const eventHandlers = eventTypes.reduce((accumulator, eventType) => {
		const handleMouseEvent: MouseEventHandler = event => {
			const iframe = iframeRef.current;

			if (!iframe) return;

			const boundingClientRect = iframe.getBoundingClientRect();
			const mouseMoveEvent = new MouseEvent(eventType, {
				bubbles: true,
				cancelable: false,
				clientX: event.clientX + boundingClientRect.left,
				clientY: event.clientY + boundingClientRect.top,
			});

			iframe.dispatchEvent(mouseMoveEvent);
		};

		return { ...accumulator, [eventType]: handleMouseEvent };
	}, {} as Record<MouseEvents, MouseEventHandler>);

	const addMouseEventHandlers = () => {
		eventTypes.forEach(eventType => {
			iframeRef.current?.contentWindow?.addEventListener(
				eventType,
				eventHandlers[eventType]
			);
		});
	};

	const removeMouseEventHandlers = () => {
		eventTypes.forEach(eventType => {
			iframeRef.current?.contentWindow?.removeEventListener(
				eventType,
				eventHandlers[eventType]
			);
		});
	};

	return { addMouseEventHandlers, removeMouseEventHandlers };
};
