import gsap from 'gsap'

export function variableFontHover(){
    let mm = gsap.matchMedia();
		
    mm.add("(min-width:992px)", () => {
        const fontWeightItems = document.querySelectorAll('[data-animate="font-weight"]');
        const MAX_DISTANCE = 300;
        const MAX_FONT_WEIGHT = 900;
        const MIN_FONT_WEIGHT = 500;

        fontWeightItems.forEach(item => {
            const text = item.textContent;
            item.textContent = '';
            text?.split('').forEach(char => {
                const span = document.createElement('span');
                span.classList.add('char');
                span.dataset.animate = 'font-weight';
                span.textContent = char;
                item.appendChild(span);
            });
        });

        document.addEventListener("mousemove", (e) => {
            const mouseX = e.pageX;
            const mouseY = e.pageY;

            fontWeightItems.forEach(item => {
                item.querySelectorAll(".char").forEach(char => {
                    const itemRect = char.getBoundingClientRect();
                    const itemCenterX = itemRect.left + itemRect.width / 2 + window.scrollX;
                    const itemCenterY = itemRect.top + itemRect.height / 2 + window.scrollY;

                    const distance = Math.sqrt(
                        Math.pow(mouseX - itemCenterX, 2) + Math.pow(mouseY - itemCenterY, 2)
                    );

                    let fontWeight = 
                        distance < MAX_DISTANCE ? gsap.utils.mapRange(
                            0, 
                            MAX_DISTANCE,
                            MIN_FONT_WEIGHT,
                            MAX_FONT_WEIGHT,
                            Math.max(0, MAX_DISTANCE - distance)
                        ) : MIN_FONT_WEIGHT;

                    gsap.to(char, {fontWeight, duration: 0.5});
                });
            });
        });
    });
}