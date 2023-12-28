// Import Fonts
import { primary, integralCF, poppins } from "./configs/fonts";
import Script from 'next/script';

// Import Css
import "./global.css";

// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "Logo Design Company Available for Hire | Creative Logo Designs",
    description: "Creative Logo Designs offers exceptional custom logo design services that help individuals catapult their brand’s image to a whole new level.",
    // Google Varification
    verification: {
        // google: 'ziIYRBahP4WcKcps6RWRDJvZ9A00pSoI39ByXDN14us',
        other: {
            "facebook-domain-verification": ['9mgotld2pcip5yvdv6yajdqx71xfvt'],
        },
    },
    // Canonical
    alternates: {
        canonical: 'https://www.creativelogodesigns.io',
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <meta name="robots" content="noindex,nofollow" />
            <meta name="google-site-verification" content="oRRvrt9HL1PkpQakQCE0ITO-MCwT2yAORGOsdwEcLEo" />
            <Script
                id="ze-snippet"
                src="https://static.zdassets.com/ekr/snippet.js?key=fbc0fae5-0759-4e3e-bc7f-920b1acc2d5d"
                strategy="lazyOnload"
            >
            </Script>
            <Script
                id="google-analytics-script"
                src="https://www.googletagmanager.com/gtag/js?id=G-7TVYY8KVVW"
                strategy="lazyOnload"
            >
            </Script>
            <Script id="facebook-manager-snippet" strategy="lazyOnload">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '3404182666490229');
                    fbq('track', 'PageView');
                `}
            </Script>
            <Script id="google-analytics-code" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-7TVYY8KVVW');                  
                `}
            </Script>
            <Script id="google-tag-manager" strategy="lazyOnload">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-58LZ82L9');                                    
                `}
            </Script>
            <body className={`${primary.variable} ${integralCF.variable}  ${poppins.variable}`}>
                <noscript>
                    <iframe src="https://www.facebook.com/tr?id=3404182666490229&ev=PageView&noscript=1" className="hidden">
                    </iframe>
                </noscript>
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58LZ82L9" className="hidden"></iframe>
                </noscript>
                {children}
            </body>
        </html >
    );
}