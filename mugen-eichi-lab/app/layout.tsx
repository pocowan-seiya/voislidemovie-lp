import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '無限叡智ラボ | AI×意識 実践コミュニティ',
  description:
    '見えない制限を手放し、じぶんの無限の叡智を復活し、最高のビジョンを、AIとの共創で形にしていく。1番のワクワクを生きる実践の場。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
