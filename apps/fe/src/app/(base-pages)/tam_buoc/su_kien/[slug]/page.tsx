'use client';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { EventService } from '@/services/api/event/event.service';
import { Event } from '@models';
import AppSection from '@/components/shared/app-section/AppSection';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import { useParams } from 'next/navigation';

function Page() {
	const { slug }: { slug: string } = useParams();
	const [event, setEvent] = useState<Event | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEvent = async () => {
			const [err, data] = await EventService.getInstance().getBySlug(slug);
			if (err) {
				setError('Failed to load event');
			} else {
				setEvent(data || null);
			}
			setLoading(false);
		};
		fetchEvent();
	}, [slug]);

	if (loading) return <InlineLoading title='Loading event...' />;
	if (error)
		return (
			<AppSection>
				<div className='text-red-500'>{error}</div>
			</AppSection>
		);
	if (!event)
		return (
			<AppSection>
				<div>Event not found</div>
			</AppSection>
		);

	return (
		<AppSection className='mt-10'>
			<div className='mx-auto flex flex-col-reverse md:flex-row gap-2 md:gap-6'>
				<div className='w-full md:flex-7 bg-white rounded-lg p-6'>
					<h1 className='text-2xl md:text-3xl font-bold mb-2'>{event.title}</h1>
					<p className='text-md md:text-lg mb-4'>
						- {event.location} - {new Date(event.time).toLocaleDateString()}
					</p>
					<div className='markdown'>
						<ReactMarkdown>{event.content}</ReactMarkdown>
					</div>
					{event.gallery && event.gallery.length > 0 && (
						<div className='mt-6'>
							<h2 className='text-xl font-semibold mb-4'>Gallery</h2>
							<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
								{event.gallery.map((img, index) => (
									<img key={index} src={img} alt={`Gallery ${index + 1}`} className='w-full h-32 object-cover rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300' />
								))}
							</div>
						</div>
					)}
				</div>
				<div className='w-full md:flex-3 bg-white rounded-lg p-6'>
					<div className='relative aspect-[3/2] max-h-[420px] m-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
						<img src={event.mainImage} alt={event.title} className='w-full h-full object-cover' />
					</div>
					<div className='mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded text-justify'>
						<p className='text-sm'>{event.summary}</p>
					</div>
					{event.members && event.members.length > 0 && (
						<div className='mt-4'>
							<h3 className='text-lg font-semibold mb-2'>Members</h3>
							<ul className='list-disc list-inside text-sm'>
								{event.members.map((member, index) => (
									<li key={index}>{member}</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</AppSection>
	);
}

export default Page;
