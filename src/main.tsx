import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import CartPage from './components/cart/CartPage'

const router =  createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Link to='/'><div className='text-xl p-8'>404 not found, click to go back to <span className='text-blue-600'>Home</span> page</div></Link>
},
{
  path: '/:cart',
  element: <CartPage/>
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
