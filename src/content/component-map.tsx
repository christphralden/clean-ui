import React from 'react';

const VariableHover = React.lazy(() =>
	import('@micro-interactions/index').then((module) => ({default: module.VariableHover}))
);

const TextParallax = React.lazy(() =>
	import('@scroll-interactions/index').then((module) => ({default: module.TextParallax}))
);

export const ComponentMap = new Map<string, JSX.Element>([
	['variable-hover', <VariableHover />],
	['text-parallax', <TextParallax />],
]);
