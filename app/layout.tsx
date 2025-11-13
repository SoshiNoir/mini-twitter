import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nosso Feed 💖',
  description: 'Mini Twitter só nosso',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR' className='bg-pink-50 text-gray-800'>
      <body className='min-h-screen bg-pink-50 text-gray-800'>{children}</body>
    </html>
  );
}
