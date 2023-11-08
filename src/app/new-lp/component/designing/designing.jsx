"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../designing/designing.module.css'
import logo1 from 'media/new-lp/service/animated-logo.webp'


const Designing = () => {







    return (
        <>
            <section className={`${styles.designing}  font-poppins py-[100px]`}>
                <div class="container mx-auto">
                  

                    <div class="grid grid-cols-1">

                      <h2 className="text-[32.8px] text-center font-[500] text-[#ffff] mb-3">Designing a great logo is hard. <span className="font-[700]">We make it easy.</span></h2>
                      <h3 className="text-[30px] text-center font-[500] text-[#ffff]">Call our assistant at <Link className={`${styles.ban} font-[700]`} href='#'>(855) 535-2384</Link> </h3>
                      <div className="mt-5 flex gap-x-7 justify-center">
                                <Link class="bg-[#dd1920] text-[#fff] py-3 px-9  md:rounded-full text-[16px] font-[600]" href="#">Live Chat</Link>
                                <Link class="bg-[#ffffff] text-[#dd1920] py-3 px-9  md:rounded-full text-[16px] font-[600]" href="#">Get Quote</Link>
                            </div>
                        


                    </div>
                </div>
            </section>
        </>
    )
}

export default Designing;