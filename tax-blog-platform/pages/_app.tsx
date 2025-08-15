import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="UK Tax & Accounting Blog | Expert Guides on Tax Compliance"
        description="Comprehensive guides on UK tax and accounting including annual accounts, corporation tax, self-assessment, and allowable expenses. Expert advice for businesses and individuals."
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://yourdomain.com/',
          site_name: 'UK Tax & Accounting Blog',
          images: [
            {
              url: 'https://yourdomain.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'UK Tax & Accounting Blog',
            },
          ],
        }}
        twitter={{
          handle: '@yourtaxblog',
          site: '@yourtaxblog',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp