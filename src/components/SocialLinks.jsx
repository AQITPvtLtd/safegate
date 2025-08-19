import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialLinks = () => {
    return (
        <div>
            <div className="hidden sm:flex gap-4 fixed top-0 mt-[200px] right-0 flex-col justify-center items-center p-4 bg-gray-200 z-40 rounded-l-xl">
                {/* facebook */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.facebook.com/profile.php?id=61564959001123"
                        role="button"
                        target="_blank"
                    >
                        <FaFacebookF />
                    </Link>
                </div>
                {/* Instagram */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.instagram.com/safegatemedicalcenter/?hl=en"
                        role="button"
                        target="_blank"
                    >
                        <FaInstagram />
                    </Link>
                </div>
                {/* LinkedIn */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.linkedin.com/company/safegate-medical-centre/?viewAsMember=true"
                        role="button"
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </Link>
                </div>

                {/* <!-- Twitter --> */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://x.com/Safegatemedical"
                        role="button"
                        target="_blank"
                    >
                        <FaSquareXTwitter />
                    </Link>
                </div>

                {/* <!-- Youtube --> */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://www.youtube.com/channel/UCeMjY3fzbAqFQxrCcX4wTFg"
                        role="button"
                        target="_blank"
                    >
                        <FaYoutube />
                    </Link>
                </div>

                {/* <!-- Pinterest --> */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://in.pinterest.com/officialsafegatemedicalcenter/"
                        role="button"
                        target="_blank"
                    >
                        <FaPinterest />
                    </Link>
                </div>

                {/* <!-- Whatsapp --> */}
                <div className="group text-white relative w-max cursor-pointer transition-transform duration-500 bg-[#08943c] hover:bg-[#06692B] rounded-full p-3 hover:scale-125">
                    <Link
                        href="https://wa.link/ml77cj"
                        role="button"
                        target="_blank"
                    >
                        <FaWhatsapp />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SocialLinks