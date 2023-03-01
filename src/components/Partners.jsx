import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Partners = () => {

    const animationOptions = {
        opacity: 0.5,
        y: 0,
        transition: { duration: 1.5 }
    };

    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
    
    return (
        <section className="w-full flex items-center justify-center py-2 sm:py-5 md:py-12 mb-10">

            <motion.div 
                className="flex items-center opacity-40 gap-5 sm:gap-10 md:gap-24 overflow-hidden" 
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? animationOptions : {}}
                ref={ref}>
                <img
                    src="/assets/images/logoRogue.png"
                    alt="logoCF"
                    className="max-w-[60px] sm:max-w-[110px] md:max-w-[180px] hover:scale-110 hover:transition-transform"
                />
                <img
                    src="/assets/images/logoReebok.png"
                    alt="logoCF"
                    className="max-w-[60px] sm:max-w-[110px] md:max-w-[180px] hover:scale-110 hover:transition-transform"
                />
                <img
                    src="/assets/images/logoTLF.png"
                    alt="logoCF"
                    className="max-w-[40px] sm:max-w-[90px] md:max-w-[140px] hover:scale-110 hover:transition-transform"
                />
                <img
                    src="/assets/images/logoNocco.png"
                    alt="logoCF"
                    className="max-w-[60px] sm:max-w-[100px] md:max-w-[170px] hover:scale-110 hover:transition-transform"
                    />
                <img
                    src="/assets/images/logoCrossfit.png"
                    alt="logoCF"
                    className="max-w-[65px] sm:max-w-[110px] md:max-w-[180px] hover:scale-110 hover:transition-transform"
                />
            </motion.div>

        </section>
    )
}

export default Partners
