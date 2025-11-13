'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'anita-diary-reactions';

function loadReactions(): Record<string, boolean> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveReactions(reactions: Record<string, boolean>) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reactions));
}

interface ReactionButtonProps {
  postId: string | number;
}

export function ReactionButton({ postId }: ReactionButtonProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const reactions = loadReactions();
    if (reactions[String(postId)]) {
      setLiked(true);
    }
  }, [postId]);

  function toggleLike() {
    const reactions = loadReactions();
    const nextLiked = !liked;
    reactions[String(postId)] = nextLiked;
    saveReactions(reactions);
    setLiked(nextLiked);
  }

  return (
    <button
      type='button'
      onClick={toggleLike}
      className={`
        inline-flex items-center justify-center
        rounded-full
        border
        px-2 py-1
        text-sm
        transition
        ${
          liked
            ? 'border-pink-400 bg-pink-500/30 text-pink-100'
            : 'border-pink-500/40 bg-pink-500/10 text-pink-200 hover:bg-pink-500/20'
        }
      `}
    >
      <span
        aria-hidden
        className={`transition-transform ${liked ? 'scale-125' : 'scale-100'}`}
      >
        {liked ? '💗' : '🤍'}
      </span>
    </button>
  );
}
