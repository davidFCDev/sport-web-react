import { useState } from 'react';
import { navLinks } from '../constants/index';
import {
    RiMoneyEuroCircleFill,
    RiCalendar2Line,
    RiInstagramLine,
} from 'react-icons/ri';
import { GrInstagram } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import menu from '../assets/images/menu.svg';
import close from '../assets/images/close.svg';
import styles from '../style';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav
        className={`${styles.paddingX} flex justify-between items-center navbar`}
        >
        <div>
            <a href="#">
                <img
                    src="/src/assets/images/logoWeb.png"
                    className="max-w-[200px]"
                    alt="try"
                />
            </a>
        </div>

        <ul className="list-none sm:flex hidden justify-end items-center gap-4 text-[12px] md:gap-8 md:text-[15px]">
            {navLinks.map((nav, index) => (
            <li key={nav.id} className="" onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            ))}
            <li><GrInstagram className="text-[15px] md:text-[25px] hover:cursor-pointer hover:scale-110" /></li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center pr-2 sm:pr-0">
            <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
            />

            <div
                className={`${
                !toggle ? 'hidden' : 'flex'
            } p-6 bg-black-gradient border border-dimWhite absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md`}
            >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-2 text-[15px]">
                <Link to={'/prices'}>
                    <li className="flex items-center gap-1">
                        <span className='text-slate-100'>TARIFAS</span><RiMoneyEuroCircleFill />
                    </li>
                </Link>
                <Link to={'/timetable'}>
                    <li className="flex items-center gap-1">
                        <span className='text-slate-100'>HORARIOS</span><RiCalendar2Line />
                    </li>
                </Link>
                <a href="https://www.instagram.com/tryfitness._/">
                    <li className="flex items-center gap-1">
                        <span className='text-slate-100'>INSTAGRAM</span><RiInstagramLine />
                    </li>
                </a>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar
