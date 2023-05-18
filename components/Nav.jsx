"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Disclosure } from "@headlessui/react";
import Services from "./Services";
import Features from "./Features";
export default function Nav() {
 
  return (
    <>
      <div className="w-full ">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link
                    href="#"
                    className="flex items-center space-x-2 text-2xl font-medium text-indigo-600 dark:text-gray-100"
                  >
                    <Image
                      src="/assets/logo.png"
                      alt="logo"
                      width={65}
                      height={65}
                    />
                  </Link>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700 dark:focus:text-gray-300"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      
                        <Link
                
                          href="/"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700 font-inter font-semibold"
                        >
                          Home
                        </Link>
                        <Link
                
                          href="#services"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700 font-inter font-semibold"
                        >
                          Services
                        </Link>
                        <Link
                
                          href="#features"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700 font-inter font-semibold"
                        >
                          Features
                        </Link>
                        <Link
                
                          href="#about"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700 font-inter font-semibold"
                        >
                          About Us
                        </Link>
                        <Link
                
                          href="#faq"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700 font-inter font-semibold"
                        >
                          FAQ
                        </Link>
                        <Link
                
                          href="#contact"
                          className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700 font-inter font-semibold"
                        >
                          Contact Us
                        </Link>
                     
                      <Link
                        href="#"
                        className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md lg:ml-5"
                      >
                        Sign In
                      </Link>
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
             
                <li className="mr-3 nav__item">
                  <Link
                    href="/"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#services"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Services
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#features"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Features
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#about"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#faq"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mr-3 nav__item">
                  <Link
                    href="#contact"
                    className="inline-block px-4 py-2 text-md font-inter text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-600 focus:text-indigo-600 focus:bg-indigo-100 focus:outline-none font-semibold"
                  >
                    Contact Us
                  </Link>
                </li>
       
            </ul>
          </div>

          <div className="hidden mr-3 space-x-3 lg:flex nav__item">
            <Link
              href="#"
              className="px-6 py-2 text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md md:ml-5"
            >
              Sign In
            </Link>
          </div>
        </nav>
       
      </div>
    </>
  );
}
