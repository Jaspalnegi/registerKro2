import React from "react";
import Pic from '../assets/pvt-desktop.webp'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1 className="text-blue-900 font-bold">Private Limited Company Registration </h1>
              <span className="text-red-700 font-bold"></span>
            </div>
            <br />
            <p className=" text-orange-400 md:text-md text-justify flex space-x-1 text-sm md:text-3xl text-">
              Get your Private Limited Company Registration in just 14 days
               at Rs.1,999/- only
            </p>
            <br />
            <div className="text-xl font-semibold text-blue-950">
              <ol>
                <li>2 DIN and DSC for two Directors</li>
                <li>Registration fees and stamp duty</li>
                <li>Company Incorporation Certificate</li>
              </ol>
            </div>
            {/* socail media */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className=" space-y-2">
                <h1 className="font-bold text-blue-900">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/"
                    target="_blank">
                    <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://in.linkedin.com/"
                    target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/"
                    target="_blank">
                    <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://web.telegram.org/a/"
                    target="_blank">
                    <FaTelegramPlane className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:1/2 md:ml-40 md:mt-20  order-1 ">
          <img src={Pic} className="md:w-[900px] md:h-[450px]" alt=""/>
          </div>
        </div>
      </div>
      <hr></hr>
      
    </>
  );
}

export default Hero;
