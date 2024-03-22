"use client"
// Css
import { useEffect, useState } from "react";
// Material
import {
    Alert
} from "@material-tailwind/react";
import Form from "./Form/Form";

const Popup = () => {
    const [openTop, setOpenTop] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setOpenTop(!openTop);
        }, 5000);
    }, [])
    return (
        <>
            {openTop && (<Alert

                open={openTop}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: -100 },
                }}
                className={`!fixed !rounded-none !top-0 !left-0 !right-0 !bottom-0 h-full z-[99999] bg-[#222222ad] !p-0 items-center justify-center !hidden lg:!flex`}
            >
                {openTop && (
                    <button type="button" className="absolute transition-all duration-300 ease-in-out 2xl:left-[62%] xl:left-[64%] left-[66%] 2xl:top-8 top-0 xl:py-3 xl:px-5 py-2 px-4 text-2xl rounded-full right-0 bg-[#ffffff] bg-opacity-75 border-4 border-[#0467ff] font-bold text-[#0467ff] w-max hover:bg-[#0467ff]  hover:text-white" onClick={() => setOpenTop(false)}>
                        X
                    </button>
                )}
                <div className={`bg-white text-black !w-[500px] m-auto h-full rounded-3xl py-16 flex items-center flex-col justify-start`}>
                    <h3 className="text-[35px] leading-tight font-poppins font-bold text-center mb-2 pl-4 border-l-8 border-[#0467ff]">We are here to help!</h3>
                    <p className="text-center font-poppins text-[14px] leading-normal">Sign up Now To <strong>Avail 50% Discount</strong> on Your Logo Design</p>
                    <Form />
                </div>
            </Alert >)}
        </>
    )
}

export default Popup;