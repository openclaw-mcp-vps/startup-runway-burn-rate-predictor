import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runway Predictor — Know When Your Startup Runs Out of Money",
  description: "ML-powered burn rate and runway prediction for startup founders and CFOs. Upload your financials and get instant runway forecasts.",
  keywords: "startup runway, burn rate calculator, startup finance, runway predictor, CFO tools",
  openGraph: {
    title: "Runway Predictor — Predict startup runway based on growth metrics",
    description: "ML-powered burn rate and runway prediction for startup founders and CFOs.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5219be57-e126-4eff-b9d4-8fbb861240f5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
