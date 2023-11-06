// Next Components
import Image from "next/image";
// Images
import Parterns from "public/logodesignnew/parterns_google.webp";
import beforeImg from "public/logodesignnew/form_before_tab.webp";
import formbefore from "public/logodesignnew/form_before.webp";
import formafter from "public/logodesignnew/form_after.webp";

// Components
import CTA from "C/CTA";
import Form from "C/hero/form/form";

const Hero = ({ content }) => {


    const { subtitle, title, desc, img, form, page } = content;

    const sectionStyle = {
        backgroundImage: `url('../logodesignnew/main_banner_res.webp')`, // Adjust the path to your image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // You can also set other background properties here, like background-color.
      };

      const sectionStyle1 = {
        backgroundImage: `url('../logodesignnew/form_after.webp')`, // Adjust the path to your image
        // You can also set other background properties here, like background-color.
      };

   
    return (
        <section style={sectionStyle} className="font-poppins text-white pb-12">
        <div className="pt-[120px]">
            <div className="container md:max-w-6xl lg:max-w-6xl xl:max-w-8xl">
                <div className="block items-center gap-x-5 sm:block md:flex lg:flex xl:flex">
                    <div className="basis-[100%] sm:basis-[100%] md:basis-[40%] lg:basis-[40%] xl:basis-[40%]">
                        <h4 className="text-[30px] leading-8 font-samibold pt-8  sm:text-center lg:text-left md:text-left">Activate Your Coupon <br /> Now</h4>
                        <div className="flex items-center sm:text-center xl:text-left lg:text-left">
                            <h1 className="mt-[2rem] mb-[2rem] ">
                                <span className=" font-bold leading-9 text-[57px]">Custom</span> <br />
                                <span className="text-[#23bbc8] mt-[1rem] font-regular text-[38px] xs:text-[27px] sm:text-[27px]">Logo Design</span>
                            </h1>
                            <div
                                className="w-[128px] h-[86px] bg-[#f73600] rounded-lg font-[700] pt-1 pb-1 px-2 raduis-[5px]">
                                <p className="text-[16px]  w-[107px] text-center font-normal leading-0">FOR JUST</p>
                                <p className="text-[54px] text-center font-[900] leading-10">$35</p>
                            </div>
                        </div>
                        <h5 className="text-[25px]">Get your custom logo designed, <br /> from the <span
                                className="font-bold">#1 Design
                                Company</span></h5>
                        <Image src={Parterns} alt="awards" className="py-12" priority={true} />
                    </div>
                   
                   
                    <div className="basis-[100%] sm:basis-[100%] md:basis-[60%] lg:basis-[60%] xl:basis-[60%] relative">
                        <div className="grid grid-rows-1 grid-flow-col gap-4 justify-end">
    
                            <div class="absolute top-[1px] -left-24 before:content-[''] before:absolute md:hidden xl:block lg:block">
                                <Image src={beforeImg} alt="form" className="" />
                            </div>
                            <div className="relative w-[350px] custom-shadow rounded-3xl">
                                <div
                                    className="border-solid border-white border-2 bg-[#f73600] bg-red-700 rounded-t-3xl text-center font-bold shadow-md">
                                    <h2 class=" text-white text-[40px] py-2">70% DISCOUNT</h2>
                                </div>
                                <div class="relative bg-red-700 rounded-t-3xl text-center font-semibold shadow-md ">
                                    <div
                                        class="absolute -left-[15px] -top-[16px] inset-0 before:content-[''] before:absolute ">
                                        <Image src={formbefore} width={16} height={88} alt="form" className="" />
                                    </div>
                                    <div
                                        class="bg-[#23bbc8] uppercase text-bold leading-7 pt-[10px] pb-[10px] text-white text-[25px] relative">
                                        <h3>
                                            <span className="text-[18px]">Let’s start your project,</span><br />
                                            Drop us your details!
                                        </h3>
                                    </div>
                                    <div class="absolute -right-[15px] -top-[16px] after:content-[''] before:absolute ">
                                        <Image src={formafter} width={16} height={88} alt="form" className="" />
                                    </div>
                                </div>
                                <div className="bg-blue-gray-50 pb-5 pt-4 px-3 rounded-b-3xl ">
                                    <form className="" method="POST">
                                        <div class="w-full">
                                            <input type="text" placeholder="Enter Your Name" name="name" required
                                                className="placeholder:text-[gray-800] w-full px-4 py-3 my-3 border border-gray-400 rounded-3xl focus:outline-none focus:ring focus:border-gray-800" />
                                        </div>
                                        <div class="w-full">
                                            <input type="text" placeholder="Enter Your Email" name="email" required
                                                className="w-full px-4 py-3 my-3 border border-gray-400 rounded-3xl focus:outline-none focus:ring focus:border-blue-300" />
                                        </div>
                                        <div class="w-full">
                                            <input type="text" placeholder="Enter Your Phone" name="phone" required
                                                className="w-full px-4 py-3 my-3 border border-gray-400 rounded-3xl focus:outline-none focus:ring focus:border-blue-300" />
                                        </div>
                                        <div class="w-full">
                                            <button
                                                className="bg-gradient-to-br from-amber-500 to-[#f73600] text-white font-semibold text-lg py-4 rounded-full uppercase w-full"
                                                id="signupBtn" type="submit">
                                                Submit your Request
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        </section>
       
    )
}

export default Hero;