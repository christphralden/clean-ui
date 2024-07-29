import React from 'react';


const LazyVariableHover = React.lazy(() => import('@micro-interactions/index').then(module => ({ default: module.VariableHover })));

export const ComponentMap = new Map<string, React.ComponentType>([
    ['variable-hover', LazyVariableHover]
]);