import { useEffect, useState } from 'react';

import { createSafeContext } from '@/lib/createSafeContext';

import type { ReactNode } from 'react';

const themes = ['light', 'dark'] as const;

const LOCAL_STORAGE_KEY = 'theme';

type Theme = (typeof themes)[number];

interface ThemeContextValue {
	theme: Theme;
	changeTheme: (theme: Theme) => void;
}

const [useThemeContext, ThemeContextProvider] =
	createSafeContext<ThemeContextValue>();

const isTheme = (theme: unknown): theme is Theme =>
	typeof theme === 'string' && themes.includes(theme);

const getCurrentTheme = (): Theme => {
	const theme = window.localStorage.getItem(LOCAL_STORAGE_KEY);

	if (isTheme(theme)) {
		return theme;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
};

const ThemeProvider = ({ children }: { readonly children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light');

	const changeTheme = (theme: Theme) => {
		const target = document.querySelector('html');

		if (theme === 'dark') {
			target?.classList.add('dark');
		} else {
			target?.classList.remove('dark');
		}

		window.localStorage.setItem(LOCAL_STORAGE_KEY, theme);

		setTheme(theme);
	};

	useEffect(() => {
		const handleStorage = (e: StorageEvent) => {
			if (e.key !== LOCAL_STORAGE_KEY) return;

			const theme = e.newValue;

			if (isTheme(theme)) {
				changeTheme(theme);
			}
		};

		window.addEventListener('storage', handleStorage);

		return () => window.removeEventListener('storage', handleStorage);
	}, []);

	useEffect(() => {
		const currentTheme = getCurrentTheme();

		changeTheme(currentTheme);
	}, []);

	return (
		<ThemeContextProvider
			value={{
				theme,
				changeTheme,
			}}
		>
			{children}
		</ThemeContextProvider>
	);
};

export { ThemeProvider, useThemeContext };
