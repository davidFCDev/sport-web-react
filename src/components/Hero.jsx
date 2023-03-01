import React from 'react';
import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";
import Form from './Form';


const Hero = () => {

    return (
        <section className='flex items-center mx-20 my-56 sm:my-10 md:my-32 relative'>
            <motion.div 
                className='hero-title w-full grid grid-cols-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }}>

                <div className='flex flex-col gap-28 sm:gap-16 md:gap-36 items-center col-start-1 sm:col-start-3 col-span-6 sm:col-span-2'>
                    <div>
                        <h1 className='font-light text-[35px] sm:text-[20px] md:text-[40px] italic'><span className='font-semibold'>TRAIN</span> hard,</h1>
                        <h1 className='ml-10 font-light text-[35px] sm:text-[25px] md:text-[40px] italic'>get <span className='font-semibold'>STRONGER.</span></h1>
                    </div>
                    <a href='#about' className='flex flex-col gap-10 items-center'>
                            <p className='font-extralight text-[15px] md:text-[18px] italic tracking-widest hover:text-secondary hover:font-bold'>conócenos...</p>
                            <button className='btn-main flex flex-col items-center justify-center rounded-full'>
                                <SlArrowDown className='text-3xl'/>
                            </button>
                    </a>
                </div>

                <div className='main-form-container sm:col-start-6 md:col-start-6'>
                    <Form />
                </div>

            </motion.div>
        </section>
    )
}

export default Hero