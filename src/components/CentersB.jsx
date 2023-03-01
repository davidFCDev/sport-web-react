import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CentersB = () => {

    const animationOptions = {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2 }
    };

    const [ref1, inView1] = useInView({ threshold: 0.7, triggerOnce: true });
    const [ref2, inView2] = useInView({ threshold: 0.7, triggerOnce: true });

    return (
        <section className='w-full h-[700px] sm:h-[250px] md:h-[400px] flex flex-col sm:flex-row items-center justify-between'>
            <div className='box-1 w-[100%] sm:w-[50.5%] h-[50%] sm:h-full flex' ref={ref1}>
                <div className='class-box-large w-full h-full flex items-end'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView1 ? animationOptions : {}}
                        className='max-w-[120px] md:max-w-[170px] flex flex-col gap-1 sm:gap-2 md:gap-3 mx-5 my-5 md:mx-8 md:my-8'>
                        <p className='text-[16px] italic'>Calle del Campeón, 100, Ciudad del Deporte, Estrella del Norte</p>
                        <div className='centers-btn'>BOX 006</div>
                    </motion.div>
                </div>
            </div>
            <div className='box-2 w-[100%] sm:w-[49%] h-[49.5%] sm:h-full flex ' ref={ref2}>
                <div className='class-box-large w-full h-full flex items-end'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView2 ? animationOptions : {}}
                        className='max-w-[120px] md:max-w-[170px] flex flex-col gap-1 sm:gap-2 md:gap-3 mx-5 my-5 md:mx-8 md:my-8'>
                        <p className='text-[16px] italic'>Avenida del Gol, 789, Ciudad del Deporte, Campeonato Mundial</p>
                        <div className='centers-btn'>BOX 007</div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CentersB
