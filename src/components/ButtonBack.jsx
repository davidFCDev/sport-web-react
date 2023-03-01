import React from 'react';
import { HiArrowSmUp } from 'react-icons/hi'

const ButtonBack = () => {
    const handleClick = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 100
        });
    };

    return (
        <button onClick={handleClick} className='back-btn'>
            <HiArrowSmUp />
        </button>
    )
}

export default ButtonBack
