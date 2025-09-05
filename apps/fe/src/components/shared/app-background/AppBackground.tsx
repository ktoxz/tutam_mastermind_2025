import Image from 'next/image';
import Planet from '@/assets/background/planet.png';
import Stars from '@/assets/background/stars.png';
import Plane from '@/assets/background/plane.png';

function AppBackground() {
	return (
		<div className='fixed inset-0 w-screen h-screen flex justify-between items-center pointer-events-none -z-10'>
			<div className='flex items-center h-full'>
				<Image
					src={Stars}
					alt='Stars'
					width={400}
					height={400}
					className='animate-fade-in-left'
					style={{ objectFit: 'contain', maxWidth: '30vw', height: 'auto' }}
					priority
				/>
			</div>
			<div className='flex flex-col items-end justify-between h-full gap-2'>
				<Image
					src={Planet}
					alt='Planet'
					width={350}
					height={350}
					className='animate-fade-in-top -rotate-25'
					style={{
						objectFit: 'contain',
						maxHeight: '60dvh',
					}}
					priority
				/>
				<Image
					src={Plane}
					alt='Plane'
					width={320}
					height={320}
					className='animate-fade-in-right'
					style={{ objectFit: 'contain', maxHeight: '55dvh' }}
					priority
				/>
			</div>
		</div>
	);
}

export default AppBackground;
