import { create } from "zustand";
import { Product } from "./productList";

//////////////////////////////////////////////////////////////////////////////////////////////////////////  Navbar elements

interface GeneralStore {
    searchBar: boolean
    showSearchBar: () => void
    sideBar: boolean
    showSideBar: () => void
}

export const useGeneralStore = create<GeneralStore>((set) => ({
    searchBar: true,
    showSearchBar() {
        set((state) => ({ searchBar: !state.searchBar}))
    },
    sideBar: false,
    showSideBar() {
        set((state) => ({ sideBar: !state.sideBar}))
    },
}))

/////////////////////////////////////////////////////////////////////////////////////////////////////////// Moves to cart summary page

interface BooleanStore {
    checked: boolean
    setCheck: (item: boolean) => void
}

export const useBooleanStore = create<BooleanStore>((set) => ({
    checked: false,
    setCheck: (item) => {
        set({ checked: item})
    },
}))

/////////////////////////////////////////////////////////////////////////////////////////////////////////// Step by step slider for cart page

interface Select {
    value: string
    setValue: () => void
}

export const useSelect = create<Select>((set) => ({
    value: '',
    setValue() {
        set((state) => ({ value: state.value}))
    },
}))

/////////////////////////////////////////////////////////////////////////////////////////////////////////// Radio input for check out

interface Radio {
    radio: string
    setRadio: (item: string) => void
}

export const useRadio = create<Radio>((set) => ({
    radio: 'Free',
    setRadio(item) {
        set({ radio: item})
    },
}))

/////////////////////////////////////////////////////////////////////////////////////////////////////////// Card payment option

interface Payment {
    payment: string
    setPayment: (item: string) => void
}

export const usePayment = create<Payment>((set) => ({
    payment: 'delivery',
    setPayment(item) {
        set({ payment: item})
    },
}))

/////////////////////////////////////////////////////////////////////////////////////////////////////////// Query state
interface Locate {
    query: string
    setQuery: (term: string) => void
    getFilteredItems: (query:string, products: Product[]) => Product[]
}

export const useQuery = create<Locate>((set) => ({
    query: '',
    setQuery: (term: string) => set({query: term}),
    getFilteredItems(query, products) {
        if (!query) {
            return products
        }
        return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()) || 
                product.brand.toLowerCase().includes(query.toLowerCase()))
    },
}))

/////////////////////////////////////////////////////////////////////////////////////////////////////////// Cart section Switch to top of page
interface StayUp{
    refresh: boolean
    setRefresh: () => void
}

export const useStayUp =  create<StayUp>((set) => ({
    refresh: false,
    setRefresh() {
        set((state) => ({ refresh: !state.refresh}))
    },
}))

/////////////////////////////////////////////////////////////////////////////////////////////////////////// Auto scroll
interface Move {
    autoScroll: (id:string) => void
}

export const useMovement = create<Move>(() => ({
    autoScroll(id) {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
    }
    },
}))

