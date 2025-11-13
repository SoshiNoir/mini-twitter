import type { Comentario } from '@/types'; // Importação segura com 'type'

interface PostCommentsProps {
  comentarios: Comentario[];
}

export default function PostComments({ comentarios }: PostCommentsProps) {
  if (!comentarios || comentarios.length === 0) {
    return null;
  }

  return (
    <div className='mt-6 border-t pt-4 border-gray-200'>
      <h4 className='text-md font-bold text-gray-700 mb-3'>
        Comentários ({comentarios.length})
      </h4>
      <div className='space-y-3'>
        {comentarios.map((comment) => (
          <div key={comment.id} className='bg-gray-50 p-3 rounded-lg'>
            <p className='font-semibold text-gray-800'>{comment.autor}</p>
            <p className='text-gray-600 text-sm mt-1 leading-snug'>
              {comment.texto}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
