export const metadata = {
  title: "AMICO Việt Nam",
  description: "Connecting Industrial Flow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
