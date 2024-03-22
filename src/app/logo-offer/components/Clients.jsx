import clients1 from "media/logo-offer-lp/our-clients/2.png"
import clients2 from "media/logo-offer-lp/our-clients/3.png"
import clients3 from "media/logo-offer-lp/our-clients/4.png"
import clients4 from "media/logo-offer-lp/our-clients/5.png"
import clients5 from "media/logo-offer-lp/our-clients/6.png"
import clients6 from "media/logo-offer-lp/our-clients/7.png"
import clients7 from "media/logo-offer-lp/our-clients/8.png"
import clients8 from "media/logo-offer-lp/our-clients/9.png"
import clients9 from "media/logo-offer-lp/our-clients/10.png"
import clients10 from "media/logo-offer-lp/our-clients/1.png"
import Image from "next/image"
const Clients = () => {
    return (
        <div className="md:py-12 py-10">
            <div className="container">
                <div className="text-center">
                    <h2 className="lg:text-[40px] md:text-[30px] text-[25px] font-bold">Our Clients</h2>
                </div>
                <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 md:gap-10 gap-5 md:mt-10 mt-6">
                    {
                        [
                            [clients1],
                            [clients2],
                            [clients3],
                            [clients4],
                            [clients5],
                            [clients6],
                            [clients7],
                            [clients8],
                            [clients9],
                            [clients10],
                        ].map(([icon], i) => (
                            <div key={i} className="hover:shadow-[0_12px_38.8px_1.2px_rgba(157,157,157,.24)] border border-[#d8dbde] py-[15px] rounded-[0_14px_14px_14px]">
                                <Image src={icon} alt="icons" className="mx-auto" />
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Clients;