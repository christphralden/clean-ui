import { Suspense } from 'react';
import { ComponentMap } from '@content/component-map';

export const DynamicRenderer = ({
  componentName
}:{
  componentName: string
}) => {
  const Component = ComponentMap.get(componentName);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component /> : null}
    </Suspense>
  );
};
