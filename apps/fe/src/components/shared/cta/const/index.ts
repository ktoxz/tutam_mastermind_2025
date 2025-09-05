export type CTAVariant = 'primary' | 'secondary' | 'dangerous';
export type CTAStatus = 'normal' | 'disabled' | 'loading';

export const variantClasses: Record<CTAVariant, string> = {
	primary: 'bg-[var(--color-primary)] border border-transparent text-[var(--color-text-inverse)]',
	secondary: 'bg-white/40 border border-gray-300 text-[var(--color-text-inverse)] hover:bg-white/30',
	dangerous: 'bg-red-600 border border-red-700 text-white hover:bg-red-700',
};

export const baseClasses =
	'relative flex flex-row items-center justify-center gap-2 font-medium px-2 py-2 rounded-sm cursor-pointer text-center block ' +
	'transition-all duration-200 ease-in-out ' +
	'hover:scale-101 hover:shadow-lg active:scale-99 active:shadow ' +
	'whitespace-nowrap ' +
	'active:brightness-95';

export const disabledClasses = 'opacity-40 pointer-events-none cursor-not-allowed';
