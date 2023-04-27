import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { SubmitHandler, UseFormProps } from 'react-hook-form';
import type { Schema, TypeOf } from 'zod';

export const useZodForm = <
	TSchema extends Schema,
	T extends UseFormProps<TypeOf<TSchema>> | SubmitHandler<TypeOf<TSchema>>
>(
	schema: TSchema,
	...args: T extends SubmitHandler<TypeOf<TSchema>>
		? [T]
		: [T, SubmitHandler<TypeOf<TSchema>>]
) => {
	const props = typeof args[0] === 'object' ? args[0] : {};
	const submitHandler = typeof args[0] !== 'object' ? args[0] : args[1];
	const defaultSubmitHandler = () => {
		throw new Error('Default submit handler');
	};

	const { handleSubmit, ...rest } = useForm<TypeOf<TSchema>>({
		reValidateMode: 'onSubmit',
		resolver: zodResolver(schema),
		...props,
	});

	return {
		onSubmit: handleSubmit(submitHandler ?? defaultSubmitHandler),
		...rest,
	};
};
