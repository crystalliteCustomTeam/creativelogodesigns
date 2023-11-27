import Hero from "./components/hero";
import Packages from "./components/packages";
import Portfolio from "./components/portfolio";
import Satisfaction from "./components/satisfaction";
import Services from "./components/services";
import SmallBanner from "./components/smallbanner";
import Combo from "./components/combo";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "@/components/footer/footer";
import Header from "./components/header";
import PopupAlert from "@/components/popup-alert/popup-alert";

const Page = () => {
    return (
        <main>
            <Header />
            <Hero />
            <Satisfaction />
            <Portfolio />
            <Services />
            <SmallBanner />
            <Packages />
            <Combo />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    )
}

export default Page;