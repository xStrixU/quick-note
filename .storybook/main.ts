/* eslint-disable @typescript-eslint/ban-ts-comment */

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: config => {
		// TODO: remove ts-ignores

		const fileLoaderRule = config.module?.rules?.find(rule =>
			// @ts-ignore
			rule?.test?.test('.svg')
		);

		if (fileLoaderRule) {
			// @ts-ignore
			fileLoaderRule.exclude = /\.svg$/;
		}

		config.module?.rules?.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		if (config.resolve) {
			config.resolve.plugins = [new TsconfigPathsPlugin()];
		}

		return config;
	},
};

export default config;
