import { usePayment } from "../../store"
import { motion } from 'framer-motion'

const CheckoutForm = ({register, errors}: any) => {
  const payment = usePayment((state) => state.payment)
  const setPayment = usePayment((state) => state.setPayment)

  return (
    <motion.div initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.3, ease:'easeInOut'}} 
    variants={{hidden: {opacity: 0, x:-50}, visible: {opacity: 1, x:0}}} className="font-raleway">
          {/* Contact info */}
          <motion.div variants={{hidden: {opacity: 0.2}, visible: {opacity: 1}}} transition={{duration:0.5, delay: 0.2, ease:'easeOut'}} className="border border-form-border-gray rounded-md p-6">
            <p className="font-semibold text-lg my-2">Contact Information</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid">
                <p className="text-xs my-1">First Name</p>
                <input {...register('firstName')} required type="text" placeholder="First name" className="text-sm p-2 border border-form-border-gray rounded-md my-1 md:w-full w-[95%]"/>
                {errors.firstName && <p className="text-xs text-red-400 ml-[30%]">Invalid format</p>}
              </div>
              <div className="grid">
                <p className="text-xs my-1">Last Name</p>
                <input {...register('lastName')} required type="text" placeholder="Last name" className="text-sm p-2 border border-form-border-gray rounded-md my-1 md:w-full w-[98%]"/>
                {errors.lastName && <p className="text-xs text-red-400 ml-[30%]">Invalid format</p>}
              </div>  
            </div> 
            <p className="text-xs my-1">Phone Number</p>
            <input {...register('phoneNumber')} type="text" placeholder="Phone number" className="text-sm p-2 border border-form-border-gray rounded-md my-1 w-full"/>
              {errors.phoneNumber && <p className="text-xs text-red-400 ml-[80%]">Field must contain 10 - 15 numbers</p>}
            <p className="text-xs my-1">Email Adress</p>
            <input {...register('email')} type="text" placeholder="Your email" className="text-sm p-2 border border-form-border-gray rounded-md my-1 w-full"/>
             {errors.email && <p className="text-xs text-red-400 ml-[80%]">Invalid format</p>}
          {/* Shipping Adress */}
             <p className="font-semibold text-lg my-6">Shipping Adress</p>
             <p className="text-xs my-1">Street Adress *</p>
             <input {...register('streetAdress')} required type="text" placeholder="Street adress" className="text-sm p-2 border border-form-border-gray rounded-md my-1 w-full"/>
              {errors.streetAdress && <p className="text-xs text-red-400 ml-[80%]">Invalid format</p>} 
              <p className="text-xs my-1">Country *</p>
            <input {...register('country')} required type="text" placeholder="Country" className="text-sm p-2 border border-form-border-gray rounded-md my-1 w-full"/> 
              {errors.country && <p className="text-xs text-red-400 ml-[80%]">Invalid format</p>}
            <p className="text-xs my-1">Town/City *</p>
            <input {...register('town')} required type="text" placeholder="Town/City" className="text-sm p-2 border border-form-border-gray rounded-md my-1 w-full"/> 
              {errors.town && <p className="text-xs text-red-400 ml-[80%]">Invalid format</p>}
            <div className="grid grid-cols-2 gap-6">
              <div className="grid">
                <p className="text-xs my-1">State</p>
                <input {...register('state')} required type="text" placeholder="State" className="text-sm p-2 border border-form-border-gray rounded-md my-1 md:w-full w-[95%]"/>
                  {errors.state && <p className="text-xs text-red-400 ml-[80%]">Invalid format</p>}
              </div>
              <div className="grid">
                <p className="text-xs my-1">Zip Code</p>
                <input {...register('zipCode')} required type="text" placeholder="Zip code" className="text-sm p-2 border border-form-border-gray rounded-md my-1 md:w-full w-[95%]"/>
                  {errors.zipCode && <p className="text-xs text-red-400 ml-[80%]">Invalid format</p>}
              </div> 
              <span className="flex gap-3"><input type="checkbox" /> <p className="text-sm">Use a different billing adress</p></span>
            </div>                  
          </motion.div>
          {/* Payment Method */}
          <div className="border border-form-border-gray rounded-md p-6 mt-6">
            <p className="font-semibold text-lg my-2">Payment Method</p>             
            <div className="text-sm p-2 border border-form-border-gray rounded-md my-1 w-full" title="Credit card payments are temporarily down">
              <input name="pay" value='cardPayment' id="cardPayment" type="radio" title="Credit card payments are temporarily down" disabled/> Pay with credit card 💳💷⌨</div> 
            <div className="text-sm p-2 border border-form-border-gray rounded-md mt-4 mb-1 w-full">
              <input name="pay" onChange={e => setPayment(e.target.value)} checked={payment === 'delivery'} value='delivery' id="delivery" type="radio"/> Pay on delivery 📦</div> 
            <p className="text-xs mt-2 mb-1">Card Number</p>
            <input title="🚫" type='number' placeholder="1234 1234 1234" className="text-sm p-2 border border-form-border-gray rounded-md my-1 w-full" disabled/> 
            <div className="grid grid-cols-2 gap-6">
              <div className="grid">
                <p className="text-xs my-1">Expiration Date</p>
                <input title="🚫" type='month' placeholder="MM/YY" className="text-sm p-2 border border-form-border-gray rounded-md my-1" disabled/>
              </div>
              <div className="grid">
                <p className="text-xs my-1">CVC</p>
                <input title="🚫" type='number' placeholder="CVC code" className="text-sm p-2 border border-form-border-gray rounded-md my-1 md:w-full w-[98%]" disabled/>
              </div> 
              <span className="flex gap-3"><input type="checkbox" disabled/> <p className="text-sm">Use a different credit card</p></span>
            </div>                   
          </div>
        </motion.div>
  )
}

export default CheckoutForm
