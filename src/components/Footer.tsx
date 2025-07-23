import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 text-center">
            <div className="mb-4">
                <p className="text-lg font-semibold">Connect with me on Social Media</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 text-xl">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 text-xl">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/flobertmutsa-48b275232" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 text-xl">
                        <FaLinkedinIn />
                    </a>
                    <a href="mailto:flobymunobvaneyi@gmail.com" className="text-white hover:text-orange-500 text-xl">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="text-sm text-orange-500">Flobert Mutsa</p>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Flobert Mutsa. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
