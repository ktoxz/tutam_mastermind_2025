'use client';
import React from 'react';
import Carousel from '@/components/shared/casourel/Casourel';
import { useRefSize } from '@/hooks/ui/useRefSize';
import { Event } from '@packages/models';
import EventCard from '@/components/shared/card/event-card/EventCard';

interface EventGaleryProps {
	events: Event[];
	loading?: boolean;
	title?: string;
}

const EventGalery: React.FC<EventGaleryProps> = ({ events, loading = false, title = 'Sự kiện tạo ra giá trị' }) => {
	const [eventRef, size] = useRefSize();
	const itemWidth = size?.width && size.width > 0 ? size.width / 3.5 : 260;

	return (
		<Carousel
			itemWidth={itemWidth}
			autoScrollInterval={3000}
			title={title}
			showTitle={true}
			gap='gap-2 md:gap-4'
			pauseOnHover={true}
			enableManualScroll={true}
			isLoading={loading}
		>
			{events.map((event, index) => (
				<EventCard key={event._id} event={event} ref={index === 0 ? eventRef : undefined} />
			))}
		</Carousel>
	);
};

export default EventGalery;
