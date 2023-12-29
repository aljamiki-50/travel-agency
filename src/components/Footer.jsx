import React from "react";

function Footer() {
  return (
    <>
      <div class=" bg-black py-12 flex flex-col font-poppins    antialiased  gap-y-10 ">
        <div className=" text-center flex  flex-col    justify-center">
          <h1
            className="text-white text-4xl font-bold
           md:text-2xl
           
            md:font-extrabold
           s:text-text-sm
           
            
           s:font-bold
          "
          >
            join the adventure to the newsLetterto receive our best vacation
            deal
          </h1>
          <h3 className="  text-cyan-100    text-2xl s:text-xl font-bold  py-2">
            {" "}
            you can unsubscribed at any time{" "}
          </h3>
          <div
            className="flex flex-row 
            justify-center py-6 gap-x-3 text-center   gap-y-4
             s:grid s:grid-cols-1  s:mx-14 
             gx:grid gx:grid-cols-1  gx:mx-14 
             
             
             "
          >
            <input
              type="email"
              className=" bg-white py-2  px-5 placeholder:tracking-wide hover:ring-cyan-400 hover:ring-1 placeholder:text-xl placeholder:font-roboto placeholder:font-bold placeholder:text-center "
              placeholder="Your Email"
            />
            <button
              className="    bg-transparent ring-2 ring-white px-4 
             text-white text-xl font-bold hover:scale-110 hover:pl-2 hover:bg-cyan-900"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/*  /** |-------------------------------------------------- | of course
        would be later change to full dynamic with a links and so forth
        |-------------------------------------------------- */}
        <div
          class="container mx-auto grid  gap-8 md:grid-cols-2 s:grid-cols-2
          gx:items-center gx:grid-cols-2
         s:items-center text-center grid-cols-4"
         
        >
          {/* <!-- Column 1 --> */}
          <div class="mb-6 md:mb-0">
            <h2 class="text-2xl font-extrabold text-white mb-4 s:text-base ">
              Company Name
            </h2>
            <p class="text-gray-400">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
          </div>

          {/* <!-- Column 2 --> */}
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold text-white mb-4">Social Media</h3>
            <ul>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 3 --> */}
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold text-white mb-4">Solutions</h3>
            <ul>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Commerce
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Column 4 --> */}
          <div>
            <h3 class="text-xl font-bold text-white mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Partners
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gray-900 py-4">
        <div class="container mx-auto text-center text-gray-500">
          <p class="text-sm">
            &copy; 2023 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
