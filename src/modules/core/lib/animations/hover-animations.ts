import gsap from 'gsap'

export function variableFontHover({
    select,
    animationDuration = 0.5,
    maxDistance = 300,
    minFontWeight = 500,
    maxFontWeight = 900
}:{
    select:string,
    animationDuration?: number,
    maxDistance?: number,
    minFontWeight?: number,
    maxFontWeight?: number,
}){
    let mm = gsap.matchMedia();
		
    mm.add("(min-width:992px)", () => {
        const fontWeightItems = document.querySelectorAll(select);
        
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
                        distance < maxDistance ? gsap.utils.mapRange(
                            0, 
                            maxDistance,
                            minFontWeight,
                            maxFontWeight,
                            Math.max(0, maxDistance - distance)
                        ) : minFontWeight;

                    gsap.to(char, {fontWeight, duration: animationDuration});
                });
            });
        });
    });
}


const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
export async function textGlitch({
    text,
    duration = 25,
    glitch = 3,
    hidden = false,
    callbackFn
}: {
    text: string;
    duration?: number;
    glitch: number;
    hidden?: boolean;
    callbackFn: (text: string) => any;
}) {
    const size = text.length;
    const initial = text
    let memoizedText: string[] = []
    if(!hidden){
        memoizedText = [...initial];
    }
    const initialPassDuration = duration / 2;

    let y = 1;
    const initialPass = setInterval(() => {
        if(!hidden){
            if (y >= size) {
                clearInterval(initialPass);
                return
            }
            const randomCharacter = alphabets[Math.floor(Math.random() * alphabets.length)];
            memoizedText[y] = randomCharacter;
            callbackFn(memoizedText.join(''));
        }
        y++;
    }, initialPassDuration);
    
    let i = hidden ? 0 : 1;
    let j = 0;

    const secondPass = setInterval(() => {
        if (i >= size) {
            clearInterval(secondPass);
            return;
        }

        if (y > i) {
            const randomCharacter = alphabets[Math.floor(Math.random() * alphabets.length)];
            memoizedText[i] = (j === glitch - 1) ? initial[i] : randomCharacter;
            callbackFn(memoizedText.join(''));

            j++;
            if (j >= glitch) {
                j = 0;
                i++;
            }
        }
    }, duration);
}

