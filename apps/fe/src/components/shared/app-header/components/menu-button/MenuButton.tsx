'use client';
import React, { RefObject, useEffect, useRef } from 'react';
import styles from './MenuButton.module.css';
import clsx from 'clsx';

type Props = {
	menuRef: RefObject<HTMLDivElement | null>;
	onClick: (status: boolean) => void;
	isOpen: boolean;
};

function MenuButton({ onClick, isOpen, menuRef }: Props) {
	const buttonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const clickOutSideButton = buttonRef.current && !buttonRef.current.contains(event.target as Node);
			const clickOutSideMenu = menuRef.current && !menuRef.current.contains(event.target as Node);

			if (clickOutSideButton && clickOutSideMenu) {
				onClick(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClick]);

	return (
		<div
			className={clsx(styles.container, { [styles.open]: isOpen }, 'flex lg:hidden')}
			onClick={() => onClick(!isOpen)}
			ref={buttonRef}
		>
			<div className={styles.line} />
			<div className={styles.line} />
			<div className={styles.line} />
		</div>
	);
}

export default MenuButton;
