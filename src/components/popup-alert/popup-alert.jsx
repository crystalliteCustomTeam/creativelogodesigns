"use client"
// Css
import { useEffect, useState } from "react";
// Material
import {
    Dialog, DialogBody,
} from "@material-tailwind/react";

const PopupAlert = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
        window.location.href = "#contactForm";
    };
    useEffect(() => {
        setOpen(!open);
    }, [])
    return (
        <>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="focus-visible:outline-none cursor-pointer"
            >
                <DialogBody onClick={handleOpen}
                    className="p-0 h-[70vh] flex items-center justify-center bg-[url('../../public/thanksgivingbg.webp')] bg-cover bg-no-repeat bg-bottom"
                >
                    <h2 className="hidden">Thanksgiving</h2>
                </DialogBody>
            </Dialog>
        </>
    )
}

export default PopupAlert;