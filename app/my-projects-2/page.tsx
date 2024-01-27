"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover overflow-x-hidden overflow-y-scroll'
    >
      <div className='max-w-[90%] max-h-[90%] mt-[10px] text-center'>
        <h1 className="text-white font-mono text-[45px] font-normal mt-11 image-manipulation-heading">Autonomous Agent Development</h1>
        <h2 className="text-white font-light font-mono image-manipulation-subheading mb-10">Click a card for more information</h2>
        <div>
        <a
            href="https://codelab-seven.vercel.app/"
            className="rounded-[15px] group relative px-2 py-2 text-[19px] text-white max-w-[200px] pb-2 button-primary-tools ml-[45px] polycam"
            target="_blank"
          >
            <span className="text-xl font-mono polycam-mobile-text">Workflow Automation</span>
          </a>
          <a
           href="https://codelab-seven.vercel.app/"
            className="rounded-[15px] group relative px-2 py-2 text-l text-white max-w-[200px] pb-2 button-primary-tools ml-[215px] polycam-2"
            target="_blank"
            
          >
            <span className="text-xl font-mono">Natural Language to SQL</span>
          </a>
          </div>
          <div>
          <a
           href="https://codelab-seven.vercel.app/"
            className="rounded-[15px] group relative px-2 py-2 text-l text-white max-w-[200px] pb-2 button-primary-tools ml-[215px] polycam-2-mobile"
            target="_blank"
            
          >
            <span className="text-xl font-mono polycam-2-mobile-text">Natural Language to SQL</span>
          </a>
          </div>
          <div>
          <a
           href="https://codelab-seven.vercel.app/"
            className="rounded-[15px] group relative px-2 py-2 text-l text-white max-w-[200px] pb-2 button-primary-tools ml-[215px] polycam-3-mobile"
            target="_blank"
            
          >
            <span className="text-xl font-mono polycam-2-mobile-text">Complex Data Pipelines</span>
          </a>
          </div>
          <div>
          <a
           href="https://codelab-seven.vercel.app/"
            className="rounded-[15px] group relative px-2 py-2 text-l text-white max-w-[200px] pb-2 button-primary-tools ml-[215px] polycam-4-mobile"
            target="_blank"
            
          >
            <span className="text-xl font-mono polycam-4-mobile-text">Self-Adaptive Decision Systems</span>
          </a>
          </div>
          
          <div className="mt-[645px]">
          <a
            href="https://codelab-seven.vercel.app/"
            className="rounded-[15px] group relative px-2 py-2 text-l text-white max-w-[200px] pb-2 button-primary-tools ml-[70px] polycam-3"
            target="_blank"
          >
            <span className="text-xl font-mono">Complex Data Pipelines</span>
          </a>
          <a
           href="https://codelab-seven.vercel.app/"
            className="rounded-[15px] group relative px-2 py-2 text-l text-white max-w-[200px] pb-2 button-primary-tools ml-[160px] polycam-4"
            target="_blank"
            
          >
            <span className="text-xl font-mono">Self-Adaptive Decision Systems</span>
          </a>
          </div>
      
        <div className='grid grid-cols-2 gap-5 project-card -mt-[750px] ml-8'>
          {Projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;