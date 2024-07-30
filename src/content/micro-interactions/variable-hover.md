---
title: "Variable Hover"
description: "A cool text proximity hover effect leveraging variable fonts."
creator: "christphralden"
versions:
  - framework: "react"
    lang: "typescript"
    component: "variable-hover"
    content:
      - type: "header"
        value: "Implementation"
      - type: "description"
        value: "Component for the variable hover."
      - type: "code"
        filename: "variable-hover.tsx"
        lang: "typescript"
        value: |
          import { splitTextToLetters } from '@core/lib/utils'; // adjust import
          import { variableFontHover } from '@core/lib/animations'; // adjust import
          import { useEffect } from 'react';

          export const VariableHover = ({
            text = "A very cool text hover effect"
          }:{
            text?: string
          }) => {

            useEffect(() => {
              variableFontHover({
                select:'[data-animate="font-weight"]',
                animationDuration: 0.5,
                maxDistance:300,
                minFontWeight:400,
                maxFontWeight:900
              })	 
            }, [])
            
            const letters = splitTextToLetters({
              text
            })

            return (
              <div>
                <h1 className='text-5xl font-regrade uppercase'>
                  {letters.map((char, i)=>(
                    <span key={i} className="char" data-animate="font-weight">{char}</span>
                  ))}
                </h1>
              </div>
            );
          };
      - type: "header"
        value: "Use a variable font."
      - type: "description"
        value: 'To be able to achieve this effect, you MUST use a variable font. For this example im using Neue Regrade.<br/>You can look it up if you dont have one, its free.'
      - type: "code"
        filename: "typography.css"
        lang: "css"
        value: |
          @font-face {
            font-family: 'Regrade';
            src: url('/fonts/Neue_Regrade/NeueRegrade-Variable.ttf') format('truetype');
            font-weight: 100 900; 
            font-style: normal; 
          }
      - type: "header"
        value: "Update tailwind.config.mjs."
      - type: "description"
        value: 'Update tailwind config to use the font as a class. I used "font-regrade", you can see that being applied below.<br/>Please update in accordance to your font of choice.'
      - type: "code"
        filename: "tailwind.config.mjs"
        lang: "javascript"
        value: |
          /** @type {import('tailwindcss').Config} */
          export default {
            content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
            theme: {
              extend: {
                fontFamily: {
                  'regrade': ['Regrade', 'sans-serif']
                },
              },
            },
            plugins: [],
          }
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
        value: "Copy and paste the following code into your project."
      - type: "description"
        value: "Function that applies the animation using GSAP or you could customize this with vanillajs."
      - type: "code"
        filename: "animations/variable-hover.ts"
        lang: "typescript"
        value: |
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
      - type: "header"
        value: "Copy and paste the following code into your project."
      - type: "description"
        value: "Some string utilities to help you."
      - type: "code"
        filename: "utils/string.ts"
        lang: "typescript"
        value: |
          export function splitTextToLetters({
              text
          }:{
              text:string
          }):string[]{
              return text.split('')
          }
      - type: "header"
        value: "Update imports."
      - type: "description"
        value: "Change the import paths to match your project."
    variants:
      - component: "variable-hover"
        header: "Second version"
        code:
          filename: "yes"
          lang: "typescript"
          value: |
            import { splitTextToLetters } from '@core/lib/utils'; // adjust import
            import { variableFontHover } from '@core/lib/animations'; // adjust import
            import { useEffect } from 'react';

            export const VariableHoverV2 = ({
              text = "A modified text hover effect"
            }:{
              text?: string
            }) => {

              useEffect(() => {
                variableFontHover({
                  select:'[data-animate="font-weight"]',
                  animationDuration: 0.5,
                  maxDistance:300,
                  minFontWeight:400,
                  maxFontWeight:900
                })	 
              }, [])
              
              const letters = splitTextToLetters({
                text
              })

              return (
                <div>
                  <h1 className='text-5xl font-regrade uppercase'>
                    {letters.map((char, i)=>(
                      <span key={i} className="char" data-animate="font-weight">{char}</span>
                    ))}
                  </h1>
                </div>
              );
            };
  - framework: "astro"
    lang: "typescript"
    description: "Implementation in Astro with TypeScript."
    component: "variable-hover"
    content:
      - type: "header"
        value: "Implementation"
      - type: "description"
        value: "Keep the html the same as before but add this script instead"
      - type: "code"
        filename: "variable-hover"
        lang: "typescript"
        value: |
          document.addEventListener('DOMContentLoaded', () => {
            variableFontHover({
              select:'[data-animate="font-weight"]', // adjust this if your html is different
              animationDuration: 0.5,
              maxDistance:300,
              minFontWeight:500,
              maxFontWeight:900
            })	 
          });
---