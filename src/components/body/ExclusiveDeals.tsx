import { useMovement } from '../../store'
import firstImage from '../body/bodyAssets/firstImage.png'
import secondImage from '../body/bodyAssets/secondImage.png'
import thirdImage from '../body/bodyAssets/thirdImage.png'
import { motion } from 'framer-motion'

const ExclusiveDeals = () => {
    const firstStyle = 'text-2xl font-bold'
    const secondStyle = 'text-form-border-gray mt-3 mb-6'
    const thirdStyle = "bg-black text-white mx-[20%] px-6 py-3 rounded-full mb-2 hover:cursor-pointer z-20 shadow-lg hover:shadow-green-100 hover:text-green-100 hover:bg-form-border-gray"
    const autoScroll = useMovement((state) => state.autoScroll)
  return (
    <section id='exclusive-deals' className="p-8 font-inconsolata">
        <p className="text-3xl font-bold mb-4">Exclusive Deals Just For You</p>
        <motion.div initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.2, staggerChildren: 0.2}} 
        variants={{hidden: {opacity: 0}, visible: {opacity: 1}}} className='sm:grid grid-cols-3 gap-6'>
            <motion.div variants={{hidden: {opacity: 0}, visible: {opacity: 1}}} className="text-center grid mb-6 sm:mb-0 p-6 bg-exclusive-deal-1 rounded-2xl">
                <img src={firstImage} alt="First Image" className='size-[18.5rem] mx-auto'/>
                <p className={firstStyle}>Limited-Time Offers</p>
                <p className={secondStyle}>Grab hot deals before they're gone! Exclusive discounts on top brands for a limited time</p>
                <button onClick={() => autoScroll('latest-products')} className={thirdStyle}>Explore Now ↡</button>
            </motion.div>

            <motion.div variants={{hidden: {opacity: 0}, visible: {opacity: 1}}} className="text-center grid mb-6 sm:mb-0 p-6 bg-exclusive-deal-2 rounded-2xl">
                <img src={secondImage} alt="Second Image" className='size-[18.5rem] mx-auto'/>
                <p className={firstStyle}>Get Suprise Items</p>
                <p className={secondStyle}>Discover exclusive, surprises curated just for you. Don't miss out on these rare finds!</p>
                <button onClick={() => autoScroll('latest-products')} className={thirdStyle}>Explore Now ↡</button>
            </motion.div>

            <motion.div variants={{hidden: {opacity: 0}, visible: {opacity: 1}}} className="text-center grid mb-6 sm:mb-0 p-6 bg-exclusive-deal-3 rounded-2xl">
                <img src={thirdImage} alt="Third Image" className='size-[18.5rem] mx-auto'/>
                <p className={firstStyle}>Members-Only Access</p>
                <p className={secondStyle}>Unlock special perks and early access to new releases and stay ahead in the sneaker game.</p>
                <button onClick={() => autoScroll('latest-products')} className={thirdStyle}>Explore Now ↡</button>
            </motion.div>
        </motion.div>
        <p className='w-full border-b-[0.1rem] mt-10 border-main-grey'></p>
    </section>
  )
}

export default ExclusiveDeals

// Add personalized order as a div and implement self slider
