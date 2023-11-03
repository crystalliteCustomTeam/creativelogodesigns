"use client"

import Image from "next/image";
import Link from "next/link";
import styles from '../slider/slider.module.css'
import logo from "media/new-lp/logo.png";
import 'swiper/css';
import 'swiper/css/navigation';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import One from "media/new-lp/homeslider/1.webp";


const Slider = () => {

  





    return (
        <>
            <section className={`${styles.slider}  font-poppins py-5`}>
                <div class="container mx-auto">
                    <div class="grid grid-cols-1">


                   <h1 className="text-7xl text-[#000000] font-bold">sadasdasdasdas</h1>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider;