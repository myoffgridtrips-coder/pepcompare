import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'PepCompare - Peptide Price Comparison',
    description: 'Compare peptide prices across UK suppliers',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="en">
                <body>{children}</body>body>
          </html>html>
        )
}</html>
