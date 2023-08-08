import { ProjectsList } from "@/db/Index";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

function Projects() {
  return (
    <main className="mb-16">
      <h1 className="text-2xl font-bold">Projects</h1>
      <br />
      <section className="flex flex-col gap-5">
        {ProjectsList.map((item, index) => {
          return (
            <section
              key={index}
              className="border border-[#dbb538] p-5 rounded hover:scale-105 ease duration-500 cursor-pointer"
            >
              <h1 className="text-xl font-bold">{item.name}</h1>
              <p className="text-[#8e8d8d]">{item.about}</p>
              <a href={item.github} target="_blank">
                <AiOutlineGithub className="text-2xl mt-5" />
              </a>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default Projects;
