import CheckoutForm from './CheckoutForm'
import OrderSummary from './OrderSummary'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNextPage } from './cartstore'
import { useCart } from '../../logicStore'
import { useStayUp } from '../../store'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string().regex(/^[0-9+]{10,15}$/),
  email: z.string().email(),
  streetAdress: z.string(),
  country: z.string(),
  town: z.string(),
  state: z.string(),
  zipCode: z.string()
})
type FormFields = z.infer<typeof formSchema>

const Checkout = () => {
  const updatePage = useNextPage((state) => state.updatePage)
  const cart = useCart((state) => state.cart)
  const updateCart = useCart((state) => state.updateCart)
  const refresh = useStayUp((state) => state.refresh)
  const { register, handleSubmit, formState: {errors, isSubmitting}, reset} = useForm<FormFields>({resolver: zodResolver(formSchema)})
  
  async function onFormSubmission(_data: FormFields) {
    // The data arguement helps us submit this info elsewhere
    await new Promise((resolve) => setTimeout(resolve, 1000))
    cart.length > 0 && updatePage('thirdPage'), reset(), updateCart([]), localStorage.setItem('cart', JSON.stringify([]))
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [refresh])
  
  return (
    <section className="px-12 py-8 grid bg-hero-bg/5">
      <form onSubmit={handleSubmit(onFormSubmission)} id='myForm'>
        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left side */}
          <CheckoutForm register={register} errors={errors}/>
          {/* Right side */}
          <motion.div initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.2}} transition={{duration: 0.3, ease:'easeOut'}} 
              variants={{hidden: {opacity: 0, x:50}, visible: {opacity: 1, x:0}}}>
            {/* Order Summary */}
            <OrderSummary/>
          </motion.div>
        </div>
        {/* Place order button */}
        <button type='submit' form='myForm' disabled={isSubmitting}
        className={`text-white my-6 p-2 w-full md:w-1/2 rounded-md ${isSubmitting? 'bg-form-border-gray':'bg-black'}`}>Place order</button>
      </form>    
    </section>
  )
}

export default Checkout
