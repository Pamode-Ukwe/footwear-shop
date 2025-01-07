// import { useEffect, useState } from "react"
// import IndividualCart from "./IndividualCart"

// interface FetchProps {
//   organization_id: string | any
//   reverse_sort: string | any
//   page: string | any
//   size: string | any
//   Appid: string | any
//   Apikey: string | any
// }
// interface Product {
//   id: number
//   name: string
//   current_price: string | any
//   description: string
//   photos: any
// }

// const fetchedProducts = async ({ organization_id, reverse_sort, page, size, Appid, Apikey }: FetchProps) => {
//   const url = new URL(' https://timbu-get-all-products.reavdev.workers.dev/');
//   url.searchParams.append('organization_id', organization_id);
//   url.searchParams.append('reverse_sort', reverse_sort);
//   url.searchParams.append('page', page);
//   url.searchParams.append('size', size);
//   url.searchParams.append('Appid', Appid);
//   url.searchParams.append('Apikey', Apikey);

//   const response = await fetch(url.toString());

//   if (!response.ok) {
//       throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const ProductList = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<boolean>(false);
//   const [isEmpty, setIsEmpty] = useState<boolean>(false)
//   const [page, setPage] = useState<number>(1)

//   useEffect(() => {
//     const params = {
//         organization_id: '740ed662895d4726891bd6af6ce84a00',
//         reverse_sort: 'false',
//         page: page,
//         size: 16,
//         Appid: 'SZO42Y9Z5IW9LWL',
//         Apikey: 'b7266698e2b942c4b8460b618f3ef7b820240715014640680123'
//     };

//     const getProducts = async () => {
//         setLoading(true);
//         setError(false);
//         try {
//             const data = await fetchedProducts(params);
//             setProducts(data.items);
//             console.log(data)
//             setIsEmpty(data.total === 0);
//         } catch (error) {
//             setError(true);
//         } finally {
//             setLoading(false);
//         }
//     };

//     getProducts();
// }, [page]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching products</div>;
//   if (isEmpty) return <div>No products found</div>
//   console.log(products[1])
  
//   return (
//     <section className="container mx-auto px-10 py-8 border-b-2">
//         <div className="text-2xl font-bold font-raleway mb-8">Latest Products</div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
//         {Array.isArray(products) && products.length > 0 && products.map(product => (
//             <IndividualCart key={product.id} productPhoto={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
//             productName={product.name} productPrice={(product?.current_price[0]?.NGN)} productDescription={product.description}/>
//         ))}
//         </div>
//         <div className="flex justify-center">
//           <button onClick={() => setPage(page > 1 ? page - 1 : 1)} className="hover:text-discount-offer hover:underline">Prev&nbsp;-</button>
//           <button onClick={() => setPage(page < 2 ? page + 1 : 2)} className="hover:text-discount-offer hover:underline">&nbsp;Next</button>
//         </div>
//     </section>
//   );
// }

// export default ProductList
