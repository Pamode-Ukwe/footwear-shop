import { create } from "zustand";

interface NextPage {
    page: string,
    updatePage: (page: NextPage['page']) => void
}

export const useNextPage = create<NextPage>((set) => ({
    page: 'firstPage',
    updatePage: (page) => set(() => ({ page: page}))
}))

export function secondPage(page: string) {
    if (page === 'firstPage') {
      return 'font-semibold text-main-grey text-nowrap'
    } else if (page === 'secondPage') {
      return 'font-semibold text-black text-nowrap'
    } else {
      return 'font-semibold text-sucess-green text-nowrap text-sm'
    }
  }
export function secondPageNum(page: string) {
    if (page === 'firstPage') {
      return 'bg-main-grey text-white py-2 px-4 rounded-full mr-2'
    } else if (page === 'secondPage') {
      return 'bg-black text-white py-2 px-4 rounded-full mr-2'
    } else {
      return 'bg-sucess-green text-white py-2 px-4 rounded-full mr-2'
    }
  }
export  function secondPageLine(page: string) {
    if (page === 'firstPage') {
      return 'hidden'
    } else if (page === 'secondPage') {
      return 'border-b-2 mt-6 border-black w-44'
    } else {
      return 'border-b-2 mt-6 border-sucess-green w-44'
    }
  }
  