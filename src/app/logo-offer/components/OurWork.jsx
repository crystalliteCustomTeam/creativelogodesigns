"use client"
// Next
import Image from "next/image"
// Images
import ourWorks1 from "media/logo-offer-lp/our-works/1.png"
import ourWorks2 from "media/logo-offer-lp/our-works/2.png"
import ourWorks3 from "media/logo-offer-lp/our-works/3.png"
import ourWorks4 from "media/logo-offer-lp/our-works/4.png"
import ourWorks5 from "media/logo-offer-lp/our-works/5.png"
import ourWorks6 from "media/logo-offer-lp/our-works/6.png"
import ourWorks7 from "media/logo-offer-lp/our-works/7.png"
import ourWorks8 from "media/logo-offer-lp/our-works/8.png"
import ourWorks9 from "media/logo-offer-lp/our-works/9.png"
import ourWorks10 from "media/logo-offer-lp/our-works/10.png"
import ourWorks11 from "media/logo-offer-lp/our-works/11.png"
import ourWorks12 from "media/logo-offer-lp/our-works/12.png"
import ourWorks13 from "media/logo-offer-lp/our-works/13.png"
import ourWorks14 from "media/logo-offer-lp/our-works/14.png"
import ourWorks15 from "media/logo-offer-lp/our-works/15.png"
import ourWorks16 from "media/logo-offer-lp/our-works/16.png"
import ourWorks17 from "media/logo-offer-lp/our-works/17.png"
import ourWorks18 from "media/logo-offer-lp/our-works/18.png"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

const OurWork = () => {
    const [emblaHeroRef1] = useEmblaCarousel({ loop: true, dragFree: true }, [
        AutoScroll({ playOnInit: true, speed: 0.3, })
    ])
    const [emblaHeroRef2] = useEmblaCarousel({ loop: true, dragFree: true }, [
        AutoScroll({ playOnInit: true, speed: 0.3, direction: "backward" })
    ])
    const [emblaHeroRef3] = useEmblaCarousel({ loop: true, dragFree: true }, [
        AutoScroll({ playOnInit: true, speed: 0.3, })
    ])
    return (
        <section>
            <div className="[backface-visibility:hidden;] overflow-hidden py-[40px] md:py-[60px]">
                <div className="container">
                    <div className="text-center text-black mb-10">
                        <h2 className="xs:text-[25px] text-[30px] lg:text-[40px] font-bold leading-tight">
                            Some of Our Latest Work
                        </h2>
                        <p className="text-[14px] md:text-[16px] xl:text-[18px] mt-3 leading-relaxed md:max-w-[80%] xl:max-w-[70%] mx-auto">
                            Your Journey towards success starts with a professionally designed and creatively crafted logo. Get insight into our creative work.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2 md:gap-5">
                    <div className="overflow-hidden" ref={emblaHeroRef1}>
                        <div className="flex gap-2 md:gap-4 [backface-visibility:hidden;] [-webkit-backface-visibility:hidden;] [touch-action:pan-y;] -ml-2 md:-ml-4">
                            {
                                [ourWorks1, ourWorks2, ourWorks3, ourWorks4, ourWorks5, ourWorks6].map((e, i) => (
                                    <div key={i} className="[flex:0_0_35%] md:[flex:0_0_25%]">
                                        <Image src={e} alt={i} className="w-full h-full rounded-[15px] md:rounded-[25px] rounded-tl-none" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="overflow-hidden" ref={emblaHeroRef2}>
                        <div className="flex gap-2 md:gap-4 [backface-visibility:hidden;] [-webkit-backface-visibility:hidden;] [touch-action:pan-y;] -ml-2 md:-ml-4">
                            {
                                [ourWorks7, ourWorks8, ourWorks9, ourWorks10, ourWorks11, ourWorks12].map((e, i) => (
                                    <div key={i} className="[flex:0_0_35%] md:[flex:0_0_25%]">
                                        <Image src={e} alt={i} className="w-full h-full rounded-[15px] md:rounded-[25px] rounded-tl-none" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="overflow-hidden" ref={emblaHeroRef3}>
                        <div className="flex gap-2 md:gap-4 [backface-visibility:hidden;] [-webkit-backface-visibility:hidden;] [touch-action:pan-y;] -ml-2 md:-ml-4">
                            {
                                [ourWorks13, ourWorks14, ourWorks15, ourWorks16, ourWorks17, ourWorks18].map((e, i) => (
                                    <div key={i} className="[flex:0_0_35%] md:[flex:0_0_25%]">
                                        <Image src={e} alt={i} className="w-full h-full rounded-[15px] md:rounded-[25px] rounded-tl-none" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork