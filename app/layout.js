import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const intertight = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
    title: "Synex Digital",
    description:
        "We are the Synex Digital Team and are Highly Motivated to Give You The Best and effective on-time Results for Your Online Presence and Traffic Growth.",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Synex Digital",
    description:
        "We are the Synex Digital Team and are Highly Motivated to Give You The Best and effective on-time Results for Your Online Presence and Traffic Growth.",
    url: "http://synexdigital.com",
    image: "http://synexdigital.com/asset/Frontend/logo_dsefault.png",
    logo: "http://synexdigital.com/asset/Frontend/logo_dsefault.png",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Dhanmondi",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka",
        postalCode: "1208",
        addressCountry: "Bangladesh",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+8801757647319",
        contactType: "Customer Support",
        email: "digitalsynex@gmail.com",
    },
    sameAs: [
        "https://www.upwork.com/ag/synexdigital",
        "https://www.linkedin.com/company/synex-digital",
    ],
    foundingDate: "2023",
    founder: [
        {
            "@type": "Person",
            name: "Ali Imran Mehedi",
            sameAs: "https://www.linkedin.com/in/ali-imran-mehedi-601bab290",
            image: "https://media.licdn.com/dms/image/D4E03AQGmCJN8rN374Q/profile-displayphoto-shrink_200_200/0/1694458382289?e=1701907200&v=beta&t=gHFXBV7cAki0gPqaGmzF74aeiNGWK6DdFyvREKjM0vc",
            jobTitle: "Founder",
        },
        {
            "@type": "Person",
            name: "Md Ismail Hossain",
            sameAs: "https://www.linkedin.com/in/md-ismail-hossain-911a96236",
            image: "https://media.licdn.com/dms/image/C5603AQHb9Gbn9OLYUA/profile-displayphoto-shrink_200_200/0/1664188182447?e=1701907200&v=beta&t=giVYihC6XF4cYBupoObOYadjq-cqAkQ82qaqDRoUus4",
            jobTitle: "Founder",
        },
    ],
    employees: "10+",
    keywords:
        "web development, web application development, UI/UX design, digital agency",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={intertight.className}>
                <Navbar />
                {children}
                <Footer />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}
