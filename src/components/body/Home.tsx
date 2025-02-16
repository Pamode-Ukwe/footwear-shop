import { motion } from 'framer-motion'
import { useGeneralStore, useMovement } from '../../store'
import Hero from '../body/bodyAssets/Kalyan_Shadow_11-2 1.png'
import pattern from '../body/bodyAssets/hero_bg_pattern.png'
import { Link } from 'react-router-dom'
// Amount sets how far you scroll before seeing the effects
const Home = () => {
  const sideBarStyle = 'hover:text-hero-bg hover:font-semibold mb-8 px-2'
  const sideBar = useGeneralStore((state) => state.sideBar)
  const autoScroll = useMovement((state) => state.autoScroll)
  return (
    <section id='home' className='bg-hero-bg font-inconsolata'>        
        <img src={pattern} className="w-screen opacity-5 absolute" />
        { sideBar && <ul className='md:hidden fixed z-50 right-4 p-2 bg-discount-offer text-white w-[20%] rounded-sm'>
            <Link to={`/`}><li className={sideBarStyle}><button onClick={() => autoScroll('home')}>Home</button></li></Link>
          <li className={sideBarStyle}><button onClick={() => autoScroll('exclusive-deals')}>Shop</button></li>
          <li className={sideBarStyle}><button onClick={() => autoScroll('latest-products')}>Products</button></li>
          <li className={sideBarStyle}><button onClick={() => autoScroll('footer')}>Contact Us</button></li>
        </ul> }
        <div className='bg-pattern grid relative md:grid-cols-2 m-2 text-white'>
            <motion.div initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.3, ease:'easeOut'}} 
              variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}} className='w-[75%] mx-auto md:mt-[22%] mt-[10%]'>
                <h1 className='text-4xl font-bold mb-6 w-4/5 font-raleway'>Step Up Your Sneaker Game</h1>
                <h2 className='text-2xl space-y-3 mb-6'>Discover the latest and greatest in sneaker fashion. From exclusive releases to unbeatable deals, find your perfect pair today!</h2>
                <motion.button whileHover={{scale: 1.1}}  variants={{hidden: {opacity: 0.5}, visible: {opacity: 1}}} transition={{delay: 0.2}} 
                onClick={() => autoScroll('latest-products')} 
                className='text-xl z-30 bg-black py-3 px-6 rounded-full mb-6 hover:shadow-md hover:text-green-100 hover:bg-form-border-gray'>
                    Explore Now</motion.button>
            </motion.div>
            <motion.div initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.5, ease:'easeOut'}} 
              variants={{hidden: {opacity: 0, y:50}, visible: {opacity: 1, y:0}}} >
                <img src={Hero} alt="A Pair Of Sneakers" />
            </motion.div>
        </div>
    </section>
  )
}

export default Home
