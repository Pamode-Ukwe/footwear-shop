import { useBooleanStore } from "../../store"

interface Props{
    productImage: string
    productName: string
}

const Overlay = ({productImage, productName}: Props) => {
    const showOverlay = useBooleanStore( state => state.setCheck)    
  return (
    <div className="bg-main-black/90 text-white h-full inset-0 z-50 fixed">
        <div className="w-screen mx-[40%] my-[6%]">
            <button onClick={()=>showOverlay} className="text-red-400 py-2 ml-[20%]">x</button>
            <img src={productImage} alt="PRODUCT" />
            <p className="py-2 font-semibold">{productName}</p>
            <div className="flex">
                <select name="" id="" className="outline-none rounded-md text-black">
                    <option value="">Same Color</option>
                    <option value="">Black</option>
                    <option value="">White</option>
                    <option value="">Red</option>
                </select>
                <button className="bg-black text-main-grey p-3 rounded-md ml-[6%]">Add to cart</button>
            </div>           
        </div>
    </div>
  )
}

export default Overlay
