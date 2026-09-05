import React from "react";
import Script from "next/script";

export interface AnalyticsProps {
  gaId?: string;
  gtmId?: string;
}

export function Analytics({
  gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
}: AnalyticsProps) {
  return (
    <>
      {/* 1. Google Tag Manager (GTM) Container Script */}
      {gtmId && (
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* 2. Google Analytics 4 (GA4) Direct gtag Script */}
      {gaId && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          />
          <Script
            id="google-analytics-ga4"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}

/**
 * GTM Body Noscript component for iframe fallback (renders inside <body>)
 */
export function GTMNoscript({
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
}: {
  gtmId?: string;
}) {
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

/**
 * Client helper to log custom GA4 / GTM events
 */
export function logAnalyticsEvent(
  eventName: string,
  eventParams: Record<string, any> = {}
) {
  if (typeof window !== "undefined") {
    if ((window as any).gtag) {
      (window as any).gtag("event", eventName, eventParams);
    }
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  }
}
