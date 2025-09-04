'use client';
import { BatteryLow, Frown, LucideIcon, Smile, Zap } from 'lucide-react';
import { Mood } from '@packages/models';

interface MoodIconProps {
	mood: Mood;
	[key: string]: any;
}

const MoodIcon: React.FC<MoodIconProps> = ({ mood, ...rest }) => {
	const getIcon = (slug: string): LucideIcon => {
		switch (slug) {
			case 'hanh-phuc':
				return Smile;
			case 'buon':
				return Frown;
			case 'hao-hung':
				return Zap;
			case 'met-moi':
				return BatteryLow;
			default:
				return Smile;
		}
	};

	const Icon = getIcon(mood.slug);
	return <Icon {...rest} />;
};

export default MoodIcon;
