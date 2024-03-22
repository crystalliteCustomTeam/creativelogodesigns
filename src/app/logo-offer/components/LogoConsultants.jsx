// Next
import Image from "next/image";
// Media
import CTABg from "media/logo-offer-lp/cta-bg.png"
import { CTA } from "@/app/logo-offer/components"

const LogoConsultants = ({
    title,
    desc

}) => {
    return (
        <section>
            <div className="relative z-10 sm:py-[50px] py-[40px]">
                <Image src={CTABg} alt="cta-bg" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
                <div className="container">
                    <div className="md:flex lg:gap-x-5 gap-x-3 justify-center items-center">
                        <div className="lg:basis-[55%] md:basis-[60%] text-white">
                            <h2 className="2xl:text-[40px] sm:text-[28px] leading-tight md:text-[25px] text-[20px] font-bold mb-2" dangerouslySetInnerHTML={{__html : title}} />
                            <p className="2xl:text-[22px] md:text-lg text-sm font-normal leading-normal" dangerouslySetInnerHTML={{__html: desc}} />
                        </div>
                        <div className="md:basis-[40%] md:mt-0 sm:mt-10 mt-8">
                            <div className="flex justify-center items-center gap-x-5 mb-5">
                                <CTA text="Get Started" href="tel:(855)666-6675" variant="primary" />
                                <CTA text="Live Chat" href="javascript:$zopim.livechat.window.show();" variant="secondary" />
                            </div>
                            <CTA text="(855) 666-6675" href="tel:(855)666-6675" classes="text-white text-center block w-full hover:text-white/06" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogoConsultants;