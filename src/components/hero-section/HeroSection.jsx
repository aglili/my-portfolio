import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

function HeroSection() {
  return (
    <section className="mb-16">
      <section className="w-full">
        <h1 className="text-2xl font-bold">Aglili Selorm Cecil</h1>
        <p className="text-[#777777]">Backend Engineer</p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          cumque vero quos repellendus tempora consectetur quaerat veniam. Neque
          sunt tempore aliquam autem voluptatem doloribus, sit, nesciunt dolorem
          enim laborum esse.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          cumque vero quos repellendus tempora consectetur quaerat veniam. Neque
          sunt tempore aliquam autem voluptatem doloribus, sit, nesciunt dolorem
          enim laborum esse.
        </p>
        <br />
        <section className="flex gap-5 flex-wrap">
          <a href="https://github.com/aglili">
            <AiOutlineGithub className="text-3xl" />
          </a>
          <a href="https://twitter.com/0x7fff5fbff7c8">
            <AiOutlineTwitter className="text-3xl" />
          </a>
          <a href="https://linkedin.com/in/aglili%20selorm%20cecil">
            <AiOutlineLinkedin className="text-3xl" />
          </a>
        </section>
      </section>
    </section>
  );
}

export default HeroSection;
