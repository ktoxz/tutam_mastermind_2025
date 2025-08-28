'use client';
import React, { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';

type InputFieldProps = {
	label?: string;
	id: string;
	name: string;
	type?: string;
	required?: boolean;
	placeholder?: string;
	autoComplete?: string;
	value?: string;
	onChange?: (...args: any[]) => any;
	error?: string;
	icon?: LucideIcon;
};

function InputField({
	label,
	id,
	name,
	type = 'text',
	required = false,
	placeholder,
	autoComplete,
	value,
	onChange,
	error,
	icon: IconComponent,
}: InputFieldProps) {
	const [internalError, setInternalError] = useState<string | undefined>(error);

	useEffect(() => {
		setInternalError(error);
	}, [error]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className='flex flex-col gap-1 w-full'>
			{label && (
				<label
					htmlFor={id}
					className={`font-medium tracking-wide ${
						internalError ? 'text-[var(--color-error)]' : 'text-[var(--color-text-secondary)]'
					}`}
				>
					{label}
				</label>
			)}
			<div
				className={`relative flex flex-row items-center gap-2 border rounded px-3 py-2 ${
					internalError ? 'border-[var(--color-error)]' : 'border-[var(--color-primary)]'
				}`}
			>
				{IconComponent && (
					<IconComponent
						size={20}
						className={internalError ? 'text-[var(--color-error)]' : 'text-[var(--color-text-tertiary)]'}
					/>
				)}

				<input
					id={id}
					name={name}
					type={type}
					required={required}
					placeholder={placeholder}
					autoComplete={autoComplete}
					value={value}
					onChange={handleOnChange}
					className={`
						text-[var(--color-text-body)]
						font-normal
						transition
						placeholder:text-[var(--color-text-tertiary)]
						disabled:bg-[var(--color-surface)]
						disabled:text-[var(--color-text-disabled)]
						w-full
						border-none
						outline-none
					`}
				/>
			</div>

			{internalError && (
				<span className='mt-1 text-sm text-[var(--color-error)] font-light'>{internalError}</span>
			)}
		</div>
	);
}

export default InputField;
