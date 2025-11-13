import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface PostMediaProps {
  media: string[];
}

export default function PostMedia({ media }: PostMediaProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isVideo = (src: string) =>
    src.endsWith('.mp4') || src.endsWith('.webm');

  useEffect(() => {
    const styleSwiperButtons = () => {
      const next = document.querySelectorAll('.swiper-button-next');
      const prev = document.querySelectorAll('.swiper-button-prev');

      [...next, ...prev].forEach((el) => {
        (el as HTMLElement).style.color = '#ec4899'; // pink-500
        (el as HTMLElement).style.fontSize = '2rem';
        (el as HTMLElement).style.fontWeight = 'bold';
        (el as HTMLElement).style.textShadow = '0 2px 4px rgba(0,0,0,0.3)';
      });
    };

    styleSwiperButtons();
  }, [selectedIndex]);

  if (!media || media.length === 0) return null;

  return (
    <>
      {/* 📷 Swiper no feed */}
      <Swiper
        modules={[Navigation, Keyboard]}
        navigation
        keyboard
        className='mb-4 rounded-lg overflow-hidden'
        spaceBetween={20}
        slidesPerView={1}
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className='relative w-full aspect-w-16 aspect-h-9 cursor-pointer'
              style={{ paddingBottom: '56.25%' }}
              onClick={() => !isVideo(item) && setSelectedIndex(index)}
            >
              {isVideo(item) ? (
                <video
                  controls
                  className='absolute top-0 left-0 w-full h-full object-cover rounded-lg'
                >
                  <source src={item} type='video/mp4' />
                </video>
              ) : (
                <Image
                  src={item}
                  alt={`Mídia ${index + 1}`}
                  fill
                  className='object-cover transition duration-300 ease-in-out transform hover:scale-105'
                  sizes='(max-width: 768px) 100vw, 50vw'
                  priority={index === 0}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🖼️ Modal com Swiper */}
      {selectedIndex !== null && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className='relative w-full max-w-4xl h-[80vh]'
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              modules={[Navigation, Keyboard]}
              navigation
              keyboard
              initialSlide={selectedIndex}
              className='h-full rounded-lg'
              spaceBetween={20}
              slidesPerView={1}
            >
              {media.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='relative w-full h-full'>
                    <Image
                      src={item}
                      alt={`Imagem ${index + 1}`}
                      fill
                      className='object-contain pointer-events-none rounded-lg'
                      sizes='100vw'
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ❌ Botão fechar */}
            <button
              onClick={() => setSelectedIndex(null)}
              className='absolute top-4 right-4 z-10 text-pink-300 hover:text-pink-500 text-3xl font-bold transition cursor-pointer'
              aria-label='Fechar'
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
