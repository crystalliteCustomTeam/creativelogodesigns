// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "New LP 3 - Custom Logo Design",
    description: "Discover premium logo design services from our top logo design company. Elevate your brand with custom logos with Creative Logo Designs, a trusted logo design agency.",
    // Google Varification
    verification: {
        // google: 'ziIYRBahP4WcKcps6RWRDJvZ9A00pSoI39ByXDN14us',
        other: {
            "facebook-domain-verification": ['9mgotld2pcip5yvdv6yajdqx71xfvt'],
        },
    },
    // Canonical
    alternates: {
        canonical: 'https://www.creativelogodesigns.io/new-lp-2',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}
export default function RootLayout({ children }) {
    return (children);
}