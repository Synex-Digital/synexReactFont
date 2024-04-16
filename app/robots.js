export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // disallow: "/private/",
        },
        sitemap: "https://synexdigital.com/sitemap.xml",
    };
}
