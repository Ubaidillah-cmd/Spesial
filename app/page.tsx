'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    '/1.jpeg','/2.jpeg','/3.jpeg','/4.jpeg','/5.jpeg','/6.jpeg',
    '/7.jpeg','/8.jpeg','/9.jpeg','/10.jpeg','/11.jpeg','/12.jpeg',
    '/13.jpeg','/14.jpeg','/15.jpeg','/16.jpeg','/17.jpeg','/18.jpeg',
    '/19.jpeg','/20.jpeg','/21.jpeg','/22.jpeg','/23.jpeg','/24.jpeg',
    '/25.jpeg','/26.jpeg','/27.jpeg','/28.jpeg','/29.jpeg','/30.jpeg',
    '/31.jpeg','/32.jpeg','/33.jpeg','/34.jpeg','/35.jpeg','/36.jpeg'
  ];

  return (
    <main className="w-screen h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src="/birthday.mp3" autoPlay loop className="hidden" />

          {/* 🎉 Judul ulang tahun */}
          <h1 className="text-center text-4xl font-bold mt-6 text-purple-700">
            🎉 Happy Birthday 🎂
          </h1>

          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={36}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.2}
          />
        </>
      )}
    </main>
  );
}
