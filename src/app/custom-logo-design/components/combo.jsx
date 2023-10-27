"use client"
// Components
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import checkCircle from "media/packages/checkCircle.png";
import Image from "next/image";
import CTA from "C/CTA";

const Combo = () => {
    let combo1A = [
        " Unlimited Original Logo Concepts",
        " 8 Dedicated Logo Designer (Industry Specific)",
        " Unlimited Revisions",
        " 3 Page Basic Website",
        " Stationery Design (Business Card, Letterhead, Envelope)",
        " 500 Business Cards ",
        " Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
        " 500 Letterheads",
        " Email Signature Design",
        " Social Media Designs (Facebook, Twitter, Instagram)",
    ]
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
        "Dedicated Account Manager"
    ]
    let combo2A = [
        "Stationery Design (Business Card, Letterhead, Envelope)",
        "12 Dedicated Logo Designer (Industry Specific)",
        "Unlimited Original Logo Concepts",
        "Social Media Designs (Facebook, Twitter, Instagram)",
        "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SV",
        "2 Sided Flyer OR Bi-Fold Brochure Desig",
        "24 - 48 Hours Turn Around Tim",
        "7 Page Informative Website",
        "Unlimited Revisions",
        "Brand Book",
    ]
    let combo2B = [
        "500 Business Card",
        "500 Letterhead",
        "Email Signature Desig",
        "With Grey Scale Format",
        "Free Icon Design",
        "MORE FEATURES",
        "100% Satisfaction",
        "100% Ownership Rights",
        "Money Back Guarantee",
        "Dedicated Account Manager"
    ]
    return (
        <section>
            <div className="py-[50px]">
                <div className="container">
                    <div className="flex gap-5 items-center">
                        <div className="basis-full lg:basis-[65%] xl:basis-[60%]">
                            <Tabs value="one">
                                <TabsHeader>
                                    <Tab value="one">
                                        Package 1
                                    </Tab>
                                    <Tab value="two">
                                        Package 2
                                    </Tab>
                                </TabsHeader>
                                <TabsBody>
                                    <TabPanel value="one">
                                        <div>
                                            <h2 className="text-[25px] lg:text-[40px]  font-megat font-extrabold leading-tight text-black mb-2">
                                                Logo <span className="text-red">Combo</span> 1
                                            </h2>
                                            <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal">
                                                Crafting your brand to completion!
                                            </p>
                                            <div className="md:flex gap-3 xl:gap-5 mt-10">
                                                <ul>
                                                    {combo1A && combo1A.map((e, i) => (
                                                        <li className="text-[14px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                            key={i}>
                                                            <Image src={checkCircle} alt="checkCircle" className="mt-1 brightness-0 invert-0" />
                                                            <span>{e}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul>
                                                    {combo1B && combo1B.map((e, i) => (
                                                        <li className="text-[14px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                            key={i}>
                                                            <Image src={checkCircle} alt="checkCircle" className="mt-1 brightness-0 invert-0" />
                                                            <span>{e}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel value="two">
                                        <div>
                                            <h2 className="text-[25px] lg:text-[40px]  font-megat font-extrabold leading-tight text-black mb-2">
                                                Logo <span className="text-red">Combo</span> 2
                                            </h2>
                                            <p className="text-[14px] xl:text-[16px] leading-[24px] xl:leading-[26px] text-black font-normal">
                                                Crafting your brand to completion!
                                            </p>
                                            <div className="md:flex gap-3 xl:gap-5 mt-10">
                                                <ul>
                                                    {combo2A && combo2A.map((e, i) => (
                                                        <li className="text-[14px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                            key={i}>
                                                            <Image src={checkCircle} alt="checkCircle" className="mt-1 brightness-0 invert-0" />
                                                            <span>{e}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <ul>
                                                    {combo2B && combo2B.map((e, i) => (
                                                        <li className="text-[14px] text-black font-normal flex items-start gap-2 leading-[24px] mb-3"
                                                            key={i}>
                                                            <Image src={checkCircle} alt="checkCircle" className="mt-1 brightness-0 invert-0" />
                                                            <span>{e}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </TabsBody>
                            </Tabs>
                            <div className="flex items-center flex-col sm:flex-row gap-3 sm:gap-5 mt-5">
                                <CTA
                                    text="Order Now"
                                    href="/contact-us"
                                    bg="bg-black"
                                    icon="/icons/chat.svg"
                                    css="hover:bg-light-yellow"
                                />
                                <CTA
                                    text="(516) 748-9707"
                                    href="tel:5167489707"
                                    bg="bg-red"
                                    css="hover:bg-light-yellow"
                                />
                            </div>
                        </div>
                        <div className="hidden lg:block lg:basis-[35%] xl:basis-[40%]">
                            <Image src="/lp-one/combo.png" width={617} height={701} alt="combo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Combo;