import { defineStore } from 'pinia'
import { Product } from '@/models/Product'

interface FetchProductsResponse {
  products: Product[]
}

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
    products: [] as Product[],
  }),

  actions: {
    async loadProducts() {
      try {
        this.loading = true

        const res = await fetch(import.meta.env.VITE_API_URL)
        const data: FetchProductsResponse = await res.json()

        this.products = data.products
      } catch (err) {
        const message = err instanceof Error ? err.message : (err as string)
        console.log('message:', message)
        // this.alertService.alert({ message, type: 'error' })
      } finally {
        this.loading = false
      }
    },
  },
})
