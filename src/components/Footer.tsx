import Instagram from '../components/body/bodyAssets/instagram icon.png'
import Facebook from '../components/body/bodyAssets/facebook icon.png'
import YouTube from '../components/body/bodyAssets/youtube icon.png'
import { Link } from 'react-router-dom'
import { useMovement } from '../store'

const Footer = () => {
  const autoScroll = useMovement((state) => state.autoScroll)
  const hoverStyle = 'hover:text-discount-offer hover:font-semibold'
  return (
    <section id='footer' className="bg-main-black text-main-grey">
        <div className="p-12">
            <div>
              <div className="flex justify-between items-center">
                <p className="flex text-xs font-extralight items-center"><a href='/' className="text-2xl font-bold">SOLESPHERE
                  </a>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-xl">|</span>&nbsp;&nbsp;&nbsp;&nbsp;Shoe Store</p>
                <ul className="flex gap-6 text-xs">
                  <Link to={`/`}><li className={hoverStyle}><button onClick={() => autoScroll('home')}>Home</button></li></Link>
                  <li className={hoverStyle}><button onClick={() => autoScroll('exclusive-deals')}>Shop</button></li>
                  <li className={hoverStyle}><button onClick={() => autoScroll('latest-products')}>Products</button></li>
                  <li className={hoverStyle}><button onClick={() => autoScroll('footer')}>Contact Us</button></li>
                </ul>
              </div>
            </div>
            <p className='w-full border-b-[0.1rem] mt-10 border-main-grey'></p>
            <div className="flex justify-between items-center py-6">
              <p className="text-sm font-semibold"><span className="text-sm font-thin">Copyright © 2023 SOLESPHERE. All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;
                </span>Privacy Policy&nbsp;&nbsp;&nbsp;&nbsp; Terms of Use</p>
              <ul className="flex gap-6 items-center">
                <li><img src={Instagram} alt="IG" /></li>
                <li><img src={Facebook} alt="FB" /></li>
                <li><img src={YouTube} alt="YT" /></li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer
