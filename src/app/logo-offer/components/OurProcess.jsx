"use client"
// Style
import style from "./our-process.module.css"
// React
import React, { useState, useEffect, useCallback } from "react"
// Embla
import useEmblaCarousel from "embla-carousel-react"
// Images
import ourProcess1 from "media/logo-offer-lp/our-process/1.png"
import ourProcess2 from "media/logo-offer-lp/our-process/2.png"
import ourProcess3 from "media/logo-offer-lp/our-process/3.png"
import ourProcess4 from "media/logo-offer-lp/our-process/4.png"
import ourProcess5 from "media/logo-offer-lp/our-process/5.png"
import Image from "next/image"

const Thumb = ({ onClick, img, text, selected, index }) => {

    return (
        <div
            className={style.embla_thumbs__slide.concat(
                selected ? ` ${style.embla_thumbs__slide__selected}` : ""
            )}
        >
            <div
                onClick={onClick}
                className={`p-5 text-center rounded-[15px] md:rounded-[25px] !rounded-tl-none md:h-[300px] grid grid-cols-1 items-center border-2 border-[#efe9e9] bg-white ${selected ? "[box-shadow:0_14px_20px_10px_rgba(47,36,129,.13)]" : ""}`}
            >
                <span className={`hidden lg:block leading-[0.8] -z-10 absolute top-[-60px] left-0 right-0 text-[150px] font-extrabold ${selected ? "text-yellow-500" : "text-[#efe9e9]"}`}>{index}</span>
                <Image src={img} alt="img" className={`inline-block`} />
                <h4 className="block text-[14px] lg:text-[12px] xl:text-[16px] font-bold text-black">{text}</h4>
            </div>
        </div>
    )
}

const options = {}
const slide_count = 5
const slides = Array.from(Array(slide_count).keys())


const OurProcess = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        setSelectedIndex(emblaMainApi.selectedScrollSnap())
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()
        emblaMainApi.on("select", onSelect)
        emblaMainApi.on("reInit", onSelect)
    }, [emblaMainApi, onSelect])

    return (
        <section>
            <div className="pt-[40px] md:pt-[60px] bg-gray-100">
                <div className="container">
                    <div className="text-center text-black mb-10">
                        <h2 className="xs:text-[25px] text-[30px] lg:text-[40px] font-bold leading-tight">
                            Our Process
                        </h2>
                    </div>
                    <div className={`${style.embla}`}>
                        <div className={`${style.embla__viewport}`} ref={emblaMainRef}>
                            <div className={`${style.embla__container}`}>
                                {[
                                    ["Consultancy", "We start with discovering your business. We learn everything about the company culture, your values & how you do business, and then instill that message in the deliverable."],
                                    ["Brain Storming", "We study your project requirements, industry, competitors, and everything relevant. We brainstorm the raw ideas you have and refine them into a close-to-final-version form."],
                                    ["Initial Designs", "Here we present the initial draft to you based on our findings and your brief. You can select any one from the proposed work. We make sure all your demands are met."],
                                    ["Customer Review", "Considering a wide range of options to choose from, you can select the most preferred concept that you think compliments your business in all ways possible. We�ll then refine it further."],
                                    ["Final Delivery", "Once the design is finalized, we ensure you get the deliverable in desired file formats. The process is set to be completed on time so that you can have your delivery within or before the deadline."]
                                ].map(([title, desc], index) => (
                                    <div className={`${style.embla__slide}`} key={index}>
                                        <div className="text-black">
                                            <h3 className="font-poppins text-[25px] lg:text-[30px] font-bold leading-tight">{title}</h3>
                                            <p className="font-poppins text-[13px] lg:text-[14px] mt-3 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`${style.embla_thumbs} px-5`}>
                            <div className={`${style.embla_thumbs__viewport}`} ref={emblaThumbsRef}>
                                <div className={`${style.embla_thumbs__container} py-[40px] md:py-[60px]`}>
                                    {[
                                        [ourProcess1, "Consultancy"],
                                        [ourProcess2, "Brain Storming"],
                                        [ourProcess3, "Initial Designs"],
                                        [ourProcess4, "Final Delivery"],
                                        [ourProcess5, "Final Delivery"],
                                    ].map(([img, text], index) => (
                                        <Thumb
                                            key={index}
                                            onClick={() => onThumbClick(index)}
                                            selected={index === selectedIndex}
                                            text={text}
                                            img={img}
                                            index={index + 1}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurProcess