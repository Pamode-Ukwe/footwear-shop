
interface Props {
  id: string
  image: string
  name: string
  price: number
  brand: string
  quantity: number
  subTotal: number
  increase: (id: string) => void
  decrease: (id: string) => void
  remove: (id: string) => void
}

const MappedItems = ({id, name, image, brand, price, quantity, subTotal, increase, decrease,remove}: Props) => { 
    
  console.log(subTotal)

  return (
   
    <div key={id} className="grid grid-cols-6 gap-6 my-6">
        <div className="col-span-3 flex gap-4">
          <img src={image} alt="IMG" className='w-24 h-24'/>
          <div className='my-auto'>
              <p className='text-sm font-semibold'>{name}</p>
              <p className='text-xs text-main-grey'>{brand}</p>
              <button onClick={() => remove(id)} className='text-sm text-form-border-gray font-semibold hover:text-red-500/60'>X Remove</button>
          </div>                
        </div>
        <div className='my-auto border border-main-grey text-center py-1 rounded-md'>
          <button className="cursor-pointer" onClick={() => decrease(id)}>-</button><span className='mx-3'>{quantity}</span>
          <button className="cursor-pointer" onClick={() => increase(id)}>+</button> 
        </div>
        <div className='my-auto'>{price}</div>
        <div className='my-auto'>{price * quantity}</div>
        <div className='border-b-[1px] border-main-grey col-span-6 w-full'></div>
    </div>
               
  )
}

export default MappedItems
