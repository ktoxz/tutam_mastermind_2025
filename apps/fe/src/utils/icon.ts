import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

export function parseLucideIcon(iconName: string): LucideIcon | null {
	try {
		const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[iconName];
		return IconComponent || null;
	} catch {
		return null;
	}
}
