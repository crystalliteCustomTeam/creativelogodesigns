"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../logocombo/logocombo.module.css'
import logo1 from 'media/new-lp/logocombo/packagecombo1.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";



const Logocombo = () => {


    var settings = {

        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };




    return (
        <>
            <section className={`${styles.logocombo} bg-[#fbfbfb] font-poppins py-[80px]`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1">
                        <Slider {...settings} className="newtown">
                            <div>
                                <div class="grid grid-cols-2">
                                    <div>
                                        <h2 className="text-[30px] font-[700] text-[#ffff] capitalize">Logo Infinite</h2>
                                        <h4 className="text-[20px] font-[600] text-[#ffff] mt-4 mb-5">Crafting your brand to completion!</h4>
                                        <div className="flex gap-5">
                                            <ul class="">
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Original Logo Concepts</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 8 Dedicated Logo Designer (Industry Specific)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Revisions</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 3 Page Basic Website</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Stationery Design (Business Card, Letterhead, Envelope)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Brand Book</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Business Cards </li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Letterheads</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Email Signature Design</li>
                                            </ul>
                                            <ul>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Social Media Designs (Facebook, Twitter, Instagram)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> With Grey Scale Format</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Free Icon Design</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 24 - 48 Hours Turn Around Time</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> MORE FEATURES</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Satisfaction</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Ownership Rights</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Money Back Guarantee</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Dedicated Account Manager</li>
                                            </ul>
                                        </div>


                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src={logo1} />
                                        <div>
                                            <Link class="bg-[#dd1920] text-[#fff] py-4 px-14 md:rounded-[10px] text-[16px] font-[400] block text-center" href='#'>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="grid grid-cols-2">
                                    <div>
                                        <h2 className="text-[30px] font-[700] text-[#ffff] capitalize">Logo Infinite</h2>
                                        <h4 className="text-[20px] font-[600] text-[#ffff] mt-4 mb-5">Crafting your brand to completion!</h4>
                                        <div className="flex gap-5">
                                            <ul class="">
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Original Logo Concepts</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 8 Dedicated Logo Designer (Industry Specific)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Revisions</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 3 Page Basic Website</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Stationery Design (Business Card, Letterhead, Envelope)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Brand Book</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Business Cards </li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Letterheads</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Email Signature Design</li>
                                            </ul>
                                            <ul>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Social Media Designs (Facebook, Twitter, Instagram)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> With Grey Scale Format</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Free Icon Design</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 24 - 48 Hours Turn Around Time</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> MORE FEATURES</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Satisfaction</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Ownership Rights</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Money Back Guarantee</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Dedicated Account Manager</li>
                                            </ul>
                                        </div>


                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src={logo1} />
                                        <div>
                                            <Link class="bg-[#dd1920] text-[#fff] py-4 px-14 md:rounded-[10px] text-[16px] font-[400] block text-center" href='#'>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="grid grid-cols-2">
                                    <div>
                                        <h2 className="text-[30px] font-[700] text-[#ffff] capitalize">Logo Infinite</h2>
                                        <h4 className="text-[20px] font-[600] text-[#ffff] mt-4 mb-5">Crafting your brand to completion!</h4>
                                        <div className="flex gap-5">
                                            <ul class="">
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Original Logo Concepts</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 8 Dedicated Logo Designer (Industry Specific)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Unlimited Revisions</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 3 Page Basic Website</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Stationery Design (Business Card, Letterhead, Envelope)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Brand Book</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Business Cards </li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 500 Letterheads</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Email Signature Design</li>
                                            </ul>
                                            <ul>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Social Media Designs (Facebook, Twitter, Instagram)</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 2 Sided Flyer OR Bi-Fold Brochure Design</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> With Grey Scale Format</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Free Icon Design</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 24 - 48 Hours Turn Around Time</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> MORE FEATURES</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Satisfaction</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> 100% Ownership Rights</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Money Back Guarantee</li>
                                                <li className="text-[13px] font-[400] text-[#ffff] py-[4px] border-b border-[#6e6e6ede]"> Dedicated Account Manager</li>
                                            </ul>
                                        </div>


                                    </div>
                                    <div className="flex flex-col items-center">
                                        <Image src={logo1} />
                                        <div>
                                            <Link class="bg-[#dd1920] text-[#fff] py-4 px-14 md:rounded-[10px] text-[16px] font-[400] block text-center" href='#'>Order Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Logocombo;