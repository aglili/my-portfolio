import React from "react";

function Navbar() {
  return (
    <nav className="nav-container fixed w-screen h-[7vh] top-0 left-0 z-[50]">
      <section className="max-w-[1000px] mx-auto flex justify-between items-center py-3 px-3 xl:px-0">
        {/* Left */}
        <section>
          <p className="font-bold">{`>> cecil`}</p>
        </section>
        {/* Right */}
        <section>
          <a href="mailto:cecilselorm34@gmail.com">
            <span className="uppercase text-xs md:text-md md:w-[10%] border border-[#ffffff] rounded-[45px] px-[8px] py-[5px] hover:text-white ease duration-500 hover:border-white">
              contact
            </span>
          </a>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
