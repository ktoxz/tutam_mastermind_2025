import React from 'react';

type Props = {
	children: React.ReactNode;
};

const EmotionResultRecommends: React.FC<Props> = ({ children }) => {
	return <section aria-label='Gợi ý nội dung liên quan cảm xúc'>{children}</section>;
};

export default EmotionResultRecommends;
