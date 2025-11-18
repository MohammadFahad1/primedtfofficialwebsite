import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const NavMenu = (
    <>
      <li>
        <Link
          className="px-3 py-2 hover:bg-[#bf2340] hover:text-white transition-colors rounded duration-300"
          href={"/customdtf"}
        >
          DTF Custom Transfer
        </Link>
      </li>
      {/* <li>
        <Link
          className="px-3 py-2 hover:bg-[#bf2340] hover:text-white transition-colors rounded duration-300"
          href={"/uv-dtf"}
        >
          UV DTF
        </Link>
      </li> */}
      <li>
        <div className="dropdown dropdown-hover p-0 hover:bg-[#bf2340] hover:text-white">
          <div
            tabIndex={0}
            role="button"
            className="px-3 py-2  transition-colors rounded duration-300"
          >
            Blanks
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-white rounded-box z-50 w-52 p-2 shadow-sm ml-10 mt-0 sm:m-0"
          >
            <li>
              <Link
                className="px-3 py-3 text-black bg-white shadow hover:bg-[#bf2340] hover:text-white transition-colors rounded duration-300"
                href={"/blanks/tshirts"}
              >
                Blank T-Shirts
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-3 text-black bg-white shadow hover:bg-[#bf2340] hover:text-white transition-colors rounded duration-300"
                href={"/blanks/sweatshirt"}
              >
                Blank Sweatshirts
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-3 text-black bg-white shadow hover:bg-[#bf2340] hover:text-white transition-colors rounded duration-300"
                href={"/blanks/hoodies"}
              >
                Blank Hoodies
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link
          className="px-3 py-2 hover:bg-[#bf2340] hover:text-white transition-colors rounded duration-300"
          href={"/faq"}
        >
          FAQ
        </Link>
      </li>
      <li>
        <Link
          className="px-3 py-2 hover:bg-[#bf2340] hover:text-white transition-colors rounded duration-300"
          href={"/contact-us"}
        >
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <>
      {/* Top Header */}
      <marquee
        loop={true}
        className="bg-[#bf2340] px-5 py-1 md:py-2 text-md md:text-xl font-bold text-white m-0"
      >
        <span className="mr-8 my-0">
          Working Hours: 10:30 AM to 8:30 PM | Working Days: Saturday - Thursday
          | (B2B Only)
        </span>
        <span className="mr-8 my-0">
          Working Hours: 10:30 AM to 8:30 PM | Working Days: Saturday - Thursday
          | (B2B Only)
        </span>
        <span className="mr-8 my-0">
          Working Hours: 10:30 AM to 8:30 PM | Working Days: Saturday - Thursday
          | (B2B Only)
        </span>
      </marquee>
      <div className="bg-black px-5 py-1 text-sm md:py-2 md:text-md text-center font-bold text-white -mt-2 my-0">
        <p className="my-0">Acid Wash Drop is Back in Stock!</p>
      </div>
      {/* Navbar */}
      <nav
        className="navbar bg-white text-[#19191C] font-extrabold shadow-sm w-full px-10 md:justify-between z-50"
        id="myHeader"
      >
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavMenu}
            </ul>
          </div>
          <Link href={"/"} className="sm:block hidden">
            <Image
              src={"/assets/logo.png"}
              width={100}
              height={80}
              alt="logo"
              className="md:mx-auto"
            />
          </Link>
        </div>
        <Link href={"/"} className="block sm:hidden">
          <Image
            src={"/assets/logo.png"}
            width={100}
            height={80}
            alt="logo"
            className="md:mx-auto"
          />
        </Link>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg z-20">{NavMenu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-neutral border-[#d55027] rounded text-[#d55027] font-bold sm:w-auto px-5 py-3 shadow-lg hover:bg-[#d55027] hover:text-white transition duration-150">
            Login
          </a>
        </div>
      </nav>
    </>
  );
}
