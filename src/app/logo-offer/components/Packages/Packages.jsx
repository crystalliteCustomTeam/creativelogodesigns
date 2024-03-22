import Image from "next/image";
import check from "media/packages/checkCircle.png"
import { CTA } from "@/app/logo-offer/components";
import data from "@/components/pricingAndPackages/data"

const Packages = () => {
    return (
        <div className="lg:py-16 md:py-14 py-10 bg-[#f7fafc]">
            <div className="container">
                <div className="text-center 2xl:w-[90%] 2xl:mx-auto">
                    <h2 className="2xl:text-[38px] leading-tight md:text-[35px] sm:text-3xl text-[25px] font-bold mb-2">Our Most Affordable Custom Packages</h2>
                    <p className="2xl:text-lg md:text-base text-sm leading-normal">We have got you covered with the most affordable pricing plans that are market competitive, with free features that you will love for your business</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-[90%] mx-auto items-center gap-x-5 mt-8">
                    {data[0].packages.map((e, i) => (
                        <div key={i} className="text-center bg-white shadow-xl p-[30px] border-2 border-transparent rounded-[0_16px_16px_16px] hover:border-[#2732453b] group">
                            <div className="border-b border-[#000] mb-5">
                                <h2 className="md:text-3xl text-2xl leading-tight font-bold pb-3">{e.name}</h2>
                                <h2 className="lg:text-[60px] md:text-[50px] text-[40px] leading-tight font-extrabold pb-3 text-[#333]">{e.discountedPrice}</h2>
                            </div>
                            <div className="text-start h-[200px] overflow-y-scroll">
                                <ul>
                                    {e.list &&
                                        e.list.map((e, i) => (
                                            <li key={i} className="flex items-center gap-x-3 mb-3">
                                                <Image src={check} alt="check" className="block brightness-100 invert w-[19px] h-[19px]" />
                                                <span className="block leading-normal text-sm">{e}</span></li>
                                        ))}
                                </ul>
                            </div>
                            <div className="my-8">
                                <CTA text="Order Now" href={e.paymentURL} variant="secondary" classes="bg-yellow-500 group-hover:opacity-80" />
                            </div>
                            <div className="border-t border-[#e0dbdb7d] pt-4">
                                <div className="flex justify-between">
                                    <a href="tel:(332) 282-5383" className="block md:text-base text-sm font-medium text-[#666]">
                                        <small className="block text-black">Share your idea?</small>
                                        (855)666-6675
                                    </a>
                                    <a href="javascript:$zopim.livechat.window.show();" className="block md:text-base text-sm font-medium text-[#666]">
                                        <small className="block text-black">Want to discuss?</small>
                                        Live Chat Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Packages;