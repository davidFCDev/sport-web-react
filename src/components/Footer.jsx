import React from 'react'
import { MdLocationOn, MdOutlinePhoneAndroid } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className='footer flex flex-col justify-between items-center py-10 px-10'>
            <ul className='grid grid-cols-2 sm:flex sm:flex-row justify-center gap-8 sm:gap-12 md:gap-28'>
                <li className='w-[150px] md:w-[200px] flex flex-col gap-3'>
                    <div className='flex items-center gap-2'>
                        <h1>UBICACIÓN</h1>
                        <MdLocationOn className='text-xl'/>
                    </div>
                        <a href='#' className='hover:underline'>Box 006: <span className='italic'>Calle del Campeón, 100, Ciudad del Deporte, Estrella del Norte</span></a>
                        <a href='#' className='hover:underline'>Box 007: <span>Avenida del Gol, 789, Ciudad del Deporte, Campeonato Mundial</span></a>
                </li>
                <li className='w-[150px] md:w-[200px] flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <h1>HORA. GYM</h1>
                        <FaRegClock className='text-xl'/>
                    </div>
                    <p>L-V: 6:15am - 23pm</p>
                    <p>S-D: 9am - 14pm</p>
                </li>
                <li className='w-[150px] md:w-[200px] flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <h1>TELÉFONO</h1>
                        <MdOutlinePhoneAndroid className='text-xl'/>
                    </div>
                        <p>Box 006: 666765432</p>
                        <p>Box 007: 666123456</p>
                </li>
                <li className='w-[150px] md:w-[200px] flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <h1>SOCIAL</h1>
                        <BiLike className='text-xl'/>
                    </div>
                    <div className='flex gap-2 '>
                        <a href='#'><GrInstagram className='text-gray-300 hover:scale-110'/></a>
                        <a href='#'><BsFacebook className='text-gray-300 hover:scale-110'/></a>
                    </div>
                </li>
            </ul>

            <div className='flex justify-center'>
                <ul className='flex sm:gap-3'>
                    <li className='text-[10px] text-center'><Link to={'legal'} >Aviso legal</Link></li>
                    <li className='text-[10px] text-center'><Link to={'privacity'} >Política de privacidad</Link></li>
                    <li className='text-[10px] text-center'><Link to={'cookies'} >Política de cookies</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer