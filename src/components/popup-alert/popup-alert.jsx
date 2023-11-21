"use client"
// Css
import { useEffect, useState } from "react";
// Material
import {
    Alert
} from "@material-tailwind/react";
import CTA from "C/CTA";

import styles from "./popup-alert.module.css";

const PopupAlert = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(!open);
    }, [])
    return (
        <>
            <Alert
                open={open}
                onClose={() => setOpen(false)}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
                className={`!fixed !bottom-[10px] !left-0 !right-0 container !z-50 bg-[#000] w-[60%] rounded-3xl !hidden lg:!block ${styles.bgGradient}`}
            >
                <div className="grid grid-cols-3 items-center">
                    <div>
                        <h3 className="text-[30px] leading-tight font-poppins font-bold">
                            Happy <span className="text-light-yellow">Thanks</span> <br /> Giving...
                        </h3>
                    </div>
                    <div>
                        <p className="text-center text-[70px] leading-none relative top-[5px] font-poppins font-bold">
                            50<sup>%</sup><span className="text-[20px] uppercase relative left-[-45px]">off</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-right font-poppins text-[18px]">Savings <span className="font-bold">on</span> our <span className="font-bold"> <br /> Logo Design Packages</span></p>
                        <div className="w-max ml-auto mt-2">
                            <CTA
                                text="Order Now"
                                href="#contactForm"
                                bg="bg-[#000]"
                                css="px-4"
                                width="w-max"
                                height="h-[35px]"
                            />
                        </div>
                    </div>
                </div>
            </Alert >
        </>
    )
}

export default PopupAlert;