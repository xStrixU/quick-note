import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { SubmitHandler, UseFormProps } from 'react-hook-form';
import type { Schema, TypeOf } from 'zod';

interface UseZodFormArgs<TSchema extends Schema>
	extends UseFormProps<TypeOf<TSchema>> {
	schema: TSchema;
	handler: SubmitHandler<TypeOf<TSchema>>;
}

export const useZodForm = <TSchema extends Schema>({
	schema,
	handler,
	...options
}: UseZodFormArgs<TSchema>) => {
	const { handleSubmit, ...rest } = useForm<TypeOf<TSchema>>({
		reValidateMode: 'onSubmit',
		resolver: zodResolver(schema),
		...options,
	});

	return {
		onSubmit: handleSubmit(handler),
		...rest,
	};
};
