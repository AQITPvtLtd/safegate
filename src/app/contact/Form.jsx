"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { form } from "@/services/form";
import { ClipLoader } from "react-spinners";

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
        medicalReport: null,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const allowedFormats = ["image/png", "image/jpeg", "image/jpg", "application/pdf", "application/zip", "application/x-rar-compressed"];
        const maxSize = 5 * 1024 * 1024; // 5MB

        if (file && allowedFormats.includes(file.type) && file.size <= maxSize) {
            setFormData({ ...formData, medicalReport: file });
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid file!",
                text: "Please upload a valid file (PNG, JPG, JPEG, PDF, ZIP, RAR) under 5MB.",
            });
            e.target.value = ""; // Reset file input
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                if (formData[key]) {
                    formDataToSend.append(key, formData[key]);
                }
            });

            const response = await form(formDataToSend);

            console.log(response);

            if (response.success) {
                await Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "Your query has been received.",
                    icon: "success",
                });

                // Reset form data after successful submission
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    location: "",
                    message: "",
                    medicalReport: null, // File field reset
                });

                router.push("/");
            } else {
                throw new Error("Something went wrong!");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            await Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message || "Something went wrong!",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='bg-gray-100 rounded-lg p-6 border-4'>
            <h2 className="text-gray-900 text-xl font-semibold mb-1 title-font">
                Submit Your Query
            </h2>
            <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="relative mb-1">
                    <label htmlFor="name" className="leading-7 text-base text-gray-900">Full Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter Your Full Name' className="w-full bg-white rounded border focus:border-blue-700 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.name} onChange={handleChange} />
                </div>

                {/* Email Input */}
                <div className="relative mb-1">
                    <label htmlFor="email" className="leading-7 text-base text-gray-900">Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter Your Email Id' className="w-full bg-white rounded border focus:border-blue-700 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.email} onChange={handleChange} />
                </div>

                {/* Phone Input */}
                <div className="relative mb-1">
                    <label htmlFor="phone" className="leading-7 text-base text-gray-900">Phone</label>
                    <input type="tel" id="phone" name="phone" placeholder='Enter Your Phone Number' className="w-full bg-white rounded border focus:border-blue-700 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.phone} onChange={handleChange} />
                </div>

                {/* Location Input */}
                <div className="relative mb-1">
                    <label htmlFor="location" className="leading-7 text-base text-gray-900">Location</label>
                    <input type="text" id="location" name="location" placeholder='Enter Your Current Location' className="w-full bg-white rounded border focus:border-blue-700 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.location} onChange={handleChange} />
                </div>

                {/* Message Input */}
                <div className="relative mb-1">
                    <label htmlFor="message" className="leading-7 text-base text-gray-900">Write Problem English / Hindi </label>
                    <textarea id="message" name="message" placeholder='Describe Your Health Problem...' className="w-full bg-white rounded border focus:border-blue-700 focus:ring-2 focus:ring-blue-400 h-16 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={formData.message} onChange={handleChange}></textarea>
                </div>

                {/* Medical Report Upload (Optional) */}
                <div className="relative mb-4">
                    <label htmlFor="medicalReport" className="leading-7 text-base text-gray-900">Upload Medical Report (Optional)</label>
                    <input type="file" id="medicalReport" name="medicalReport" accept=".png, .jpg, .jpeg, .pdf, .zip, .rar" className="w-full bg-white rounded border focus:border-blue-700 focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleFileChange} />
                </div>

                {/* Submit Button */}
                <div>
                    {loading ? (<div className="flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50 rounded-md fixed top-0 left-0 z-50">
                        <ClipLoader width="60" height="60" color="#07a496" className="animate-spin" />
                    </div>) : (
                        <button className="text-white bg-lightgreen border-0 py-2 px-6 focus:outline-none hover:bg-lightgreen/90 rounded text-lg">Submit</button>
                    )}
                </div>
            </form >
        </div >
    );
};

export default Form;
