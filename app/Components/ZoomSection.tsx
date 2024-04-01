'use client';

import React, { useRef } from 'react';
import { hover3d } from '../utils/hover';

const ZoomSection = () => {
  const hero = useRef<HTMLDivElement>(null);
  return <div ref={hero}>ZoomSection</div>;
};

export default ZoomSection;
