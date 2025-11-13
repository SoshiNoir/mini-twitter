'use client';

import type { Post } from '@/types/post';
import { useEffect, useState } from 'react';
// usa o export atual de data/posts
import { posts as initialPosts } from '@/data/posts';

const STORAGE_KEY = 'mini-twitter-posts';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Carregar do localStorage OU dos posts iniciais
  useEffect(() => {
    try {
      if (typeof window === 'undefined') {
        setPosts(initialPosts);
        return;
      }

      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPosts(JSON.parse(saved));
      } else {
        setPosts(initialPosts);
      }
    } catch {
      setPosts(initialPosts);
    }
  }, []);

  // Sempre que mudar, salvar no localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (posts.length === 0) return;

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  // Adicionar post
  function addPost(novo: Post) {
    setPosts((prev) => [novo, ...prev]);
  }

  // Editar post
  function editPost(id: Post['id'], atualizado: Partial<Post>) {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...atualizado } : p))
    );
  }

  // Adicionar comentário (usando comments, author, text, date)
  function addComment(postId: Post['id'], author: string, text: string) {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
            ...p,
            comments: [
              ...(p.comments ?? []),
              {
                id: Date.now(),
                author,
                text,
                date: new Date().toISOString(),
              },
            ],
          }
          : p
      )
    );
  }

  return { posts, addPost, editPost, addComment };
}
