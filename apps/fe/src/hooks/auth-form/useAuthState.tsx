import { useMemo, useState } from 'react';
import { AuthFormField } from '@/components/shared/auth-form/AuthForm';
import { ZodValidator } from '@/utils/zod-validator.util';
import { useEffect } from 'react';

export function useAuthState(fields: AuthFormField[]) {
	const mappedFields = useMemo(
		() =>
			fields.reduce((acc, field) => {
				acc[field.name] = field;
				return acc;
			}, {} as Record<string, AuthFormField>),
		[fields]
	);

	const initialState = useMemo(
		() =>
			fields.reduce((acc, field) => {
				acc[field.name] = { value: field.defaultValue || '', error: '' };
				return acc;
			}, {} as Record<string, { value: string; error: string }>),
		[fields]
	);

	const [state, setState] = useState<Record<string, { value: string; error: string }>>(initialState);
	const [submitable, setSubmitable] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	const validateAllFields = (currentState: Record<string, { value: string; error: string }>) => {
		let isValid = true;
		const newState = { ...currentState };

		for (const field of fields) {
			if (field?.zodSchema) {
				const [error] = ZodValidator.parse(field.zodSchema, currentState[field.name].value);
				if (error) {
					isValid = false;
					newState[field.name] = {
						...currentState[field.name],
						error: ZodValidator.getErrorMessage(error, 0) || '',
					};
				}
			}
		}

		return { isValid, newState };
	};

	const handleChange = (name: string, value: string) => {
		setState((prev) => {
			const updatedState = {
				...prev,
				[name]: {
					value,
					error: '',
				},
			};

			const field = mappedFields[name];
			if (field?.zodSchema) {
				const [parseError] = ZodValidator.parse(field.zodSchema, value);
				if (parseError) {
					updatedState[name].error = ZodValidator.getErrorMessage(parseError, 0) || '';
				}
			}

			const { isValid } = validateAllFields(updatedState);
			setSubmitable(isValid);

			return updatedState;
		});
	};

	const validateForm = () => {
		const { isValid, newState } = validateAllFields(state);
		setState(newState);
		setSubmitable(isValid);
		return isValid;
	};

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>,
		onSubmit?: (values: Record<string, string>) => Promise<any>
	) => {
		e.preventDefault();
		if (validateForm()) {
			const values = Object.keys(state).reduce((acc, key) => {
				acc[key] = state[key].value;
				return acc;
			}, {} as Record<string, string>);

			setSubmitting(true);
			onSubmit?.(values).finally(() => {
				setSubmitting(false);
			});
		}
	};

	useEffect(() => {
		const { isValid } = validateAllFields(state);
		setSubmitable(isValid);
	}, []);

	return {
		state,
		handleChange,
		handleSubmit,
		submitable,
		submitting,
	};
}
