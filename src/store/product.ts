import { defineStore } from 'pinia'
import { Product } from '@/models/Product'
import { Filters } from '@/models/Filters'
import { useInterfaceStore } from '@/store/interface'

interface FetchProductsResponse {
  products: Product[]
}

interface SortOption {
  value: string
  text: string
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],

    filters: {
      manufacturer: {},
      operating_system: {},
      colors: {},
      has_5g: {},
      has_esim: {},
      refurbished: {},
    } as Filters,
    selectedFilters: {
      manufacturer: null as string | null,
      operating_system: null as string | null,
      colors: null as string | null,
      has_5g: null as string | null,
      has_esim: null as string | null,
      refurbished: null as string | null,
    },

    sortOptions: [
      { value: 'sold', text: 'Most Sold' },
      { value: 'new', text: 'New' },
    ] as SortOption[],
    selectedSortOption: null as SortOption | null,
  }),

  getters: {
    filteredProducts(): Product[] {
      const filterOnProperty = (items: Product[], property: keyof Filters) => {
        return items.filter(item => {
          if (
            !this.selectedFilters[property] ||
            this.selectedFilters[property]?.split(' ')[0] === 'All'
          ) {
            return true
          }

          if (['manufacturer', 'operating_system'].includes(property)) {
            return (
              item[property] === this.selectedFilters[property]?.split(' ')[0]
            )
          }

          if (property === 'colors') {
            return item[property].includes(
              this.selectedFilters[property]?.split(' ')[0] ?? ''
            )
          }

          if (['has_5g', 'has_esim', 'refurbished'].includes(property)) {
            const value = this.selectedFilters[property]?.split(' ')[0]
            if (value === 'yes') return item[property] === true
            if (value === 'no') return item[property] === false
          }
        })
      }

      return (Object.keys(this.selectedFilters) as (keyof Filters)[])
        .reduce((acc, prop) => filterOnProperty(acc, prop), this.products)
        .sort((a, b) => {
          if (!this.selectedSortOption) return 0

          switch (this.selectedSortOption.value) {
            case 'sold':
              return b.sort_order - a.sort_order
            case 'new':
              return (
                new Date(b.release_date).getTime() -
                new Date(a.release_date).getTime()
              )
            default:
              return 0
          }
        })
    },
  },

  actions: {
    async loadProducts() {
      const interfaceStore = useInterfaceStore()

      try {
        interfaceStore.toggleLoading(true)

        const res = await fetch(import.meta.env.VITE_API_URL)
        if (!res.ok) throw new Error(`An error has occurred: ${res.status}`)

        const data: FetchProductsResponse = await res.json()
        this.products = data.products

        this.generateFilters()
      } catch (err) {
        const message = err instanceof Error ? err.message : (err as string)
        interfaceStore.alert({ message, type: 'error' })
      } finally {
        interfaceStore.toggleLoading(false)
      }
    },

    generateFilters() {
      const simpleFilters = (property: 'manufacturer' | 'operating_system') => {
        return this.products.reduce<Record<string, number>>(
          (s, v) => {
            if (!s[v[property]]) s[v[property]] = 1
            else s[v[property]]++

            return s
          },
          { All: this.products.length }
        )
      }

      const colorFilters = this.products.reduce<Record<string, number>>(
        (s, v) => {
          v.colors.forEach(color => {
            if (!s[color]) s[color] = 1
            else s[color]++
          })

          return s
        },
        { All: this.products.length }
      )

      const boolFilters = (property: 'has_5g' | 'has_esim' | 'refurbished') => {
        return this.products.reduce(
          (s, v) => {
            if (v[property]) s.yes++
            else s.no++

            return s
          },
          { All: this.products.length, yes: 0, no: 0 }
        )
      }

      this.filters.manufacturer = simpleFilters('manufacturer')
      this.filters.operating_system = simpleFilters('operating_system')
      this.filters.colors = colorFilters
      this.filters.has_5g = boolFilters('has_5g')
      this.filters.has_esim = boolFilters('has_esim')
      this.filters.refurbished = boolFilters('refurbished')
    },
  },
})
