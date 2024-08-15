import { textGlitch } from "@core/lib/animations";
import { useCallback, useEffect, useRef } from "react";

export const TextGlitch = () => {
    const ref = useRef<HTMLParagraphElement | null>(null);

    const handleMouseEnter = useCallback((text: string) => {
        textGlitch({
            text: text,
            duration: 50,
            glitch: 2,
            callbackFn: (newText) => {
                if (ref.current) {
                    ref.current.innerText = newText;
                }
            },
        });
    }, []);


    useEffect(()=>{
        if(ref.current){
            textGlitch({
                text: text,
                duration: 50,
                glitch: 2,
                hidden: true,
                callbackFn: (newText) => {
                    if (ref.current) {
                        ref.current.innerText = newText;
                    }
                },
            });
        }
    },[ref])

    const text = 'Hover Me';
    return (
        <div>
            <p
                className="uppercase text-5xl"
                ref={(el) => {
                    ref.current = el;
                }}
                onMouseEnter={() => handleMouseEnter(text)}
            >
            </p>
        </div>
    );
};