// Next
import Image from "next/image"
// Images
import logo from "media/logo.png"
import heroBG from "media/logo-offer-lp/hero-bg.png"
import check from "media/packages/checkCircle.png"
import heroAward1 from "media/logo-offer-lp/hero-award-1.webp"
import heroAward2 from "media/logo-offer-lp/hero-award-2.webp"
import heroAward3 from "media/logo-offer-lp/hero-award-3.webp"
// Components
import { CTA, HeroSlider, OurWork } from "./components"

export default function Page() {
    return (
        <main className="font-poppins">
            <section>
                <div className="relative z-10">
                    <Image src={heroBG} alt="heroBG" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div>
                                <div className="grid grid-cols-1 gap-y-5 sm:flex justify-between items-center xs:pt-5 pt-10">
                                    <Image src={logo} alt="logo" className="brightness-0 invert xs:mx-auto" />
                                    <div className="xs:justify-center flex gap-5 lg:gap-3 xl:gap-5 text-yellow-500">
                                        <CTA text="Call Now (855) 666-6675" href="tel:(855)666-6675" classes="hover:text-white" />
                                        <CTA text="Live Chat" href="javascript:$zopim.livechat.window.show();" classes="text-white hover:text-yellow-500" />
                                    </div>
                                </div>
                                <div className="py-[60px] xl:py-[100px] xs:py-[40px] text-white">
                                    <h1 className="xs:text-[25px] text-[30px] xl:text-[40px] font-bold leading-tight">
                                        Build Your <span className="text-yellow-500">Brand Identity</span> <br className="hidden lg:block" /> By Getting a Custom and <br className="hidden lg:block" /> Professional Logo.
                                    </h1>
                                    <ul className="text-[18px] my-5 leading-relaxed">
                                        {
                                            ["Unique and Custom Logo Concepts", "Multiple Revisions", "100% Ownership Rights", "24 Hour Turnaround Time", "100% Satisfaction"].map((text) => (
                                                <li key={text} className="flex gap-2 items-center">
                                                    <Image src={check} alt="check" />
                                                    <span>{text}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="flex gap-5 mb-5">
                                        <CTA text="Call Now" href="tel:(855)666-6675" variant="primary" />
                                        <CTA text="Live Chat" href="javascript:$zopim.livechat.window.show();" variant="secondary" />
                                    </div>
                                    <div className="flex gap-5">
                                        {
                                            [heroAward3, heroAward2, heroAward1].map((img, i) => (
                                                <Image src={img} alt="img" key={i} className="xs:h-[70px] xs:w-auto" />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <HeroSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <OurWork />
        </main>
    )
}