---
title: "Text Glitch"
description: "A different apporach to a basic typewriter effect"
creator: "christphralden"
versions:
  - framework: "react"
    lang: "typescript"
    component: "text-glitch"
    content:
      - type: "header"
        value: "Implementation"
      - type: "description"
        value: "Component for the Text Glitch."
      - type: "code"
        filename: "text-glitch.tsx"
        lang: "typescript"
        value: |
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
        
      - type: "header"
        value: "Implementation"
      - type: "description"
        value: "Animation for the Text Glitch."
      - type: "code"
        filename: "animations.ts"
        lang: "typescript"
        value: |
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

       


    # variants:
    #   - header: "variant name"
    #     component: "component-map-name"
    #     code:
    #       filename: "filename.ext"
    #       lang: "typescript/javascript/astro"
    #       value: |
    #         code
---