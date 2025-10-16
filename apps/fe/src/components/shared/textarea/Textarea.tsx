'use client';
import React, { useEffect, useState } from 'react';

type TextareaProps = {
	label?: string;
	id: string;
	name: string;
	required?: boolean;
	placeholder?: string;
	autoComplete?: string;
	value?: string;
	onChange?: (...args: any[]) => any;
	error?: string;
	rows?: number;
};

function Textarea({ label, id, name, required = false, placeholder, autoComplete, value, onChange, error, rows = 4 }: TextareaProps) {
	const [internalError, setInternalError] = useState<string | undefined>(error);

	useEffect(() => {
		setInternalError(error);
	}, [error]);

	const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className='flex flex-col gap-1 w-full'>
			{label && (
				<label htmlFor={id} className={`font-medium tracking-wide ${internalError ? 'text-[var(--color-error)]' : 'text-[var(--color-text-secondary)]'}`}>
					{label}
				</label>
			)}
			<div className={`relative flex flex-row items-center border rounded px-3 py-2 ${internalError ? 'border-[var(--color-error)]' : 'border-[var(--color-primary)]'}`}>
				<textarea
					id={id}
					name={name}
					required={required}
					placeholder={placeholder}
					autoComplete={autoComplete}
					value={value}
					onChange={handleOnChange}
					rows={rows}
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
                        resize-none
                        bg-transparent
                    `}
				/>
			</div>
			{internalError && <span className='mt-1 text-sm text-[var(--color-error)] font-light'>{internalError}</span>}
		</div>
	);
}

export default Textarea;
