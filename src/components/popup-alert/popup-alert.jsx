"use client"
// Css
import { useEffect, useState } from "react";
// Material
import {
    Alert
} from "@material-tailwind/react";

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
                className="!fixed !bottom-0 !left-0 !right-0 container !z-50 bg-red w-[70%] rounded-3xl !block"
            >
                <div className="grid grid-cols-3 items-center">
                    <div>
                        <h3 className="text-[30px] leading-tight font-poppins font-bold">
                            Happy Thanks <br /> Giving...
                        </h3>
                    </div>
                    <div>
                        <p className="text-center text-[50px] leading-none relative top-[5px] font-poppins font-bold">
                            50<sup>%</sup><span className="text-[20px] uppercase relative left-[-25px]">off</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-right font-poppins text-[18px]">Savings <span className="font-bold">on</span> our <span className="font-bold"> <br /> Logo Design Packages</span></p>
                    </div>
                </div>
            </Alert>
        </>
    )
}

export default PopupAlert;