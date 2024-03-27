"use client"
// Next
import Image from "next/image"
// React
import { useState } from "react"
// Components
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react"
// Images
import icon1 from "media/logo-offer-lp/your-logo-tabs/1.png"
import icon2 from "media/logo-offer-lp/your-logo-tabs/2.png"
import icon3 from "media/logo-offer-lp/your-logo-tabs/3.png"
import icon4 from "media/logo-offer-lp/your-logo-tabs/4.png"
import icon5 from "media/logo-offer-lp/your-logo-tabs/5.png"
import icon6 from "media/logo-offer-lp/your-logo-tabs/6.png"
import icon1Bg from "media/logo-offer-lp/your-logo-tabs/1-bg.png"
import icon2Bg from "media/logo-offer-lp/your-logo-tabs/2-bg.png"
import icon3Bg from "media/logo-offer-lp/your-logo-tabs/3-bg.png"
import icon4Bg from "media/logo-offer-lp/your-logo-tabs/4-bg.png"
import icon5Bg from "media/logo-offer-lp/your-logo-tabs/5-bg.png"
import icon6Bg from "media/logo-offer-lp/your-logo-tabs/6-bg.png"

const data = [
    {
        value: "monogram-logos",
        label: "Monogram Logos",
        icon: icon1,
        title: "COMBINATION LOGOS",
        desc: "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image. Some well-known combination mark logos include Doritos, Burger King, and Lacoste.",
        navCss: "lg:justify-start",
        bg: icon1Bg
    },
    {
        value: "wordmark-logos",
        label: "Wordmark Logos",
        icon: icon2,
        title: "WORDMARK LOGOS",
        desc: "Like a letter mark, a wordmark or logotype is a font-based logo that focuses on a business's name alone. Wordmark logos work really well when a company has a distinct and succinct name. Google's logo is an excellent example of this. The name itself is catchy and memorable, so the logo helps create strong brand recognition when combined with impressionable typography.",
        navCss: "lg:justify-end",
        bg: icon2Bg
    },
    {
        value: "pictorial-marks",
        label: "Pictorial Marks",
        icon: icon3,
        title: "PICTORIAL MARKS",
        desc: "A pictorial mark (sometimes called a brand mark or logo symbol) is an icon�or graphics-based logo. It's probably the image that comes to mind when you think 'logo': the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is emblematic, and each brand established that the mark alone becomes instantly recognizable.",
        navCss: "lg:justify-start",
        bg: icon3Bg
    },
    {
        value: "abstract-logos",
        label: "Abstract Logos",
        icon: icon4,
        title: "ABSTRACT LOGOS",
        desc: "An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image�like an apple or a bird�it's an abstract geometric form representing your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle, and the stripy Adidas flower. Abstract marks work really well like all logo symbols because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.",
        navCss: "lg:justify-end",
        bg: icon4Bg
    },
    {
        value: "mascot-logos",
        label: "Mascot Logos",
        icon: icon5,
        title: "MASCOT LOGOS",
        desc: "Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and almost always fun, a mascot is simply an illustrated character representing your company. Think of them as the ambassador for your business. Mascots are great for companies that want to create a wholesome atmosphere by appealing to families and children.",
        navCss: "lg:justify-start",
        bg: icon5Bg
    },
    {
        value: "combination-logos",
        label: "Combination Logos",
        icon: icon6,
        title: "COMBINATION LOGOS",
        desc: "A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image. Some well-known combination mark logos include Doritos, Burger King, and Lacoste.",
        navCss: "lg:justify-end",
        bg: icon6Bg
    }
]

const YourLogoTabs = () => {
    const [activeTab, setActiveTab] = useState(String(data[0].value));
    return (
        <section>
            <div className="py-[40px] md:py-[60px]">
                <div className="container">
                    <div className="text-center text-black mb-10">
                        <h2 className="xs:text-[25px] text-[30px] lg:text-[40px] font-bold leading-tight">
                            What Type is Your Logo
                        </h2>
                        <p className="text-[14px] md:text-[16px] xl:text-[18px] mt-3 leading-relaxed md:max-w-[80%] xl:max-w-[70%] mx-auto">
                            Our team of highly creative logo designers provide you with all types of innovative business logos that assist in generating sales and revenue.
                        </p>
                    </div>
                    <Tabs value={activeTab} className="relative overflow-visible">
                        <TabsHeader indicatorProps={{ className: "hidden" }} className="grid xs:grid-cols-2 grid-cols-3 lg:grid-cols-2 bg-transparent p-0 gap-y-3 gap-x-3 mb-5 lg:mb-0">
                            {
                                data.map(({ value, label, icon, navCss }) => {
                                    return (
                                        <Tab value={value} key={value} onClick={() => setActiveTab(value)} className={`${activeTab === value ? " " : ""} ${navCss} p-0 bg-[#f7fafc] lg:bg-transparent rounded-xl`}>
                                            <div className="bg-[#f7fafc] lg:w-[150px] xl:w-[250px] p-3 xl:py-5 xl:px-0 rounded-xl text-center">
                                                <Image src={icon} alt="icon" className="inline-block" />
                                                <span className="block text-[14px] lg:text-[12px] xl:text-[16px] font-bold text-black font-poppins mt-3">{label}</span>
                                            </div>
                                        </Tab>
                                    );
                                })
                            }
                        </TabsHeader>
                        <TabsBody className="lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-[-50px] lg:[width:calc(100%_-_300px)] xl:[width:calc(100%_-_500px)] lg:mx-auto">
                            {
                                data.map(({ title, desc, value, bg }) => (
                                    <TabPanel key={value} value={value} className="relative z-10 sm:h-[500px] lg:h-full">
                                        <Image src={bg} alt="bg" className="absolute xs:hidden top-0 left-0 right-0 bottom-0 -z-10 w-full h-full" />
                                        <div className="lg:absolute lg:left-0 lg:right-0 relative sm:top-[200px] lg:top-[300px] sm:[width:calc(100%_-_100px)] mx-auto text-center text-black">
                                            <div>
                                                <h3 className="font-poppins text-[25px] lg:text-[30px] font-bold leading-tight">{title}</h3>
                                                <p className="font-poppins text-[13px] lg:text-[14px] mt-3 leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                ))
                            }
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}

export default YourLogoTabs