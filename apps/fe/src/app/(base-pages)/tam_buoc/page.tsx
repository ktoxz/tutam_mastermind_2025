'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Event } from '@packages/models';
import { EventService } from '@/services/api/event/event.service';
import AppSection from '@/components/shared/app-section/AppSection';
import InlineLoading from '@/components/shared/inline-loading/InlineLoading';
import EventGalery from '@/components/shared/galery/event-galery/EventGalery';
import PageHeader from '@/components/shared/page-header/PageHeader';

function TamBuocPage() {
	const [events, setEvents] = useState<Event[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchAllData = useCallback(async () => {
		setLoading(true);
		const [, eventData] = await EventService.getInstance().getList();
		setEvents(eventData || []);
		setLoading(false);
	}, []);

	useEffect(() => {
		fetchAllData();
	}, [fetchAllData]);

	return (
		<>
			<PageHeader
				title='Tâm Bước'
				description='Nơi lưu giữ những khoảnh khắc đặc biệt và tạo không gian kết nối cộng đồng. Cùng nhau chia sẻ, học hỏi và phát triển qua các sự kiện ý nghĩa.'
			/>

			{loading ? (
				<InlineLoading title='Đang tải sự kiện...' />
			) : (
				<>
					{events.length > 0 && <EventGalery events={events} loading={loading} />}
					{!loading && events.length === 0 && (
						<AppSection>
							<div className='text-center py-12'>
								<div className='text-6xl mb-4'>🌸</div>
								<p className='text-[--color-text-secondary] text-lg mb-2'>
									Hiện tại chưa có sự kiện nào.
								</p>
								<p className='text-[--color-text-tertiary] text-sm'>
									Hãy quay lại sau để khám phá những trải nghiệm mới nhé!
								</p>
							</div>
						</AppSection>
					)}
				</>
			)}

			{/* Future: Virtual Tree Section */}
			<AppSection>
				<div className='bg-white rounded-lg shadow-md p-6 mt-12'>
					<div className='text-center'>
						<h2 className='text-2xl md:text-3xl font-bold text-[--color-primary-dark] mb-4'>
							🌳 Cây Ước Nguyện
						</h2>
						<p className='text-[--color-text-secondary] mb-6'>
							Tính năng đặc biệt đang được phát triển. Sẽ sớm có thể viết lời chúc và treo lên cây ảo cùng
							cộng đồng!
						</p>
						<div className='text-8xl opacity-30 mb-4'>🌳</div>
						<p className='text-sm text-[--color-text-tertiary]'>
							Cây sẽ lớn dần theo từng lời chúc của mọi người...
						</p>
					</div>
				</div>
			</AppSection>
		</>
	);
}

export default TamBuocPage;
