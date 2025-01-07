import ForSale from "./ForSale"

const LatestProducts = () => {
  return (
    <section id="latest-products" className="p-8 font-inconsolata">
      <p className="text-2xl font-bold mb-4">Latest Products</p>
      <div>
        <ForSale/>
      </div>
      <p className='w-full border-b-[0.1rem] mt-10 border-main-grey'></p>
    </section>
  )
}

export default LatestProducts
