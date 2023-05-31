<template>
  <v-card class="mb-4">
    <v-card-item class="filters">
      <v-select
        v-for="filter in Object.keys(productStore.filters)"
        :key="filter"
        v-model="productStore.selectedFilters[filter as keyof Filters]"
        :label="toStartCase(filter)"
        :items="filterEntries(filter)"
        hide-details
      />
    </v-card-item>
  </v-card>
</template>

<script lang="ts" setup>
  import { useProductStore } from '@/store/product'
  import { onMounted } from 'vue'
  import { Filters } from '@/models/Filters'

  const productStore = useProductStore()

  const filterEntries = (key: string) => {
    return Object.entries(
      productStore.filters[key as keyof typeof productStore.filters]
    ).map(([k, v]) => `${k} (${v})`)
  }

  const toStartCase = (str: string) => {
    return str
      .split('_')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  }

  onMounted(() => {
    productStore.selectedSortOption = productStore.sortOptions[0]

    Object.keys(productStore.selectedFilters).forEach(key => {
      productStore.selectedFilters[key as keyof Filters] = Object.keys(
        productStore.filters[key as keyof typeof productStore.filters]
      )[0] as keyof Filters
    })
  })
</script>

<style scoped lang="scss">
  :deep(.v-card-item__content) {
    display: flex;
    gap: 0.5rem;
    justify-content: center;

    @media only screen and (max-width: 960px) {
      flex-direction: column;
    }
  }
</style>
