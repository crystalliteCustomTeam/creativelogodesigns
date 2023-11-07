"use client"
import Image from "next/image";
import Link from "next/link";
import styles from '../service/service.module.css'
import logo1 from 'media/new-lp/service/animated-logo.webp'


const Service = () => {







    return (
        <>
            <section className={`${styles.service}  font-poppins bg-[#fbfbfb] pt-[100px] pb-10`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1">
                        <div className={`${styles.longa}`}>
                        <h2 className={`text-[66px] font-bold text-center text-[#00142d] mb-10`}>Our Services</h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 justify-items-center">

                        <div className={styles.pst}>
                            <Image src={logo1} />
                        </div>

                        <div>
                            <div>
                                <h3 className="text-[44px] font-[700] leading-[48px] text-[#00142d] opacity-80">Iconic Logo</h3>
                                <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">Iconic logos are known for their simplicity. They are simple <br></br> elements used in the manner to represent a story.</p>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-[44px] font-[700] leading-[48px] text-[#00142d] opacity-80">3d Logo</h3>
                                <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">A 3D logo design gives a logo the detail and feeling that a <br></br> simple logo fails to give.</p>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-[44px] font-[700] leading-[48px] text-[#00142d] opacity-80">Animated Logo</h3>
                                <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">Animated logos are the key to grabbing the attention of <br></br> your audience.</p>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-[44px] font-[700] leading-[48px] text-[#00142d] opacity-80">Illustrative Logo</h3>
                                <p className="text-[15px] fonnt-[400] text-[#00142d] opacity-80 mt-2">Illustrative logos comprise of pictures depicting a range of <br></br> meaning.</p>
                            </div>



                        </div>






                    </div>
                </div>
            </section>
        </>
    )
}

export default Service;