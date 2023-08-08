"use client";
import React, { useEffect } from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { annotate } from "rough-notation";

function HeroSection() {
  useEffect(() => {
    const e = document.querySelector("#myName");
    const annotation = annotate(e, { type: "underline" });
    annotation.show();
  }, []);

  return (
    <section className="mb-16">
      <section className="w-full">
        <h1 className="text-2xl xl:text-4xl font-bold mb-2 w-fit">
          Aglili Selorm Cecil
        </h1>
        <div>
          <p className="text-[#8e8d8d] xl:text-xl w-fit" id="myName">
            Backend Engineer
          </p>
        </div>
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
