import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export const GoBack = () => (
	<Link
		href="/"
		aria-label="Go back"
		className="text-foreground desktop:hidden"
	>
		<IoIosArrowBack size={26} />
	</Link>
);
