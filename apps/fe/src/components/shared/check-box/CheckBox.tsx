'use client';
import React from 'react';

type CheckBoxProps = {
	label?: string;
	id: string;
	name: string;
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	required?: boolean;
	disabled?: boolean;
	error?: string;
	className?: string;
};

function CheckBox({
	label,
	id,
	name,
	checked = false,
	onChange,
	required = false,
	disabled = false,
	error,
	className = '',
}: CheckBoxProps) {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.checked);
	};

	return (
		<div className={`flex flex-col gap-1 w-full ${className}`}>
			<label
				htmlFor={id}
				className={`flex items-center gap-2 select-none transition-colors ${
					disabled
						? 'opacity-50 cursor-not-allowed'
						: 'cursor-pointer hover:bg-[var(--color-primary-lightest)] rounded px-1'
				}`}
			>
				<input
					id={id}
					name={name}
					type='checkbox'
					checked={checked}
					onChange={handleChange}
					required={required}
					disabled={disabled}
					className={`
                        accent-[var(--color-primary)]
                        w-5 h-5
                        border-2
                        rounded
                        transition
                        duration-150
                        ${error ? 'border-[var(--color-error)]' : 'border-[var(--color-primary)]'}
                        outline-none
                        shadow-sm
                    `}
				/>
				{label && (
					<span
						className={`tracking-wide text-base transition-colors ${
							error
								? 'text-[var(--color-error)]'
								: disabled
								? 'text-[var(--color-text-disabled)]'
								: 'text-[var(--color-text-secondary)]'
						}`}
					>
						{label}
					</span>
				)}
			</label>
			{error && <span className='mt-1 text-sm text-[var(--color-error)] font-light'>{error}</span>}
		</div>
	);
}

export default CheckBox;
