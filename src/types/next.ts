export type Params<T extends string> = {
	readonly [K in T]: string;
};

export type CatchAllParams<T extends string> = {
	readonly [K in T]: string[];
};

export type OptionalCatchAllParams<T extends string> = {
	readonly [K in T]?: string[];
};

export type QueryParam = string | readonly string[] | undefined;

export type SearchParams<T extends string> = {
	readonly [K in T]?: QueryParam;
};
