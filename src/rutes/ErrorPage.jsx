import { useState, useEffect } from 'react';
import PreLoader from '../components/PreLoader';
import { VscError } from 'react-icons/vsc';

const ErrorPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
        {isLoading && (
            <PreLoader />
        )}
        {!isLoading && (
            <div className='bg-black min-h-screen flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center gap-6'>
                    <h1 className='text-[40px] font-bold'>Oops!</h1>
                    <p>Algo ha fallado...</p>
                    <VscError className='text-[50px] text-red-500'/>
                </div>
            </div>
        )}
        </div>
    );
};

export default ErrorPage;