import React from 'react';
import './Water.scss';

const Water = () => {
  return (
    <>
      <div class='background'>
        <div class='water' />
      </div>

      <svg>
        <filter id='turbulence' x='0' y='0' width='100%' height='100%'>
          <feTurbulence
            id='sea-filter'
            numOctaves='20'
            seed='50'
            baseFrequency='0.02 0.02'
          ></feTurbulence>
          <feDisplacementMap scale='20' in='SourceGraphic'></feDisplacementMap>
          <animate
            xlink
            href='#sea-filter'
            attributeName='baseFrequency'
            dur='30s'
            keyTimes='0;0.5;1'
            values='0.02 0.06;0.04 0.08;0.02 0.06'
            repeatCount='indefinite'
          />
        </filter>
      </svg>
    </>
  );
};

export default Water;
