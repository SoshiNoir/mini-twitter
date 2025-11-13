'use client';

import { PostCard } from '@/components/PostCard';
import { posts } from '@/data/posts';
import type { Post } from '@/types/post';
import { useMemo, useState } from 'react';

type View = 'senha' | 'intro' | 'timeline';

const SECRET_WORD = 'brigadeiro';

type Grouped = Record<string, Post[]>;

function groupByDate(list: Post[]): Grouped {
  return list.reduce<Grouped>((acc, post) => {
    if (!acc[post.date]) acc[post.date] = [];
    acc[post.date].push(post);
    return acc;
  }, {});
}

// Formata "2025-09-07" -> "7 de setembro de 2025"
function formatDisplayDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function HomePage() {
  const [view, setView] = useState<View>('senha');
  const [senha, setSenha] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 5; // 5 grupos de dias por página

  // 👉 filtra posts pelo texto / título
  const filteredPosts = useMemo(() => {
    if (!search.trim()) return posts;
    const q = search.toLowerCase();
    return posts.filter((post) => {
      const inText = post.text.toLowerCase().includes(q);
      const inTitle = post.title?.toLowerCase().includes(q);
      return inText || inTitle;
    });
  }, [search]);

  const grouped = useMemo(() => groupByDate(filteredPosts), [filteredPosts]);

  const sortedDates = useMemo(
    () => Object.keys(grouped).sort((a, b) => b.localeCompare(a)),
    [grouped]
  );

  const totalPages = Math.max(1, Math.ceil(sortedDates.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const end = currentPage * pageSize;
  const datesToShow = sortedDates.slice(start, end);

  function handleSenhaSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (senha.trim().toLowerCase() === SECRET_WORD.toLowerCase()) {
      // 👉 agora não salva mais em lugar nenhum, só muda o estado
      setView('intro');
    } else {
      alert('Hmm… acho que essa não é a nossa palavrinha mágica. 😅');
    }
  }

  function handleIntroContinue() {
    setView('timeline');
  }

  return (
    <main className='mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-8 bg-rose-100'>
      {/* TELA DE SENHA */}
      {view === 'senha' && (
        <section className='m-auto w-full max-w-sm rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-md shadow-rose-200'>
          <h1 className='mb-3 text-xl font-semibold text-rose-800'>
            Oi, Anita 👋
          </h1>
          <p className='mb-4 text-sm text-rose-700'>
            Esse é um cantinho só nosso. Se você é{' '}
            <span className='font-medium'>A</span> Anita certa, você sabe a
            palavrinha mágica. ✨
          </p>
          <form onSubmit={handleSenhaSubmit} className='space-y-3'>
            <input
              type='password'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder='Nossa palavrinha secreta'
              className='w-full rounded-xl border border-rose-200 bg-white/90 px-3 py-2 text-sm text-rose-900 placeholder:text-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400'
            />
            <button
              type='submit'
              className='w-full rounded-xl bg-rose-500 px-3 py-2 text-sm font-medium text-rose-50 transition hover:bg-rose-400'
            >
              Entrar
            </button>
          </form>
        </section>
      )}

      {/* INTRO */}
      {view === 'intro' && (
        <section className='m-auto w-full rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-md shadow-rose-200'>
          <p className='mb-3 text-sm uppercase tracking-[0.2em] text-rose-500'>
            Para Anita 💌
          </p>
          <h1 className='mb-4 text-2xl font-semibold text-rose-800'>
            Um diáriozinho só pra você
          </h1>
          <p className='mb-3 whitespace-pre-line text-sm leading-relaxed text-rose-900'>
            {`Oi, amor.

Fiz esse lugarzinho pra deixar recados, pensamentos aleatórios e lembranças que eu tenho de você.

Quando bater saudade, quando o dia estiver pesado, ou quando você só quiser um carinho em forma de texto, é só passar aqui.

Mesmo quando não der pra eu falar contigo na hora, eu ainda tô aqui. 💕`}
          </p>
          <button
            onClick={handleIntroContinue}
            className='mt-4 w-full rounded-xl bg-rose-500 px-3 py-2 text-sm font-medium text-rose-50 transition hover:bg-rose-400'
          >
            Ver os recados ✨
          </button>
        </section>
      )}

      {/* TIMELINE */}
      {view === 'timeline' && (
        <>
          <header className='mb-4'>
            <p className='mb-1 text-xs uppercase tracking-[0.25em] text-rose-500'>
              Para Anita
            </p>
            <h1 className='text-2xl font-semibold text-rose-800'>
              Olá, Anita 💌
            </h1>
            <p className='mt-2 text-sm text-rose-700'>
              Um fiozinho de pensamentos e recados meus pra você.
            </p>
          </header>

          {/* BUSCA */}
          <div className='mb-6'>
            <input
              type='text'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder='Buscar um recado, palavra, sensação...'
              className='w-full rounded-2xl border border-rose-200 bg-white/90 px-4 py-2 text-sm text-rose-900 placeholder:text-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400'
            />
          </div>

          {/* POSTS */}
          <section className='space-y-6'>
            {datesToShow.map((date) => (
              <div key={date} className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='h-px flex-1 bg-rose-200' />
                  <span className='text-xs font-medium uppercase tracking-wide text-rose-500'>
                    {formatDisplayDate(date)}
                  </span>
                  <div className='h-px flex-1 bg-rose-200' />
                </div>

                <div className='space-y-3'>
                  {grouped[date].map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            ))}

            {datesToShow.length === 0 && (
              <p className='text-sm text-rose-700'>
                Não achei nada com esse jeitinho de busca… tenta outra palavra?
                💭
              </p>
            )}
          </section>

          {/* PAGINAÇÃO */}
          {totalPages > 1 && (
            <div className='mt-6 flex items-center justify-center gap-3'>
              <button
                type='button'
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className='rounded-full px-3 py-1 text-xs border border-rose-300 text-rose-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rose-200/80'
              >
                ← Anterior
              </button>
              <span className='text-xs text-rose-700'>
                Página {currentPage} de {totalPages}
              </span>
              <button
                type='button'
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className='rounded-full px-3 py-1 text-xs border border-rose-300 text-rose-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-rose-200/80'
              >
                Próxima →
              </button>
            </div>
          )}

          <footer className='mt-10 border-t border-rose-200 pt-4 text-center text-[11px] text-rose-600'>
            Feito com carinho só pra você, Anita. 💙
          </footer>
        </>
      )}
    </main>
  );
}
