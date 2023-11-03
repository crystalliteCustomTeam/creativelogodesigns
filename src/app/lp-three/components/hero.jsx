import Image from "next/image";
import styles from "../page.module.css";

const Hero = () => {
    let list = [
        {
            icon: "/lp-three/checkCircle.png",
            text: "4 Custom Logo Concepts"
        },
        {
            icon: "/lp-three/checkCircle.png",
            text: "FREE Revisions"
        },
        {
            icon: "/lp-three/checkCircle.png",
            text: "FREE File Formats"
        },
        {
            icon: "/lp-three/checkCircle.png",
            text: "100% Money Back Guarantee"
        }
    ]
    let logos = [
        "/lp-three/hero/logos/1.png"
    ]
    return (
        <section>
            <div className="bg-[#3e180d] pt-[100px] pb-[50px]">
                <div className="container">
                    <div className="text-center">
                        <p className="text-[#dd1e4b] text-[20px] leading-tight font-poppins font-medium">
                            PROFESSIONAL LOGO DESIGN SERVICE
                        </p>
                        <h1 className="text-[40px] text-white font-megat font-extrabold leading-tight mt-2 mb-3">
                            LOGO DESIGN STARTS FROM <span className={`text-[#dd1e4b] ${styles.blink}`}>$35</span>
                        </h1>
                        <p className="text-white text-[20px] leading-tight font-poppins font-normal">
                            YOUR CUSTOM LOGO DESIGN BY PROFESSIONAL LOGO DESIGN AGENCY IS JUST A CLICK AWAY!
                        </p>
                    </div>
                    <div className="grid grid-cols-4 mt-5 w-[78%] m-auto">
                        {
                            list && list.map((e, i) => (
                                <div key={i}>
                                    <div className="flex justify-center gap-2 items-center" >
                                        <Image src={e.icon} width={18} height={18} alt="icon" />
                                        <p className="text-white font-poppins font-medium leading-tight text-[14px]">{e.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="grid grid-cols-2">
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;