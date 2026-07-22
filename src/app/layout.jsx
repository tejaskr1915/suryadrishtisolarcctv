import './globals.css';

export const metadata = {
  title: 'Surya Drishti - AI Powered Smart Surveillance',
  description: 'Bilingual Custom Solar CCTV Configuration, custom designs, and smart surveillance options.',
  icons: {
    icon: '/favicon.svg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
