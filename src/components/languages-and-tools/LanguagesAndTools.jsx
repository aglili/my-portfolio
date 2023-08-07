import React from 'react'
import {SiDjango,SiGit,SiHeroku,SiPostgresql,SiPostman,SiPython,SiSelenium} from "react-icons/si"
import {FaGolang} from "react-icons/fa6"


function LanguagesAndTools() {
  return (
    <main className="mb-16">
        <h1 className="text-2xl font-bold">Languages and Tools</h1>
        <br />
        <section className="flex gap-5 items-center flex-wrap">
            <SiDjango className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
            <SiGit className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
            <FaGolang className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
            <SiHeroku className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
            <SiPostgresql className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
            <SiPostman className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
            <SiPython className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
            <SiSelenium className="text-3xl cursor-pointer hover:scale-110 ease duration-500"/>
        </section>
    </main>
  )
}

export default LanguagesAndTools