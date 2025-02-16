import { useNextPage } from "./cartstore"
import Checkout from "./Checkout"
import Items from "./Items"
import Sucessful from "./Sucessful"
import { secondPage, secondPageNum, secondPageLine } from "./cartstore"
import { useEffect } from "react"

const CartContent = () => {
  const page = useNextPage((state) => state.page)
  const updatePage = useNextPage((state) => state.updatePage) 

  function finalCheck(){
    page !== 'thirdPage' && updatePage('secondPage')
  } 
  function lastCheck(){
    page !== 'thirdPage' && updatePage('firstPage')
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="text-4xl font-semibold text-center p-4 bg-hero-bg/5">Cart</div>
      <div className="flex md:gap-12 gap-2 p-10 justify-center bg-hero-bg/5 items-center">
        {/* Shopping Cart */}
        <div onClick={() => lastCheck()} className="cursor-pointer sm:text-md text-sm">
          <p className={`${page !== 'secondPage' && page!== 'thirdPage' ? 'font-semibold' : 'font-semibold text-sucess-green text-sm'}`}>
            <span className={`${page !== 'secondPage' && page!== 'thirdPage' ? 'bg-black text-white py-2 px-4 rounded-full mr-2' : 'bg-sucess-green text-white py-2 px-4 rounded-full mr-2'}`}>1</span> 
            Shopping Cart</p>
          <p className={`${page !== 'secondPage' && page!== 'thirdPage' ? 'border-b-2 mt-6 border-black w-44' : 'border-b-2 mt-6 border-sucess-green w-44'}`}></p>
        </div>
        {/* Checkout Details */}
        <div onClick={() => finalCheck()} className=" cursor-pointer sm:text-md text-sm">
          <p className= {secondPage(page)}>
            <span className={secondPageNum(page)}>2</span> 
            Checkout Details</p>
            <p className={secondPageLine(page)}></p>
            </div>
        {/* Order Complete */}
        <div>
          <p className={`${page === 'thirdPage' ? "font-semibold text-sucess-green flex sm:text-md text-sm items-center" : "font-semibold text-main-grey flex sm:text-md text-sm items-center"}`}>
            <span className={`${page === 'thirdPage' ? "bg-sucess-green text-white py-2 px-4 rounded-full mr-2" : "bg-main-grey text-white py-2 px-4 rounded-full mr-2"}`}>3</span>  
            <span><span className="hidden md:flex">Order Complete</span></span></p>
        </div>
      </div>
      {page === 'firstPage' && <Items/>}
      {page === 'secondPage' && <Checkout/>}
      {page === 'thirdPage' && <Sucessful/>}
    </>
  )
}

export default CartContent
