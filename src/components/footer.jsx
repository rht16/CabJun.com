import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom's Link component instead of next/link
import linkdin from '../assets/img/linkedin-logo-footer.png'
import twitter from '../assets/img/twitter-logo-footer.png'
import facebook from '../assets/img/facebook-logo-footer.png'
import instagram from '../assets/img/instagram-logo-footer.png'
import whatsapp from '../assets/img/whatsappLogo.png'
import playstore from '../assets/img/googleplaystore-logo-footer.png'
import applestore from '../assets/img/applestore-logo-footer.png'
import  '../assets/css/footer.css'
import logo from '../assets/img/logo.jpg'

export const Footer = () => {
  const Instagram = process.env.REACT_APP_INSTAGRAM_URL;
  const Facebook = process.env.REACT_APP_FACEBOOK_URL;
  const Twitter = process.env.REACT_APP_TWITTER_URL;
  const Linkedin = process.env.REACT_APP_LINKDIN_URL;
  const Whatsapp = process.env.REACT_APP_WHATSAPP_URL;
  const AppUrl = process.env.REACT_APP_APP_URL;

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="p-6 md:p-12 bg-customColor ">
      <div className="h-[2px] w-full bg-[#FFFFFF4D] my-8"></div>
      <div className="justify-between grid grid-cols-2 grid-rows-2 w-full mx-auto lg:grid-cols-3 lg:grid-rows-1">
        <div className="flex items-center cursor-pointer mx-1 w-1/2">
          <div className="w-16 h-9 md:w-20 md:h-9 mt-[-30%] lg:w-[38%] lg:h-[100px] lg:mt-[10%]">
            <img
              src={logo}
              alt="CabJun logo "
              className="lg:w-[200px] lg:h-20"
            />
          </div>
        </div>

        <div className="my-4 flex flex-col items-center md:items-start lg:ml-[35%]">
    <div className="mb-2">
        <span className="text-white font-medium text-sm md:text-lg">Follow us</span>
    </div>
    <div className="flex gap-2 md:gap-6">
        <Link to={Linkedin}>
            <img
                className="h-4 w-4 md:h-6 md:w-6"
                src={linkdin}
                alt="LinkedIn Logo"
            />
        </Link>
        <Link to={Twitter}>
            <img
                className="h-4 w-4 md:h-6 md:w-6"
                src={twitter}
                alt="Twitter Logo"
            />
        </Link>
        <Link to={Facebook}>
            <img
                className="h-4 w-4 md:h-6 md:w-6"
                src={facebook}
                alt="Facebook Logo"
            />
        </Link>
        <Link to={Instagram}>
            <img
                className="h-4 w-4 md:h-6 md:w-6"
                src={instagram}
                alt="Instagram Logo"
            />
        </Link>
        <Link to={Whatsapp}>
            <img
                className="h-4 w-4 md:h-6 md:w-6"
                src={whatsapp}
                alt="WhatsApp Logo"
            />
        </Link>
    </div>
</div>


        <div
          className="mx-auto w-full my-5 h-[40px] flex flex-row items-center content-center justify-items-center gap-3 ml-[22%] md:ml-[50%] md:h-[90px] lg:mr-[30%] lg:ml-[35%] lg:mt-0 lg:w-[32%]"
          onClick={() => window.location.href = `${AppUrl}`}
        >
          <img
            className="w-[140px] h-[40px] border-[.5px] border-[#C8C9CB80] rounded-lg md:w-[170px] md:h-[50px]"
            alt="Play store"
            src={playstore}
          />
          <img
            className="w-[140px] h-[40px] border-[.5px] border-[#C8C9CB80] rounded-lg md:w-[170px] md:h-[50px]"
            alt="App store"
            src={applestore}
          />
        </div>
      </div>

      {/* Table */}
      <div className="justify-between grid grid-cols-2 mx-auto gap-3 md:grid-cols-4 lg:gap-44">
        <div>
          <span className="font-medium text-white-500">Partners</span>
          <ul>
            <li className="py-2 text-sm ">
              Ula
            </li>
            <li className="py-2 text-sm ">
              Cuber
            </li>
            <li className="py-2 text-sm ">
              Tapido
            </li>
            <li className="py-2 text-sm ">
              CluSmart
            </li>
          </ul>
        </div>
        <div className="text-white">
          <span className="font-medium text-white-500">COMPANY</span>
          <ul>
            <li className="py-2 text-sm " onClick={handleLinkClick}>
              <Link to="/AboutUs">About CabJun</Link>
            </li>
            <li className="py-2 text-sm text-[#C8C9CB80]" onClick={handleLinkClick}>
              <Link to="/team">Team</Link>
            </li>
            {/* <li className="py-2 text-sm text-[#C8C9CB80]">
              <Link to="/hiring">Join Us</Link>
            </li> */}
            {/* <li className="py-2 text-sm text-[#C8C9CB80]">
              <Link to="/investors">Investors</Link>
            </li> */}
            {/* <li className="py-2 text-sm text-[#C8C9CB80]">
              <Link to="/Partners">Partners</Link>
            </li> */}
          </ul>
        </div>
        <div>
          <span className="font-medium text-white-500">COMMUNITY</span>
          <ul>
            <li className="py-2 text-sm text-[#C8C9CB80]" onClick={handleLinkClick}>
              <a href="https://blog.CabJun.in/" target="_blank" rel="noopener noreferrer">Blog</a>
            </li>
            <li className="py-2 text-sm text-[#C8C9CB80]" onClick={handleLinkClick}>
              <Link to="/Faqs">FAQ's</Link>
            </li>
            <li className="py-2 text-sm text-[#C8C9CB80]" onClick={handleLinkClick}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-medium text-white-500">POLICY CENTER</span>
          <ul>
            <li className="py-2 text-sm text-[#C8C9CB80]" onClick={handleLinkClick}>
              <Link to="/tnc">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>

      <span
        className="text-[#C8C9CB80] text-center font-normal text-[12px] leading-[14px] mt-10 md:text-[14px] md:leading-[16px]"
        lang="en"
      >

      </span>
      <span className="text-[12px] leading-[14px] text-[#C8C9CB80] font-normal mx-auto flex content-center justify-center mix-blend-normal mt-4 md:text-[14px] md:leading-[16px] md:mt-8">
        © 2024 CabJun Pvt.Ltd. All rights reserved.
      </span>   
      
    </footer>
  );
};


