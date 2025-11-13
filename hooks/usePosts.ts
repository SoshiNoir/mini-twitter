'use client';

import type { Post } from '@/types/post';
import { useEffect, useState } from 'react';
import { postsData } from '../data/posts'; // ✅ named export

const STORAGE_KEY = 'mini-twitter-posts';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Carregar do localStorage OU do JSON inicial
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      setPosts(postsData); // ✅ usa os posts iniciais do arquivo .ts
    }
  }, []);

  // Sempre que mudar, salvar no localStorage
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }
  }, [posts]);

  // Adicionar post
  function addPost(novo: Post) {
    setPosts((prev) => [novo, ...prev]);
  }

  // Editar post
  function editPost(id: number, atualizado: Partial<Post>) {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...atualizado } : p))
    );
  }

  // Adicionar comentário
  function addComment(postId: number, autor: string, texto: string) {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
            ...p,
            comentarios: [
              ...p.comentarios,
              {
                id: Date.now(),
                autor,
                texto,
                data: new Date().toISOString(),
              },
            ],
          }
          : p
      )
    );
  }

  return { posts, addPost, editPost, addComment };
}
