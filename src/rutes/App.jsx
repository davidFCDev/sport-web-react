import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Class from '../components/Class';
import Centers from '../components/Centers';
import styles from '../style';
import Navbar from '../components/Navbar';
import PreLoader from '../components/PreLoader';
import About from '../components/About';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import ButtonBack from '../components/ButtonBack';
import { Toaster } from 'react-hot-toast';
import Form from '../components/Form';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showButtonBack, setShowButtonBack] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about')
      if (aboutSection && window.scrollY >= aboutSection.offsetTop) {
        setShowButtonBack(true)
      } else {
        setShowButtonBack(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    const timeoutId = setTimeout(() => setIsLoading(false), 1500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className="screen">
            <div className="screen-gradient">
              <Navbar />
              <Hero />
            </div>
          </div>
          <div>
            <About />
            <div className="form-container">
              <Form />
            </div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              {showButtonBack && <ButtonBack />}
              <Centers />
              <Class />
            </div>
          </div>
          <div>
            <Toaster />
            <Partners />
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}

export default App
