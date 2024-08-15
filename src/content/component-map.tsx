import React from 'react';

const VariableHover = React.lazy(() =>
	import('@micro-interactions/index').then((module) => ({default: module.VariableHover}))
);

const TextGlitch = React.lazy(() =>
	import('@micro-interactions/index').then((module) => ({default: module.TextGlitch}))
)

const TextParallax = React.lazy(() =>
	import('@scroll-interactions/index').then((module) => ({default: module.TextParallax}))
);

export const ComponentMap = new Map<string, JSX.Element>([
	['variable-hover', <VariableHover />],
	['text-parallax', <TextParallax />],
	['text-glitch', <TextGlitch />],
]);
