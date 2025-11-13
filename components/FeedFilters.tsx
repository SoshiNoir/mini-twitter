'use client';

import { useState } from 'react';

type Props = {
  onSearch: (text: string) => void;
  onDate: (date: string) => void;
  onSort: (order: 'newest' | 'oldest') => void;
};

export default function FeedFilters({ onSearch, onDate, onSort }: Props) {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [order, setOrder] = useState<'newest' | 'oldest'>('newest');

  const clearSearch = () => {
    setSearch('');
    onSearch('');
  };

  const clearDate = () => {
    setDate('');
    onDate('');
  };

  return (
    <div className='bg-white border border-pink-200 rounded-2xl shadow-sm p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4'>
      {/* 🔍 Campo de busca com botão de limpar */}
      <div className='relative w-full md:w-1/2'>
        <input
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value);
          }}
          placeholder='🔍 Pesquisar post...'
          className='w-full border border-pink-300 rounded-xl p-3 pr-10 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400'
        />
        {search && (
          <button
            onClick={clearSearch}
            className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-200'
            aria-label='Limpar busca'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='red'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-5 h-5'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </button>
        )}
      </div>

      {/* 📅 Campo de data com botão de limpar */}
      <div className='relative w-full md:w-auto'>
        <input
          type='date'
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            onDate(e.target.value);
          }}
          className='w-full border border-pink-300 rounded-xl p-3 pr-10 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400'
        />
        {date && (
          <button
            onClick={clearDate}
            className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-200'
            aria-label='Limpar data'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='red'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-5 h-5'
            >
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </button>
        )}
      </div>

      {/* 🔽 Dropdown de ordenação */}
      <select
        value={order}
        onChange={(e) => {
          const value = e.target.value as 'newest' | 'oldest';
          setOrder(value);
          onSort(value);
        }}
        className='w-full md:w-auto border border-pink-300 rounded-xl p-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400'
      >
        <option value='newest'>⬆️ Mais novos primeiro</option>
        <option value='oldest'>⬇️ Mais antigos primeiro</option>
      </select>
    </div>
  );
}
