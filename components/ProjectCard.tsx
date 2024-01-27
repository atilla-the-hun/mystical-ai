"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title, text}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='w-[450px] h-[480px] rounded-md cursor-pointer'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-[100.01%] h-[100.01%] rounded-md bg-black opacity-0 group-hover:opacity-80'/>
                    <div className='absolute inset-0 w-full h-full text-[15px] pb-10 hidden group-hover:flex items-center z-[20] justify-center font-mono'>
                    Learn more &gt;
                    </div>
            </div>
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                    <div  className='absolute inset-0 w-full h-full rounded-md bg-black opacity-80 z-[-1]'/>
                  <div className='flex flex-col gap-20 py-3 z-[30]'>
                    <h1 className='text-white text-2xl font-semibold font-mono'>{title}</h1>
                    <p className='text-gray-200 text-[14px] card-paragraph font-mono'>
                        {text}
                    </p>
                  </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard