// Next Components
import Image from "next/image";
// Components
import CTA from "C/CTA";

const SmallBanner = ({ content }) => {
    const { title, desc, img } = content;
    return (
        <section>
            <div className="bg-gray-200">
                <div className="container relative py-[50px] lg:py-0 lg:h-[350px] flex items-center">
                    <div className="lg:basis-[60%]">
                        <h2 className="text-[20px] sm:text-[25px] xl:text-[30px] font-megat font-extrabold leading-tight text-black mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                        <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
                            <CTA
                                text="Start Live Chat"
                                href="javascript:$zopim.livechat.window.show();"
                                bg="bg-black"
                                icon="/icons/chat.svg"
                                css="hover:bg-light-yellow"
                            />
                            <CTA
                                text="(855) 666-6675"
                                href="tel:8556666675"
                                bg="bg-red"
                                css="hover:bg-light-yellow"
                            />
                        </div>
                    </div>
                    <div className="hidden lg:block lg:basis-[40%]">
                        <Image src={img.src} alt="smallBanner" width={img.width} height={img.height} className={`${img.css} m-auto block`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallBanner;