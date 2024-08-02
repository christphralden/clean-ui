import { Suspense, isValidElement } from 'react';
import { ComponentMap } from '@content/component-map';

export const DynamicRenderer = ({
  componentName 
}:{
  componentName:string
}) => {
  const Component = ComponentMap.get(componentName);

  if (!Component || !isValidElement(Component)) {
    console.error(`Component not found or invalid: ${componentName}`);
    return null; 
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Component}
    </Suspense>
  );
};

export default DynamicRenderer;