import { useEffect, useState } from 'react'
import { useCart } from '../../logicStore'
import { useQuery } from '../../store'
import { motion } from 'framer-motion'
interface Product {
  id: string
  image: string
  name: string
  price: number
  brand: string
  quantity: number
  subTotal: number
}
const ForSale = () => {
   const productList: Product[] = [
      {id: 'aa',image: '../src/assets/Black crocs.png', name: 'Jordan Roam', price: 35, brand: 'Nike', quantity: 1, subTotal: 35},
      {id: 'ab',image: '../src/assets/red.png', name: 'Air Jordan 5 Retro SE', price: 125, brand: 'Nike', quantity: 1, subTotal: 125},
      {id: 'ac',image: '../src/assets/Frame green and red.png', name: ' Air Jordan 1 Low G', price: 60, brand: 'Nike', quantity: 1, subTotal: 60},
      {id: 'ad',image: '../src/assets/Fresh white.png', name: 'Air Jordan 6 Retro', price: 165, brand: 'Nike', quantity: 1, subTotal: 165},
      {id: 'ae',image: '../src/assets/Frame red and white.png', name: 'Jordan Spizike Low', price: 134, brand: 'Nike', quantity: 1, subTotal: 134},
      {id: 'af',image: '../src/assets/image 163.png', name: 'Air Jordan 5 Retro SE', price: 144, brand: 'Nike', quantity: 1, subTotal: 144},
      {id: 'ag',image: '../src/assets/Frame black.png', name: 'Jordan Max Aura 6', price: 125, brand: 'Nike', quantity: 1, subTotal: 125},
      {id: 'ah',image: '../src/assets/Frame black and white.png', name: 'Air Jordan 1 Retro OG', price: 120, brand: 'Nike', quantity: 1, subTotal: 120},
      {id: 'ai',image: '../src/assets/Frame 1000004200.png', name: 'Air Jordan 1 Element', price: 125, brand: 'Nike', quantity: 1, subTotal: 125},
      {id: 'aj',image: '../src/assets/5.png', name: ' Air Jordan 1 Mid SE', price: 68, brand: 'Nike', quantity: 1, subTotal: 68},
      {id: 'ak',image: '../src/assets/6.png', name: 'Jordan Spizike Low', price: 134, brand: 'Nike', quantity: 1, subTotal: 134},
      {id: 'al',image: '../src/assets/red.png', name: 'Air Jordan 5 Retro SE', price: 125, brand: 'Nike', quantity: 1, subTotal: 125},
      {id: 'am',image: '../src/assets/Frame black.png', name: 'Jordan Max Aura 6', price: 125, brand: 'Nike', quantity: 1, subTotal: 125},
      {id: 'an',image: '../src/assets/image 163.png', name: 'Air Jordan 5 Retro SE', price: 144, brand: 'Nike', quantity: 1, subTotal: 144},
      {id: 'ao',image: '../src/assets/Frame red and white.png', name: 'Jordan Spizike Low', price: 134, brand: 'Nike', quantity: 1, subTotal: 134},
      {id: 'ap',image: '../src/assets/Frame black and white.png', name: 'Air Jordan 1 Retro OG', price: 120, brand: 'Nike', quantity: 1, subTotal: 120},
      {id: 'aq',image: '../src/assets/Black crocs.png', name: 'Jordan Roam', price: 35, brand: 'Nike', quantity: 1, subTotal: 35},
      {id: 'ar',image: '../src/assets/red.png', name: 'Air Jordan 5 Retro SE', price: 125, brand: 'Nike', quantity: 1, subTotal: 125},
      {id: 'as',image: '../src/assets/Frame green and red.png', name: ' Air Jordan 1 Low G', price: 60, brand: 'Nike', quantity: 1, subTotal: 60},
      {id: 'at',image: '../src/assets/Fresh white.png', name: 'Air Jordan 6 Retro', price: 165, brand: 'Nike', quantity: 1, subTotal: 165},
      {id: 'au',image: '../src/assets/Frame red and white.png', name: 'Jordan Spizike Low', price: 134, brand: 'Nike', quantity: 1, subTotal: 134},
      {id: 'av',image: '../src/assets/image 163.png', name: 'Air Jordan 5 Retro SE', price: 144, brand: 'Nike', quantity: 1, subTotal: 144},
      {id: 'aw',image: '../src/assets/Frame black.png', name: 'Jordan Max Aura 6', price: 125, brand: 'Nike', quantity: 1, subTotal: 125},
      {id: 'ax',image: '../src/assets/Frame black and white.png', name: 'Air Jordan 1 Retro OG', price: 120, brand: 'Nike', quantity: 1, subTotal: 120},
  ]
  const cart = useCart((state) => state.cart)
  const query = useQuery((state) => state.query)
  const setQuery = useQuery((state) => state.setQuery)
  const addToCart = useCart((state) => state.addToCart)
  const getFilteredItems = useQuery((state) => state.getFilteredItems)
  const filteredItems = getFilteredItems(query, productList)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const currentItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  function goToNextPage () {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage +1 )
    }
  }
  function goToPreviousPage () {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function checkId(id: string){
    return cart.find((product) => product.id === id)
  }
  function addItem(id: string){
    const newProduct = productList.filter((product) => product.id === id)
    !checkId(id) && addToCart(newProduct[0])
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  function highlightedLetters(name: string, query: string) {
    if (!query) {
      setQuery('')
    return <span>{name}</span>
    }
    const regex = new RegExp(`(${query})`, 'gi')
    const letters = name.split(regex)
    return (
      <span>
        {
          letters.map((letter, index) => 
            letter.toLowerCase() === query.toLowerCase() ? (<span key={index} className='bg-hero-bg p-1 rounded-full'>{letter}</span>) :
            (<span key={index}>{letter}</span>)
        )}
      </span>
    )
  }

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10 font-raleway">
        {currentItems && (currentItems.map((product) => {
          return (
            <div key={product.id} className='p-3 bg-gradient-to-b from-transparent via-orange-200/5 to-transparent'>
              <img onClick={() => addItem(product.id)} src={product.image} alt="Product" className='hover:cursor-pointer transform transition duration-900 hover:scale-105 p-1'/>
              <p className='text-3xl text-pricing-red font-semibold py-2'>${product.price}.00</p>
              <div className='flex justify-between'>
                <span>
                  <p className='text-form-border-gray'>{highlightedLetters(product.brand, query)}</p>
                  <p className='text-sm font-semibold'>{highlightedLetters(product.name, query)}</p>
                </span>
                <motion.button whileTap={{scale: 0.9, backgroundColor: "#38CB34"}} transition={{bounceDamping: 10, bounceStiffness: 600}} 
                onClick={() => addItem(product.id)} 
                className='bg-main-black text-sm rounded-md text-main-grey px-3 hover:shadow-xl hover:shadow-green-200 hover:text-green-100'>
                  Add to cart</motion.button>              
              </div> 
            </div> )}))}
      </div> 
      <div className='text-center my-3'>
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className='hover:text-discount-offer'>◄&nbsp;</button>
        <span>{currentPage}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages} className='hover:text-discount-offer'>&nbsp;►</button>
      </div>
    </>)
}

export default ForSale
