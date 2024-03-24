import {
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NEXT_PUBLIC_GA_TRACKING_ID,
} from './server-constants'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/global.css'
import '../styles/syntax-coloring.css'
import styles from '../styles/shared.module.css'

export const metadata = {
  metadataBase: NEXT_PUBLIC_URL ? new URL(NEXT_PUBLIC_URL) : undefined,
  title: NEXT_PUBLIC_SITE_TITLE,
  description: NEXT_PUBLIC_SITE_DESCRIPTION,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja" prefix="og: https://ogp.me/ns#">
    <body>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </body>
    {NEXT_PUBLIC_GA_TRACKING_ID ? (
      <GoogleAnalytics gaId={NEXT_PUBLIC_GA_TRACKING_ID} />
    ) : undefined}
  </html>
)

export default RootLayout
