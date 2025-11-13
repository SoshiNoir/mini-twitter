// components/PostCard.tsx
'use client';

import type { Post } from '@/types/post';
import { useState } from 'react';
import { ReactionButton } from './ReactionButton';

function moodLabel(mood?: Post['mood']) {
  switch (mood) {
    case 'happy':
      return 'feliz 😊';
    case 'missing-you':
      return 'com saudade 💭';
    case 'tired':
      return 'cansado 😴';
    case 'grateful':
      return 'grato por você 💗';
    case 'calm':
      return 'calmo 🌿';
    case 'stressed':
      return 'esticado 😵‍💫';
    default:
      return undefined;
  }
}

function kindLabel(kind?: Post['kind']) {
  switch (kind) {
    case 'memory':
      return 'lembrança querida';
    case 'compliment':
      return 'elogio descarado';
    case 'daily-update':
      return 'dia a dia';
    case 'random-thought':
      return 'pensamento solto';
    default:
      return undefined;
  }
}

export function PostCard({ post }: { post: Post }) {
  const [openImage, setOpenImage] = useState<string | null>(null);
  const tags = [moodLabel(post.mood), kindLabel(post.kind)].filter(Boolean);

  return (
    <>
      <article className='rounded-2xl border border-rose-200 bg-rose-50/95 p-4 shadow-md shadow-rose-200'>
        {/* TAGS + DATA/HORA */}
        <header className='mb-2'>
          {tags.length > 0 && (
            <p className='mb-1 text-[11px] font-medium uppercase tracking-[0.2em] text-rose-500'>
              {tags.join(' · ')}
            </p>
          )}
          <div className='flex items-center gap-2 text-[11px] text-rose-400'>
            {post.date && <span>{post.date}</span>}
            {post.time && <span>· {post.time}</span>}
          </div>
        </header>

        {/* TÍTULO OPCIONAL */}
        {post.title && (
          <h2 className='mb-1 text-base font-semibold text-rose-800'>
            {post.title}
          </h2>
        )}

        {/* TEXTO PRINCIPAL – AQUI É ONDE O TEXTO SOME SE NÃO TIVER */}
        <p className='whitespace-pre-line text-sm leading-relaxed text-rose-900'>
          {post.text}
        </p>

        {/* MÍDIA (CLICÁVEL) */}
        {post.media && post.media.length > 0 && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {post.media.map((m) =>
              m.toLowerCase().endsWith('.mp4') ||
              m.toLowerCase().endsWith('.webm') ? (
                <video
                  key={m}
                  src={m}
                  controls
                  className='rounded-xl border border-rose-200 max-h-60'
                />
              ) : (
                <img
                  key={m}
                  src={m}
                  alt=''
                  onClick={() => setOpenImage(m)}
                  className='cursor-zoom-in rounded-xl border border-rose-200 max-h-60 object-cover'
                />
              )
            )}
          </div>
        )}

        {/* LINK DE MÚSICA */}
        {post.songUrl && (
          <div className='mt-3 inline-flex items-center gap-2 rounded-xl bg-rose-100 px-3 py-2 text-xs text-rose-700'>
            🎧{' '}
            <a
              href={post.songUrl}
              target='_blank'
              rel='noreferrer'
              className='underline-offset-2 hover:underline text-rose-600'
            >
              música pra combinar com esse momento
            </a>
          </div>
        )}

        {/* PINADO */}
        {post.isPinned && (
          <div className='mt-3 inline-flex items-center gap-1 rounded-full bg-rose-200 px-2 py-1 text-[11px] font-medium text-rose-700 border border-rose-300'>
            📌 Recado especial
          </div>
        )}

        {/* CORAÇÃO */}
        <div className='mt-3'>
          <ReactionButton postId={post.id} />
        </div>

        {/* COMENTÁRIOS */}
        {post.comments && post.comments.length > 0 && (
          <div className='mt-4 space-y-2 border-top border-rose-200 pt-3'>
            {post.comments.map((c) => (
              <div
                key={c.id}
                className='rounded-xl bg-white/95 px-3 py-2 text-xs text-rose-900 border border-rose-200'
              >
                {c.author && (
                  <p className='text-[11px] font-semibold text-rose-700'>
                    {c.author}
                  </p>
                )}
                <p className='text-rose-900'>
                  {c.text.split(' ').map((word, i) =>
                    word.startsWith('http') ? (
                      <a
                        key={i}
                        href={word}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-rose-600 underline hover:text-rose-800 transition-colors'
                      >
                        {word}
                      </a>
                    ) : (
                      <span key={i}> {word} </span>
                    )
                  )}
                </p>
                <p className='mt-1 text-[10px] text-rose-500'>{c.date}</p>
              </div>
            ))}
          </div>
        )}
      </article>

      {/* LIGHTBOX DE IMAGEM */}
      {openImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80'
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt=''
            className='max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl'
          />
        </div>
      )}
    </>
  );
}
