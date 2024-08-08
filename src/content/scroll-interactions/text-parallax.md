---
title: "Text Parallax"
description: "Parallax effect on text based on scroll interactions"
creator: "christphralden"
versions:
  - framework: "react"
    lang: "typescript"
    description: "Implementation in Astro with TypeScript."
    component: "text-parallax"
    content:
      - type: "header"
        value: "Implementation"
      - type: "description"
        value: "Component for the Text Parallax."
      - type: "code"
        filename: "text-parallax.tsx"
        lang: "typescript"
        value: |
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

      - type: "header"
        value: "Install GSAP into your project."
      - type: "description"
        value: "GSAP is a lightweight animation library that will help animating things easier.<br/>Run this command in the terminal with your package manager of choice to install GSAP, npm will be used as an example."
      - type: "code"
        filename: "install-gsap"
        lang: "text"
        value: |
          npm i gsap


      - type: "header"
        value: "Update astro.config.mjs."
      - type: "description"
        value: "Update astro.config.mjs as GSAP RegisterPlugin might break imports if you're using astro on top"
      - type: "code"
        filename: "astro.config.mjs"
        lang: "javascript"
        value: |
          // astro.config.mjs
          import { defineConfig } from 'astro/config';
          import tailwind from '@astrojs/tailwind';
          import react from '@astrojs/react';

          export default defineConfig({
            integrations: [tailwind(), react()],

            vite: {
              ssr: {
                noExternal: ['gsap'], 
              },
            },
          });


      - type: "header"
        value: "Copy and paste the following code into your project."
      - type: "description"
        value: "A provider to easily initilize plugins beforehand for GSAP"
      - type: "code"
        filename: "animations/gsap.js"
        lang: "javascript"
        value: |
          import gsap from 'gsap';
          import ScrollTrigger from 'gsap/ScrollTrigger';

          class GsapProvider {
              gsap;
              constructor() {
                  gsap.registerPlugin(ScrollTrigger);
                  this.gsap = gsap;
              }
          }

          export const gsapProvider = new GsapProvider();


      - type: "header"
        value: "Copy and paste the following code into your project."
      - type: "description"
        value: "Function that applies the animation using GSAP or you could customize this with vanillajs."
      - type: "code"
        filename: "animations/animations.ts"
        lang: "typescript"
        value: |
          import { gsapProvider } from "./gsap";

          export function textParallaxScroll({
            select,
            trigger,
            direction = "10%",
            start,
            end
          }: {
            select: Element;
            trigger: Element; // trigger to start the animation
            direction?: string;
            start?: string, // starting point of animation
            end?: string // end point of animation
          }) {
            gsapProvider.gsap.to(select, {
              x: direction,
              scrollTrigger: {
                trigger: trigger,
                start: start ?? "top top",
                end: end ?? "bottom top",
                scrub: true,
              },

            });
          }

      - type: "header"
        value: "Update imports."
      - type: "description"
        value: "Change the import paths to match your project."


  - framework: "astro"
    lang: "typescript"
    component: "text-parallax"
    content:
      - type: "header"
        value: "Implementation"
      - type: "description"
        value: "Component for the Text Parallax."
      - type: "code"
        filename: "text-parallax.astro"
        lang: "astro"
        value: |
          ---
          import { cn } from '@core/lib/utils';

          type Props = {
            className?: string;
          };

          const { className } = Astro.props;

          const TextContent = [
            {
              text: "You are just as likely to solve a problem by being unconventional and determined as by being brilliant.",
              direction: "20%",
            },
            {
              text: "You are just as likely to solve a problem by being unconventional and determined as by being brilliant.",
              direction: "-20%",
            },
            {
              text: "You are just as likely to solve a problem by being unconventional and determined as by being brilliant.",
              direction: "25%",
            },
          ];
          ---

          <div
            id="trigger"
            class={cn(
              "text-nowrap h-[75vh] w-full overflow-clip flex justify-center items-center flex-col",
              className
            )}
          >
            {TextContent.map((content) => (
              <p
                data-direction={content.direction}
                class="text-parallax text-5xl"
              >
                {content.text}
              </p>
            ))}
          </div>

          <script>
            import { textParallaxScroll } from '@core/lib/animations';

            document.addEventListener('DOMContentLoaded', function () {
              const selected = document.querySelectorAll('.text-parallax');
              const trigger = document.getElementById('trigger');

              if (selected && trigger) {
                selected.forEach((select) => {
                  if (!(select instanceof HTMLElement)) return;
                  const direction = select.dataset.direction;
                  textParallaxScroll({
                    select: select,
                    direction: direction,
                    trigger: trigger,
                  });
                });
              }
            });
          </script>



      - type: "header"
        value: "Install GSAP into your project."
      - type: "description"
        value: "GSAP is a lightweight animation library that will help animating things easier.<br/>Run this command in the terminal with your package manager of choice to install GSAP, npm will be used as an example."
      - type: "code"
        filename: "install-gsap"
        lang: "text"
        value: |
          npm i gsap


      - type: "header"
        value: "Update astro.config.mjs."
      - type: "description"
        value: "Update astro.config.mjs as GSAP RegisterPlugin might break imports if you're using astro on top"
      - type: "code"
        filename: "astro.config.mjs"
        lang: "javascript"
        value: |
          // astro.config.mjs
          import { defineConfig } from 'astro/config';
          import tailwind from '@astrojs/tailwind';
          import react from '@astrojs/react';

          export default defineConfig({
            integrations: [tailwind(), react()],

            vite: {
              ssr: {
                noExternal: ['gsap'], 
              },
            },
          });


      - type: "header"
        value: "Copy and paste the following code into your project."
      - type: "description"
        value: "A provider to easily initilize plugins beforehand for GSAP"
      - type: "code"
        filename: "animations/gsap.js"
        lang: "javascript"
        value: |
          import gsap from 'gsap';
          import ScrollTrigger from 'gsap/ScrollTrigger';

          class GsapProvider {
              gsap;
              constructor() {
                  gsap.registerPlugin(ScrollTrigger);
                  this.gsap = gsap;
              }
          }

          export const gsapProvider = new GsapProvider();

      - type: "header"
        value: "Copy and paste the following code into your project."
      - type: "description"
        value: "Function that applies the animation using GSAP or you could customize this with vanillajs."
      - type: "code"
        filename: "animations/animations.ts"
        lang: "typescript"
        value: |
          import { gsapProvider } from "./gsap";

          export function textParallaxScroll({
            select,
            trigger,
            direction = "10%",
            start,
            end
          }: {
            select: Element;
            trigger: Element; // trigger to start the animation
            direction?: string;
            start?: string, // starting point of animation
            end?: string // end point of animation
          }) {
            gsapProvider.gsap.to(select, {
              x: direction,
              scrollTrigger: {
                trigger: trigger,
                start: start ?? "top top",
                end: end ?? "bottom top",
                scrub: true,
              },

            });
          }

      - type: "header"
        value: "Update imports."
      - type: "description"
        value: "Change the import paths to match your project."

---