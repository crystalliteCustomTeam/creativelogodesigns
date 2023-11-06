"use client"
// Import Components
import { Collapse, IconButton, MobileNav, Navbar } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/button";
import { usePathname } from "next/navigation";
import CTA from "./CTA";
// Import Images
import logo from "media/logo.png";
import logoDesign from "media/menu/logoDesign.png";
import creativeCopywriting from "media/menu/creativeCopywriting.png";
import digitalMarketing from "media/menu/digitalMarketing.png";
import ecommerce from "media/menu/ecommerce.png";
import illustrationDesign from "media/menu/illustrationDesign.png";
import marketingCollateral from "media/menu/marketingCollateral.png";
import mobileApplication from "media/menu/mobileApplication.png";
import motionGraphics from "media/menu/motionGraphics.png";
import seoServices from "media/menu/seoServices.png";
import websiteDevelopment from "media/menu/websiteDevelopment.png";
import down from "media/menu/down.png";
import { useState } from "react";

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const router = usePathname();
    const navList = (
        <ul className="lg:flex lg:items-center gap-6 lg:h-full rounded-2xl bg-black lg:bg-transparent lg:rounded-none py-5 lg:py-0 px-5 lg:px-0">
            
            
        </ul>
    );
    return (
        <header className="relative">
            <Navbar className="font-poppins px-0 py-0 mx-0 absolute top-0 left-0 z-[9999] rounded-none bg-transparent shadow-none backdrop-saturate-100 backdrop-blur-none border-none">
                <div className="container">
                    <div className="flex items-center h-24">
                        <Link href="/">
                            <Image src={logo} alt="logo" />
                        </Link>
                        <div className="hidden lg:flex ml-auto xl:m-auto h-full items-center">
                            {navList}
                        </div>
                        <div className="hidden xl:flex items-center gap-0 text-white">
                            <a href='' class="flex items-center gap-x-2 sm:w-[150px] justify-center h-[45px] text-[18px] font-medium rounded-full transition-all" >
                   <Image src="/logodesignnew/chat.svg" alt="Messgae" width={20} height={21} />
                    <span className="text-sm xl:text-lg font-medium"> Live Chat</span>
                  
                </a>
                |
                    <a href='tel:3476073636' class="flex items-center gap-x-2 sm:w-[290px] justify-center h-[45px] text-[18px] font-medium rounded-full transition-all" >
                    <Image src="/logodesignnew/call.png" alt="call"  width={20} height={21} />
                        <span className="text-sm xl:text-lg font-medium"> Call Us: (855) 251-3020</span>
                    
                    </a>
                    <a href='/' class="bg-[#f73600] flex items-center gap-3 sm:w-[150px] justify-center h-[45px] text-[13px]  rounded-full transition-all" >
                        <span className="text-[14px] font-medium"> View Pricing</span>
                    </a>
                <div>
                    </div>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)} >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#000"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                        fill="#000"
                                        color="#000"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="#000"
                                    stroke="currentColor"
                                    strokeWidth={2} >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="#000"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        color="#000"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav} className="block xl:hidden">
                    <div className="container mx-auto">
                        {navList}
                    </div>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;