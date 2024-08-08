import {useEffect, useRef} from 'react';
import {cn} from '@core/lib/utils';
import {textParallaxScroll} from '@core/lib/animations';

interface ParallaxArgs{
    text: string,
    direction?: string
}

const TextContent:ParallaxArgs[] = [
    {
        text: "You are just as likely to solve a problem by being unconventional and determined as by being brilliant.",
        direction: "-10%"
    },
    {
        text: "You are just as likely to solve a problem by being unconventional and determined as by being brilliant.",
        direction: "15%"
    },
    {
        text: "You are just as likely to solve a problem by being unconventional and determined as by being brilliant.",
        direction: "-20%"
    },
]

export const TextParallax = ({
    className
}:{
    className?: string
}) => {
	const triggerRef = useRef<HTMLDivElement>(null);
	const paragraphRefs = useRef<(HTMLElement | null)[]>([]);

	useEffect(() => {
		const trigger = triggerRef.current;

		if (trigger && paragraphRefs.current.length > 0) {
			paragraphRefs.current.forEach((paragraph) => {
				if (!paragraph) return; 
				const direction = paragraph.dataset.direction;
				textParallaxScroll({
					select: paragraph,
					direction: direction,
					trigger: trigger,
					start: '0'
				});
			});
		}
	}, []); 

	return (
		<div
			id="trigger"
			ref={triggerRef} 
			className={cn('text-nowrap w-full py-20 overflow-hidden flex justify-center items-center flex-col gap-2 uppercase', className)}
		>
			{TextContent.map((content, index)=>{
				return(
					<p
					key={index}
					className="text-5xl"
					ref={(el) => (paragraphRefs.current[index] = el)}
					data-direction={content.direction}
					>
						{content.text}
					</p>
				)
			})}
            
		</div>
	);
};
