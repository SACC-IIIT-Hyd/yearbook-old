import Footer from "./footer";
import Navbar from "./navbar";
import Testimonial from "./testimonial";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
