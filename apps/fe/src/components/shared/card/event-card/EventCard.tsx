'use client';
import React from 'react';
import Link from 'next/link';
import { BASIC_ROUTES } from '@/consts/routes';
import { Event } from '@models';

interface EventCardProps {
	event: Event;
	ref?: React.RefObject<HTMLAnchorElement>;
}

const EventCard: React.FC<EventCardProps> = ({ event, ref }) => {
	return (
		<Link
			href={`${BASIC_ROUTES.tam_buoc.children?.su_kien.full(event.slug) || ''}`}
			className='bg-white
                rounded-md overflow-hidden shadow-md transition-all duration-300
                min-w-[180px] max-w-[180px] md:min-w-[260px] md:max-w-[260px] flex flex-col cursor-pointer border border-transparent
                hover:shadow-lg hover:border-[--color-primary-light]'
			ref={ref}
		>
			<div className='relative aspect-square w-full group overflow-hidden bg-gray-400 flex'>
				<img src={event.mainImage} alt={event.title} className='relative object-cover w-full h-full transition-transform duration-300' />
				<div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
			</div>
			<div className='flex flex-col justify-between p-3 flex-1'>
				<h3 className='text-sm font-bold mb-2 text-gray-900 line-clamp-2'>{event.title}</h3>
				<p className='text-xs text-gray-700 line-clamp-2'>{event.summary}</p>
			</div>
		</Link>
	);
};

export default EventCard;
