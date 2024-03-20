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

const HeroSlider = () => {
    const [emblaHeroRef1] = useEmblaCarousel({ loop: true, axis: 'y' }, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: false, speed: 1, stopOnFocusIn: false, dragFree: true, watchSlides: false, watchResize: false, })
    ])
    const [emblaHeroRef2] = useEmblaCarousel({ loop: true, axis: 'y' }, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: false, speed: 1, stopOnFocusIn: false, dragFree: true, watchSlides: false, watchResize: false, direction: "backward" })
    ])
    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden" ref={emblaHeroRef1}>
                <div className="flex flex-col [backface-visibility:hidden] [touch-action:pan-y] h-[698px] xl:h-[815px]">
                    {
                        [portfolios1, portfolios2, portfolios3, portfolios4, portfolios5, portfolios6].map((e, i) => (
                            <div key={i} className="h-[350px] mb-5">
                                <Image src={e} alt={i} className="h-full max-w-[90%] mx-auto" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="overflow-hidden" ref={emblaHeroRef2}>
                <div className="flex flex-col [backface-visibility:hidden] [touch-action:pan-y] h-[698px] xl:h-[815px]">
                    {
                        [portfolios6, portfolios5, portfolios4, portfolios3, portfolios2, portfolios1].map((e, i) => (
                            <div key={i} className="h-[350px] mb-5">
                                <Image src={e} alt={i} className="h-full max-w-[90%] mx-auto" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSlider