import { useCart } from '../../logicStore'
import { useRadio, useStayUp } from '../../store'
import { useNextPage } from './cartstore'
import { motion } from 'framer-motion'
import MappedItems from './MappedItems'
//import { Key } from 'lucide-react'

const Items = () => {
  const radio = useRadio((state) => state.radio)
  const setRadio = useRadio((state) => state.setRadio)
  const cart = useCart((state) => state.cart)
  const updateCart = useCart((state) => state.updateCart)
  const increaseQuantity = useCart((state) => state.increaseQuantity)
  const decreaseQuantity = useCart((state) => state.decreaseQuantity)
  const setRefresh = useStayUp((state) => state.setRefresh)
  const updatePage = useNextPage((state) => state.updatePage)
  function handleRemove(id: string){
    const updatedItem = cart.filter((item) => item.id !== id)
    updateCart(updatedItem)
    localStorage.setItem('cart', JSON.stringify(updatedItem))
    //console.log(updatedItem)
  }
  const finalSubTotal = cart.reduce((acc, item) => acc + item.subTotal, 0)
  function radioSum(){
    return radio === 'Express' ? 15 : 0
  }
  const finalTotal = finalSubTotal + radioSum() 
  function overallMove() {
    updatePage('secondPage')
    setRefresh
  }
    
  return (
    <section className="px-8 py-8 grid md:grid-cols-2 gap-10 bg-hero-bg/5">
      {/* Products */}
      <motion.div  initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.3, ease:'easeInOut'}} 
              variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}}>
        {/* Titles */}
        <div>
          <div className="grid grid-cols-6 md:gap-0 gap-6 sm:text-md text-sm">
            <p className="col-span-3 font-semibold">Product</p>
            <p className="font-semibold">Quantity</p>
            <p className="font-semibold px-1">Price <span className='text-xs'>($)</span></p>
            <p className="font-semibold">Subtotal <span className='text-xs'>($)</span></p>
          </div>
          <div className="border-b-[1px] border-black mt-4 mb-12"></div>
        </div>
        {/* Items */}
        <div>
        {cart.map((product) => (
          <MappedItems key={product.id + Math.random()} id={product.id} name={product.name} image={product.image} brand={product.brand} price={product.price} quantity={product.quantity}
          subTotal={product.subTotal} increase={increaseQuantity} decrease={decreaseQuantity} remove={handleRemove}
          />
        ))}
        </div>
        {/* Coupon */}
        <div className='bg-white p-3 rounded-sm'>
          <p className="font-semibold">Have a coupon?</p>
          <p className="text-sm text-form-border-gray my-4">Add your code for an instant cart discount</p>
          <input type="text" placeholder='⌨ Coupon code' className='text-sm p-2 border-[2px] w-1/2 outline-1 outline-form-border-gray mr-6 rounded-md'/>
          <button className='border-none text-sm font-semibold hover:bg-main-grey p-2 rounded-md'>Apply</button>
        </div>
      </motion.div>
        {/* Cart Summary */}
      <motion.div  initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.3, ease:'easeOut'}} 
              variants={{hidden: {opacity: 0, x:50}, visible: {opacity: 1, x:0}}} className='font-semibold mx-auto md:mx-0 w-full
              md:ml-[40%] gap-6 border-[1px] border-form-border-gray p-6 rounded-lg md:w-3/5 max-h-fit bg-hero-bg/10'>
        <p className='text-lg'>Cart summary:</p>
        <label htmlFor='Free' className='flex border-[1px] my-6 border-form-border-gray p-3 rounded-md justify-between hover:cursor-pointer'>
          <span><input type="radio" name='shipping' onChange={e => setRadio(e.target.value)} value='Free' checked={radio === 'Free'} id='Free' className='mr-6'/>Free shipping</span> 
          <p><span className='text-sm'>$</span>0</p>
        </label>
        {radio === 'Free' && <span className='text-xs text-form-border-gray my'>*within 30 days</span>}
        <label htmlFor='Express' className='flex border-[1px] my-6 border-form-border-gray p-3 rounded-md justify-between hover:cursor-pointer'>
          <span><input type="radio" name='shipping' onChange={e => setRadio(e.target.value)} value='Express' id='Express' className='mr-6'/>Express shipping</span> 
          <p><span className='text-sm'>$</span>15</p>
        </label>
        {radio === 'Express' && <span className='text-xs text-form-border-gray my'>*within 3 days</span>}
        <label htmlFor='Pick-up' className='flex border-[1px] my-6 border-form-border-gray p-3 rounded-md justify-between hover:cursor-pointer'>
          <span><input type="radio" name='shipping' onChange={e => setRadio(e.target.value)} value='Pick-up' id='Pick-up' className='mr-6'/>Pick up</span> 
          <p><span className='text-sm'>$</span>0</p>
        </label>
        {radio === 'Pick-up' && <span className='text-xs text-form-border-gray my'>*within 21 days</span>}
        <span className='flex text-sm my-3 font-bold justify-between'><p>Sub-total <span className='text-sm'>($)</span>: </p> <p>{finalSubTotal}</p></span>
        <span className='flex font-bold my-3 justify-between'><p>Total <span className='text-sm'>($)</span>: </p> <p>{finalTotal}</p></span>
        <button onClick={() => overallMove()} className='text-white my-3 bg-black rounded-md mt-2 p-2 w-full'>Checkout</button>
      </motion.div>     
    </section>
  )
}

export default Items
