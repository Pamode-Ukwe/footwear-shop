import { useCart } from '../../logicStore'
import { useRadio } from '../../store'

const OrderSummary = () => {
  const cart = useCart((state) => state.cart)
  const radio = useRadio((state) => state.radio)
  const finalSubTotal = cart.reduce((acc, item) => acc + item.subTotal, 0)
  function radioSum(){
    return radio === 'Express' ? 15 : 0
  }
  const finalTotal = finalSubTotal + radioSum()

  return (
    <div className='md:ml-[40%] ml-0 border border-form-border-gray rounded-md sm:w-3/5 p-6 md:mx-0 mx-16 bg-hero-bg/10 w-full'>
            <p className="font-semibold text-xl mt-2 mb-4">Order Summary</p>
            {/* Mapped out items from previous page */}
             {cart.map((product) => (
                <div className="grid grid-cols-3 gap-6 my-6 bg-white p-3">
                  <img src={product.image} alt="IMG" className='w-24 h-24 col-span-1'/>
                  <div className='col-span-2 gap-3'>
                    <div className="flex justify-between text-sm font-semibold">
                      <p>{product.name}</p>
                      <p>{product.price * product.quantity}</p>
                    </div>
                    <p className="grid text-xs text-main-grey my-3">{product.price}</p>
                    <div className="flex justify-between text-sm py-1">
                      <p>Quantity:</p>
                      <p>{product.quantity}</p>
                    </div>
                  </div>
              </div>
             ))}  
            <div className="border-b-[1px] my-4"></div>
            <input type="text" placeholder='Input' className='text-sm my-3 text-main-grey p-2 border-[2px] w-3/4 outline-1 outline-form-border-gray mr-3 rounded-md'/>
            <button type='button' className='bg-main-black text-white text-sm font-semibold p-2 rounded-md'>Apply</button>
            <div className='grid'>
              <div className="grid font-semibold text-sm my-2">
                <div className='flex justify-between'>
                  <p>Shipping:</p>
                  <p>{radio}</p>
                </div>
                <div className='flex justify-between my-3'>
                  <p>Sub-total:</p>
                  <p>{finalSubTotal}</p>
                </div>
                <div className='flex justify-between font-bold text-lg'>
                  <p>Total:</p>
                  <p>{finalTotal}</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default OrderSummary
