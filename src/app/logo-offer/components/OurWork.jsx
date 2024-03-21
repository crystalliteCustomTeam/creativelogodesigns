"use client"
// Next
import Image from "next/image"
// Images
import portfolios1 from "media/logo-offer-lp/portfolios/1.png"
import portfolios2 from "media/logo-offer-lp/portfolios/2.png"
import portfolios3 from "media/logo-offer-lp/portfolios/3.png"
import portfolios4 from "media/logo-offer-lp/portfolios/4.png"
import portfolios5 from "media/logo-offer-lp/portfolios/5.png"
import portfolios6 from "media/logo-offer-lp/portfolios/6.png"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

const OurWork = () => {
    const [emblaHeroRef1] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: false, })
    ])
    const [emblaHeroRef2] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: false, direction: "backward" })
    ])
    const [emblaHeroRef3] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: false })
    ])
    return (
        <section>
            <div>
                <div className="container">

                </div>
                <div className="grid grid-cols-1 gap-5">
                    <div className="overflow-hidden" ref={emblaHeroRef1}>
                        <div className="flex gap-4 [backface-visibility:hidden;] [touch-action:pan-y;] -ml-4">
                            {
                                [portfolios1, portfolios2, portfolios3, portfolios4, portfolios5, portfolios6].map((e, i) => (
                                    <div key={i} className="[flex:0_0_25%]">
                                        <Image src={e} alt={i} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="overflow-hidden" ref={emblaHeroRef2}>
                        <div className="flex gap-4 [backface-visibility:hidden;] [touch-action:pan-y;] -ml-4">
                            {
                                [portfolios6, portfolios5, portfolios4, portfolios3, portfolios2, portfolios1].map((e, i) => (
                                    <div key={i} className="[flex:0_0_25%]">
                                        <Image src={e} alt={i} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="overflow-hidden" ref={emblaHeroRef3}>
                        <div className="flex gap-4 [backface-visibility:hidden;] [touch-action:pan-y;] -ml-4">
                            {
                                [portfolios6, portfolios5, portfolios4, portfolios3, portfolios2, portfolios1].map((e, i) => (
                                    <div key={i} className="[flex:0_0_25%]">
                                        <Image src={e} alt={i} />
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