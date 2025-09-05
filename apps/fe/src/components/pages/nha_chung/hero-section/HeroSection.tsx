'use client';
import React, { useState, useEffect, useRef } from 'react';
import LinkCTA from '@/components/shared/cta/LinkCTA';
import AppSection from '@/components/shared/app-section/AppSection';
import useSwipe from '@/hooks/ui/useSwip';
import NavigationArrows from './components/NavigationArrows';
import SlideIndicators from './components/SlideIndicators';
import { BASIC_ROUTES } from '@/consts/routes';

const heroContent = [
	{
		id: 'slide-1',
		title: 'Thấu Hiểu Lòng Mình Qua Sách & Cảm Xúc',
		subtitle: 'Khám phá hành trình tìm lại sự bình yên và yêu thương bản thân',
		description:
			'Cuộc sống không phải lúc nào cũng êm đềm, và đôi khi, điều chúng ta cần chỉ là một không gian để lắng nghe chính mình. Sách và cảm xúc chính là hai cánh cửa dẫn bạn đến hành trình thấu hiểu, yêu thương và sống trọn vẹn hơn. Hãy cùng chúng tôi bắt đầu hành trình này nhé!',
		ctaText: 'Bắt đầu hành trình',
		ctaHref: BASIC_ROUTES.cham.href,
		image: 'https://th.bing.com/th/id/R.28817c9afc7c6b05636196ae5edb91cd?rik=njAWBO%2bdpo%2fgdg&pid=ImgRaw&r=0',
	},
	{
		id: 'slide-2',
		title: 'Sách - Cẩm Nang Dẫn Lối Đến Bình An',
		subtitle: 'Những cuốn sách giúp bạn kết nối với nội tâm và sống an nhiên',
		description:
			'Trong thế giới đầy biến động, những trang sách chính là điểm tựa vững chãi. Hãy để sách làm người bạn đồng hành, giúp bạn vượt qua những khó khăn, tìm thấy sự an nhiên và xây dựng một nội tâm mạnh mẽ, tràn đầy năng lượng tích cực.',
		ctaText: 'Khám phá ngay',
		ctaHref: BASIC_ROUTES.cham.href,
		image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
	},
	{
		id: 'slide-3',
		title: 'Lắng Nghe - Chìa Khóa Mở Cánh Cửa Lòng',
		subtitle: 'Học cách nhận diện và làm chủ cảm xúc của bạn',
		description:
			'Cảm xúc không phải là điều cần che giấu, mà là tín hiệu để bạn hiểu rõ hơn về bản thân. Thực hành lắng nghe cảm xúc mỗi ngày không chỉ giúp bạn giảm bớt căng thẳng, mà còn xây dựng nền tảng vững chắc cho một cuộc sống cân bằng và hạnh phúc.',
		ctaText: 'Khám phá cảm xúc',
		ctaHref: BASIC_ROUTES.cham.href,
		secondaryText: 'Đọc sách & blog',
		secondaryHref: BASIC_ROUTES.dieu_ky.href,
		image: 'https://cdn.pixabay.com/photo/2024/02/06/15/25/dark-green-8557261_960_720.jpg',
	},
];

function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const intervalRef = useRef<number | null>(null);

	const clearSlideInterval = () => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
		}
	};

	const startSlideInterval = () => {
		clearSlideInterval();
		intervalRef.current = window.setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroContent.length);
		}, 7000);
	};

	useEffect(() => {
		startSlideInterval();
		return clearSlideInterval;
	}, []);

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
		startSlideInterval();
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + heroContent.length) % heroContent.length);
		startSlideInterval();
	};

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % heroContent.length);
		startSlideInterval();
	};

	const handleSwipe = (direction: 'left' | 'right' | 'up' | 'down') => {
		setCurrentSlide((prev) => {
			const next =
				direction === 'left'
					? (prev + 1) % heroContent.length
					: (prev - 1 + heroContent.length) % heroContent.length;
			return next;
		});
		startSlideInterval();
	};

	const swipeHandlers = useSwipe(handleSwipe, { minSwipeDistance: 70 });
	const slide = heroContent[currentSlide];

	return (
		<AppSection disableAppearAnimation>
			<div
				className='relative w-full max-w-7xl mx-auto h-96 md:h-[360px] rounded-xl overflow-hidden shadow-1xl group'
				{...swipeHandlers}
			>
				{/* Background Image */}
				<div
					className='absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out'
					style={{ backgroundImage: `url(${slide.image})` }}
				>
					<div className='absolute inset-0 bg-black/20' />
				</div>

				{/* Content Overlay */}
				<div className='relative z-10 h-full flex items-center'>
					<div className='w-full h-full px-6 md:px-12 py-4 overflow-hidden flex flex-row items-center justify-center'>
						<div className='w-full h-full flex flex-col justify-center'>
							<div>
								<h1 className='text-2xl md:text-5xl font-bold mb-2 md:mb-4 leading-tight line-clamp-2 md:line-clamp-3 text-white'>
									{slide.title}
								</h1>
								<p className='text-base md:text-xl mb-2 md:mb-4 line-clamp-2 text-white'>
									{slide.subtitle}
								</p>
								<p className='text-sm md:text-lg mb-6 md:mb-8 leading-relaxed line-clamp-3 text-white'>
									{slide.description}
								</p>
							</div>

							{/* CTA Buttons */}
							<div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
								{slide.ctaHref && slide.ctaText ? (
									<LinkCTA href={slide.ctaHref} variant='primary'>
										{slide.ctaText}
									</LinkCTA>
								) : null}
								{slide.secondaryHref && slide.secondaryText ? (
									<LinkCTA href={slide.secondaryHref} variant='secondary'>
										{slide.secondaryText}
									</LinkCTA>
								) : null}
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Arrows */}
				<NavigationArrows onPrev={prevSlide} onNext={nextSlide} />

				{/* Slide Indicators */}
				<SlideIndicators total={heroContent.length} current={currentSlide} onSelect={goToSlide} />
			</div>
		</AppSection>
	);
}

export default HeroSection;
