
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { reactjs, webspy } from "../assets";
import "./hero.css"
import ResumeButton from "./Button";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-15 h-15 rounded bg-[#6d96e3]' />
          <div className="w-24 h-24 mb-4" style={{ position: 'relative' }}>
  <img src={webspy} style={{ width: '100%', height: '100%', zIndex:'0' }} alt="Webspy" />
  <img src={reactjs} className="w-12 h-12 rotate-animation" style={{ position: 'absolute', top: '25%', left: '25%', transform: 'translate(-50%, -50%)', zIndex:'2' }} alt="ReactJS" />
</div>

          <div className='sm:w-10 w-5 sm:h-80 h-40 bg-gradient-to-r from-sky-800' />
        </div>
        <div className="w-full">
      <h1 className={`${styles.heroHeadText}
      text-white`}>Hi, I'm<span 
      className='text-[#6d96e3]'> Ishita
      </span> </h1>
      <p>
      I'm a ML enthusiast and backend developer <br 
          className="sm:block hidden"        /* wrong with this why not working */
        />
         constantly seeking to evolve through
         embracing new technologies and techniques.
      </p>
      <div>
     <div className="flex sm:hidden mt-4">
      <ResumeButton/>
     </div>
      </div>
    <div className="hidden sm:flex sm:flex-row flex-col w-full h-[20rem] items-center">
     <div className="flex items-start w-1/4">
<ResumeButton/>
     </div>
     <div className="sm:h-[12rem] md:h-[18rem] lg:h-[20rem] w-full flex lg:ml-64">
 <ComputersCanvas/>
     </div>
    </div>
   
     </div>
      </div>
<div className="absolute bottom-36 left-4 sm:hidden">      
  <ComputersCanvas/>
  </div>
  <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>

            <motion.div
              animate={{
                y: [0, 28, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />

          </div>
        </a>
      </div> 
 </section>
  );
};

export default Hero; 
 
