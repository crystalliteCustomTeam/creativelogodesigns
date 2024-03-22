"use client"
// Components
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import checkCircle from "media/packages/checkCircle.png";
import cmboBG from "media/logo-offer-lp/cmbo-new-pck.png";
import Image from "next/image";
import { CTA } from "@/app/logo-offer/components";

const Combo = () => {
    let combo1A = [
        " Unlimited Original Logo Concepts",
        " 8 Dedicated Logo Designer (Industry Specific)",
        " Unlimited Revisions",
        " 5 Page Basic Website",
        " Stationery Design (Business Card, Letterhead, Envelope)",
        " 500 Business Cards ",
        " Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        " 500 Letterheads",
        " Email Signature Design",
        " Social Media Designs (Facebook, Twitter, Instagram)",
    ];
    let combo1B = [
        " 2 Sided Flyer OR Bi-Fold Brochure Design",
        " With Grey Scale Format",
        " Free Icon Design",
        " Brand Book",
        " 24 - 48 Hours Turn Around Time",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
    ];
    let combo2A = [
        " Unlimited Original Logo Concepts",
        " 8 Dedicated Logo Designer (Industry Specific)",
        " Unlimited Revisions",
        " Ecommerce Website",
        " Stationery Design (Business Card, Letterhead, Envelope)",
        " 500 Business Cards ",
        " Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        " Upto 100 Products",
        " Email Signature Design",
        " Social Media Designs (Facebook, Twitter, Instagram)",
    ];
    let combo2B = [
        " 2 Sided Flyer OR Bi-Fold Brochure Design",
        " With Grey Scale Format",
        " Free Icon Design",
        " Brand Book",
        " 24 - 48 Hours Turn Around Time",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager",
    ];
    return (
        <section>
            <div className="py-[50px] relative z-10">
                <Image src={cmboBG} alt="cmboBG" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority />
                <div className="container">
                    <Tabs value="one">
                        <TabsHeader className="lg:w-[60%]">
                            <Tab value="one" className="font-poppins">
                                Infinite
                            </Tab>
                            <Tab value="two" className="font-poppins">
                                Combo
                            </Tab>
                        </TabsHeader>
                        <TabsBody>
                            <TabPanel value="one" className="flex gap-5 items-center">
                                <div className="basis-full lg:basis-[65%] xl:basis-[60%]">
                                    <h2 className="text-[25px] lg:text-[40px]  font-poppins font-extrabold leading-tight text-white mb-2">
                                        Logo Infinite
                                    </h2>
                                    <p className="font-poppins text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal">
                                        Crafting your brand to completion!
                                    </p>
                                    <div className="md:flex gap-3 xl:gap-5 mt-10">
                                        <ul>
                                            {combo1A && combo1A.map((e, i) => (
                                                <li className="font-poppins text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1 w-[19px] h-[19px]" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {combo1B && combo1B.map((e, i) => (
                                                <li className="font-poppins text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1 w-[19px] h-[19px]" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center flex-row gap-3 sm:gap-5 md:mt-5 mt-8">
                                        <CTA text="Order Now" href="https://app.creativelogodesigns.io/creative/order/68" variant="primary" />
                                        <CTA text="Live Chat" href="javascript:$zopim.livechat.window.show();" variant="secondary" />
                                    </div>
                                </div>
                                <div className="hidden lg:block lg:basis-[35%] xl:basis-[40%]">
                                    <Image src="/lp-one/combo.png" width={617} height={701} alt="combo" />
                                </div>
                            </TabPanel>
                            <TabPanel value="two" className="flex gap-5 items-center">
                                <div className="basis-full lg:basis-[65%] xl:basis-[60%]">
                                    <h2 className="text-[25px] lg:text-[40px]  font-poppins font-extrabold leading-tight text-white mb-2">
                                        Logo Combo
                                    </h2>
                                    <p className="font-poppins text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-white font-normal">
                                        Crafting your brand to completion!
                                    </p>
                                    <div className="md:flex gap-3 xl:gap-5 mt-10">
                                        <ul>
                                            {combo2A && combo2A.map((e, i) => (
                                                <li className="font-poppins text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1 w-[19px] h-[19px]" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul>
                                            {combo2B && combo2B.map((e, i) => (
                                                <li className="font-poppins text-[14px] text-white font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                    key={i}>
                                                    <Image src={checkCircle} alt="checkCircle" className="mt-1 w-[19px] h-[19px]" />
                                                    <span>{e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex items-center flex-row gap-3 sm:gap-5 md:mt-5 mt-8">
                                        <CTA text="Order Now" href="https://app.creativelogodesigns.io/creative/order/69" variant="primary" />
                                        <CTA text="Live Chat" href="javascript:$zopim.livechat.window.show();" variant="secondary" />
                                    </div>
                                </div>
                                <div className="hidden lg:block lg:basis-[35%] xl:basis-[40%]">
                                    <Image src="/lp-one/combo2.png" width={617} height={701} alt="combo" />
                                </div>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Combo;