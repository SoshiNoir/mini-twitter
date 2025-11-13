'use client';

import { useState } from 'react';

type Props = {
  onAdd: (post: { conteudo: string; midia?: string; data: string }) => void;
};

export default function PostForm({ onAdd }: Props) {
  const [conteudo, setConteudo] = useState('');
  const [midia, setMidia] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conteudo) return;

    onAdd({
      conteudo,
      midia: midia || undefined,
      data: data || new Date().toISOString(),
    });

    setConteudo('');
    setMidia('');
    setData('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white border border-pink-200 rounded-2xl shadow-sm p-4 mb-6 flex flex-col gap-3'
    >
      <textarea
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        placeholder='✍️ Escreva algo fofo...'
        className='w-full border border-pink-200 rounded-xl p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400'
        rows={3}
      />

      <input
        type='text'
        value={midia}
        onChange={(e) => setMidia(e.target.value)}
        placeholder='📷 Link da mídia (opcional)'
        className='w-full border border-pink-200 rounded-xl p-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400'
      />

      <input
        type='datetime-local'
        value={data}
        onChange={(e) => setData(e.target.value)}
        className='w-full border border-pink-200 rounded-xl p-2 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400'
      />

      <button
        type='submit'
        className='bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl transition'
      >
        Publicar 💌
      </button>
    </form>
  );
}
