"use client";
import React from 'react';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from 'react-icons/rx';

//Import mail icon
import { HiOutlineMail } from 'react-icons/hi';


const Footer = () => {
  return (
    <div className="w-full z-[20] h-full bg-transparent text-gray-200 shadow-lg p-[15px] " >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div style={{zIndex:12000}}  className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <a href='https://github.com/Asim-eg' target='_blank' className="text-[15px] ml-[6px] cursor-pointer">GitHub</a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/asim-dev/')}>
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]"
              >LinkedIn</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]" onClick={() => window.open('https://www.instagram.com/asimaltaf.eg/')}>Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer hover:cursor-pointer ">
  <HiOutlineMail />
  <a href="mailto:asimaltaf.dev@gmail.com" className="text-[15px] ml-[6px]">
    asimaltaf.dev@gmail.com
  </a>
</p>

          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; 2021 Asim Altaf. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
