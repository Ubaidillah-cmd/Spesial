'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    '/foto1.jpg','/foto2.jpg','/foto3.jpg','/foto4.jpg','/foto5.jpg','/foto6.jpg',
    '/foto7.jpg','/foto8.jpg','/foto9.jpg','/foto10.jpg','/foto11.jpg','/foto12.jpg',
    '/foto13.jpg','/foto14.jpg','/foto15.jpg','/foto16.jpg','/foto17.jpg','/foto18.jpg',
    '/foto19.jpg','/foto20.jpg','/foto21.jpg','/foto22.jpg','/foto23.jpg','/foto24.jpg',
    '/foto25.jpg','/foto26.jpg','/foto27.jpg','/foto28.jpg','/foto29.jpg','/foto30.jpg',
    '/foto31.jpg','/foto32.jpg','/foto33.jpg','/foto34.jpg','/foto35.jpg','/foto36.jpg'
  ];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src="/birthday.mp3" autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={36}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
