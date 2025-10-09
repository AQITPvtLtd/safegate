import Form from '@/app/contact/Form'
import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                {/* Google Map Section */}
                <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md h-[350px] lg:h-auto">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110222.94826756911!2d78.049028!3d30.309227999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929bc37c6319f%3A0xe9f79bf0327e8125!2sSafegate%20Medical%20Centre%20%7C%20Best%20Medical%20Centre%20in%20Dehradun%20%7C%20Advance%20Medical%20Services%20in%20Dehradun!5e0!3m2!1sen!2sin!4v1735635924364!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full"
                        title="Safegate Medical Centre Map"
                    ></iframe>
                </div>

                {/* Contact Form Section */}
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                    <div className="w-full">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
