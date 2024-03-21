// Next
import Image from "next/image"
// Images
import Logo1 from "media/logo-offer-lp/trusted-logo/1.png"
import Logo2 from "media/logo-offer-lp/trusted-logo/2.png"
import Logo3 from "media/logo-offer-lp/trusted-logo/3.png"
import Logo4 from "media/logo-offer-lp/trusted-logo/4.png"
import Logo5 from "media/logo-offer-lp/trusted-logo/5.png"
import Logo6 from "media/logo-offer-lp/trusted-logo/6.png"

const TrustedLogo = () => {
    return (
        <section>
            <div className="py-[40px] bg-[#f7fafc]">
                <div className="container">
                    <div className="text-center text-[#0c314d]">
                        <h2 className="md:text-2xl text-xl leading-tight">Trusted by <strong>world's most smart businesses</strong> � big and small</h2>
                    </div>
                    <div className="flex  xs:justify-around justify-center lg:justify-between items-center lg:flex-nowrap flex-wrap lg:gap-0 sm:gap-5 gap-3 xl:w-[90%] xl:mx-auto md:mt-10 mt-6">
                        {[
                            [Logo1],
                            [Logo2],
                            [Logo3],
                            [Logo4],
                            [Logo5],
                            [Logo6]
                        ].map(([icon], i) => (
                            <Image key={i} src={icon} alt="logos" />
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedLogo