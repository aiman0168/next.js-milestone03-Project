import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-4">
      <div className="flex flex-wrap justify-between m-16">
        <div className="flex-1 min-w-[250px] mb-6">
          <h4 className="text-2xl font-bold mb-2">Exclusive</h4>
          <h5 className="text-lg font-semibold mb-2">Subscribe</h5>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <input
            type="email"
            className="w-52 px-4 py-2 text-sm bg-black border border-white rounded"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex-1 min-w-[250px] mb-6">
          <h4 className="text-xl font-bold mb-2">Support</h4>
          <p className="text-sm mb-2">
            111 Bijoy Sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div className="flex-1 min-w-[250px] mb-6">
          <h4 className="text-xl font-bold mb-2">Account</h4>
          <p className="text-sm mb-2">My Account</p>
          <p className="text-sm mb-2">Login / Register</p>
          <p className="text-sm mb-2">Cart</p>
          <p className="text-sm mb-2">Wishlist</p>
          <p className="text-sm">Shop</p>
        </div>

        <div className="flex-1 min-w-[250px] mb-6">
          <h4 className="text-xl font-bold mb-2">Quick Link</h4>
          <p className="text-sm mb-2">Privacy Policy</p>
          <p className="text-sm mb-2">Terms Of Use</p>
          <p className="text-sm mb-2">FAQ</p>
          <p className="text-sm">Contact</p>
        </div>

        <div className="flex-1 min-w-[250px] mb-6">
          <h4 className="text-xl font-bold mb-2">Download App</h4>
          <p className="text-xs mb-4 text-gray-400">Save $3 with App New User Only</p>
          <div className="mb-4">
            <Image
              src="/QR.png" // Ensure this image is in the public folder
              alt="QR Code"
              className="mb-4"
              width={80}   // width is set explicitly
              height={80}  // height is set explicitly
            />
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="w-6 h-6 text-gray-600" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 text-gray-600" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6 text-gray-600" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="w-6 h-6 text-gray-600" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-600">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;