"use client"
import Input from "C/Input";
import Button from "C/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Axios from "axios";
import Textarea from "@/components/Textarea";

const Form = () => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])
    // For Page
    let page = usePathname();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        message: "From Logo Offer",
        pageURL: page,
    });
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const [formStatus, setFormStatus] = useState("Submit");
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = 'Valid email is required';
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = 'Valid phone is required';
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        setIsDisabled(true);
        setFormStatus("Processing...");
        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify(data);
            let reqOptions = {
                url: "/api/email",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }

        if (Object.keys(errors).length === 0) {
            // For Date
            let newDate = new Date();
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            // For Time
            let today = new Date();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            let headersList = {
                "Accept": "*/*",
                "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                "Brand": "Creative Logo Designs",
                "Page": `${page}`,
                "Date": `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`,
                "Time": time,
                "JSON": data
            });
            let reqOptions = {
                url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            await Axios.request(reqOptions);
            console.log(bodyContent)
            window.location.href = "https://app.creativelogodesigns.io/creative/order/64";
        }
    }
    return (
        <div className="mt-5 w-[80%] mx-auto">
            <form autoComplete="off" spellCheck="false" className="grid grid-cols-12 gap-5 mb-5">
                <div className="col-span-12">
                    <div className="relative">
                        <Input
                            name="name"
                            type="name"
                            border="border-2 border-[#dedede] rounded-md"
                            placeholder="Full Name*"
                            padding="pl-[20px] py-6"
                            color="text-black"
                            handle={handleDataChange}
                        />
                    </div>
                    {
                        errors.name && <span className="text-[12px] block p-2 font-medium text-red">
                            {errors.name}
                        </span>
                    }
                </div>
                <div className="col-span-6">
                    <div className="relative">
                        <Input
                            name="email"
                            type="email"
                            border="border-2 border-[#dedede] rounded-md"
                            placeholder="Email Address *"
                            padding="pl-[20px] py-6"
                            color="text-black"
                            handle={handleDataChange}
                        />
                    </div>
                    {
                        errors.email && <span className="text-[12px] block p-2 font-medium text-red">
                            {errors.email}
                        </span>
                    }
                </div>
                <div className="col-span-6">
                    <div className="relative">
                        <Input
                            name="phone"
                            type="phone"
                            border="border-2 border-[#dedede] rounded-md"
                            placeholder="Phone No. *"
                            padding="pl-[20px] py-6"
                            color="text-black"
                            handle={handleDataChange}
                        />
                    </div>
                    {
                        errors.phone && <span className="text-[12px] block p-2 font-medium text-red">
                            {errors.phone}
                        </span>
                    }
                </div>
                <div className="col-span-12">
                    <div className="relative">
                        <Textarea
                            name="message"
                            type="name"
                            border="border-2 border-[#dedede] rounded-md"
                            placeholder="To help us understand better enter a brief description of your project."
                            padding="pl-[20px] py-6"
                            height="h-[150px]"
                            color="text-black"
                            handle={handleDataChange}
                        />
                    </div>
                </div>
            </form>
            <Button
                text={formStatus}
                border="border-none"
                color="text-white"
                bg="bg-[#0467ff]"
                handle={handleFormSubmit}
                css="!font-poppins font-semiBold uppercase !px-5 m-auto !w-full"
                disabled={isDisabled}
            />
        </div>
    )
}

export default Form;