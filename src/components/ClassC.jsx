import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClassC = () => {

    const animationOptions = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const [ref1, inView1] = useInView({ threshold: 0.7, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true });
    const [ref3, inView3] = useInView({ threshold: 0.7, triggerOnce: true });

    return (
        <section className='class w-full h-[1050px] sm:h-[250px] md:h-[400px] flex flex-col sm:flex-row items-center justify-between'>

            <div className='powerlifting w-[100%] sm:w-[33%] h-[33.2%] sm:h-full flex' ref={ref1}>
                <div className='class-box w-full h-full flex items-end'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView1 ? animationOptions : {}}  
                        className='max-w-[120px] md:max-w-[160px] flex flex-col gap-1 sm:gap-1 md:gap-3 mx-5 my-5 md:mx-8 md:my-8'>
                        <h1 className='sm:text-[20px] md:text-[30px]'>Powerlifting</h1>
                        <p className='text-[16px] font-light italic'>Modalidad para los más exigentes</p>
                        <div className='class-btn'>BOX 006</div>
                    </motion.div>
                </div>
            </div>

            <div className='endurance w-[100%] sm:w-[33%] h-[33.2%] sm:h-full flex' ref={ref2}>
                <div className='class-box w-full h-full flex items-end'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView2 ? animationOptions : {}}  
                        className='max-w-[120px] md:max-w-[160px] flex flex-col gap-1 sm:gap-1 md:gap-3 mx-5 my-5 md:mx-8 md:my-8'>
                        <h1 className='sm:text-[20px] md:text-[30px]'>Endurance</h1>
                        <p className='text-[16px] font-light italic'>Suda hasta la última gota</p>
                        <div className='class-btn'>BOX 007</div>
                    </motion.div>
                </div>
            </div>

            <div className='sala w-[100%] sm:w-[33%] h-[33%] sm:h-full flex' ref={ref3}>
                <div className='class-box w-full h-full flex items-end'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView3 ? animationOptions : {}} 
                        className='max-w-[120px] md:max-w-[160px] flex flex-col gap-1 sm:gap-1 md:gap-3 mx-5 my-5 md:mx-8 md:my-8'>
                        <h1 className='sm:text-[20px] md:text-[30px]'>Sala</h1>
                        <p className='text-[16px] font-light italic'>Trabajo libre a tu gusto</p>
                        <div className='class-btn'>BOX 007</div>
                    </motion.div>
                </div>
            </div>

        </section>
    )
}

export default ClassC