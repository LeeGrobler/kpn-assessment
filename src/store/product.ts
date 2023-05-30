import { defineStore } from 'pinia'
import { Product } from '@/models/Product'
import { useInterfaceStore } from './interface'

interface FetchProductsResponse {
  products: Product[]
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
  }),

  actions: {
    async loadProducts() {
      const interfaceStore = useInterfaceStore()

      try {
        interfaceStore.toggleLoading()

        const res = await fetch(import.meta.env.VITE_API_URL)
        if (!res.ok) throw new Error(`An error has occurred: ${res.status}`)

        const data: FetchProductsResponse = await res.json()
        this.products = data.products
      } catch (err) {
        const message = err instanceof Error ? err.message : (err as string)
        interfaceStore.alert({ message, type: 'error' })
      } finally {
        interfaceStore.toggleLoading()
      }
    },
  },
})
