import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://m-travels.example'),
  title: { default: "M TRAVEL'S | Visa Assistance Made Simple", template: "%s | M TRAVEL'S" },
  description: "Step-by-step visa guidance for tourist, business, student, family and work travel. Contact M TRAVEL'S for personal assistance.",
  applicationName: "M TRAVEL'S",
  openGraph: { type: 'website', title: "M TRAVEL'S | Visa Assistance Made Simple", description: 'Clear, practical visa guidance from eligibility to submission.', images: ['/og-image.svg'] },
  twitter: { card: 'summary_large_image', title: "M TRAVEL'S | Visa Assistance Made Simple", description: 'Clear, practical visa guidance from eligibility to submission.', images: ['/og-image.svg'] },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /><CookieBanner /></body></html>;
}
