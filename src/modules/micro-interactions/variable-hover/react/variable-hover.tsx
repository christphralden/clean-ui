import { splitTextToLetters } from '@core/lib/utils';
import { variableFontHover } from '@core/lib/animations';
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