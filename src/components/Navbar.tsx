import { Menu, Search, ShoppingCart } from 'lucide-react'
import Logo from '../assets/Frame 1000005056.png'
import { useGeneralStore, useMovement, useQuery } from '../store'
import { Link } from 'react-router-dom'
import { useCart } from '../logicStore'
import { motion } from 'framer-motion'

const Navbar = () => {
  const showSearchBar = useGeneralStore((state) => state.showSearchBar)
  const searchBar = useGeneralStore((state) => state.searchBar)
  const showSideBar = useGeneralStore((state) => state.showSideBar)
  const cart = useCart((state) => state.cart)
  const query = useQuery((state) => state.query)
  const setQuery = useQuery((state) => state.setQuery)
  const hoverStyle = 'hover:text-discount-offer hover:font-semibold'
  const iconStyle = 'border rounded-3xl p-2 hover:text-gray-600'
  const autoScroll = useMovement((state) => state.autoScroll)
  function handleSearch() {
    showSearchBar()
    setQuery('')
  }
   return (
    <motion.nav initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.1}} transition={{duration: 0.5, ease:'easeOut', delay: 0.1}} 
    variants={{hidden: {opacity: 0, y:-5}, visible: {opacity: 1, y:0}}} className= 'font-raleway sticky top-0 z-50 bg-zinc-100 font-semibold'>
      <section className='flex justify-between mx-10 py-6 items-center'>
        <div>
          <a href="/"><img src={Logo} alt="LOGO" className={`hover:cursor-pointer ${!searchBar && `hidden sm:flex`}`}/></a>
        </div>
        <ul className='hidden md:flex justify-between gap-20 py-3'>
          <Link to={`/`}><li className={hoverStyle}><button onClick={() => autoScroll('home')}>Home</button></li></Link>
          <li className={hoverStyle}><button onClick={() => autoScroll('exclusive-deals')}>Shop</button></li>
          <li className={hoverStyle}><button onClick={() => autoScroll('latest-products')}>Products</button></li>
          <li className={hoverStyle}><button onClick={() => autoScroll('footer')}>Contact Us</button></li>
        </ul>
        <div className='flex gap-8'>
          {/* Icons */}
          <Link to={`/`}><div>
            { searchBar ? <button onClick={showSearchBar} className={iconStyle}><Search/></button> : 
            <span className='flex border shadow-lg shadow-discount-offer/20 items-center rounded-xl p-1 bg-hero-bg/10'>
              <input onClick={() => autoScroll('latest-products')} type='text' onChange={e => setQuery(e.target.value)} value={query} className='outline-none p-1 text-sm bg-hero-bg/10 rounded-lg'/>
                <Search onClick={() => handleSearch()} className='size-4 cursor-pointer text-gray-500 z-10'/>
            </span>             
            }
          </div></Link>
          <Link to={`/cart`}><button className={`${iconStyle} flex`}><ShoppingCart/><span>{cart.length > 0 && cart.length}</span></button></Link>          
        </div>
        <div className='flex md:hidden'>
          <button onClick={showSideBar} className={iconStyle}><Menu/></button>
        </div>
      </section>      
    </motion.nav>   
  )
}

export default Navbar
