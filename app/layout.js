export const metadata = {
  title: 'VoxTelugu',
  description: 'మన ప్రాంతపు డిజిటల్ వాయిస్',
}

export default function RootLayout({ children }) {
  return (
    <html lang="te">
      <body>{children}</body>
    </html>
  )
}
