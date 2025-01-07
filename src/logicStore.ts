import { create } from "zustand";

interface Product {
    id: string
    image: string
    name: string
    price: number
    brand: string
    quantity: number
    subTotal: number
}

interface Items {
    cart: Product[] 
    addToCart: (newProduct: Product) => void
    updateCart: (Product: Product[]) => void // To omit deleted tasks
    increaseQuantity: (id: string) => void
    decreaseQuantity: (id: string) => void
}

export const useCart = create<Items>((set) => ({
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),  

    addToCart: (newProduct) => set((state) => {
        return { cart: [...state.cart, newProduct] }
    }),

    updateCart: (item) => {
        set({ cart: item })
    },

    increaseQuantity: (id) => set((state) => ({
        cart: state.cart.map((product) => product.id === id ? 
        { ...product, quantity: product.quantity + 1, subTotal: product.price * (product.quantity + 1) } : product ),
    })),

    decreaseQuantity: (id) => set((state) => ({
        cart: state.cart.map((product) => product.id === id && product.quantity >= 2 ? 
        { ...product, quantity: product.quantity - 1, subTotal: product.price * (product.quantity - 1)  } : product) 
    }))
}))
