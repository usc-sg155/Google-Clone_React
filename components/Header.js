import React, { useRef } from "react";
import Image from "next/dist/client/image";
import { useRouter } from "next/dist/client/router";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border items-center border-gray-200 shadow-lg rounded-full max-w-3xl">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none "
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer sm:mr-3 transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2012/03/28/Style/Images/t3282.jpg?uuid=_HqPaHjaEeGW_E4_moVh7g"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
