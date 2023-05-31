<template>
  <v-alert
    v-if="!interfaceStore.loading && productStore.products.length === 0"
    type="warning"
    title="Nothing found"
    text="Unfortunately there are no products matching your criteria."
  />

  <Loader v-if="interfaceStore.loading" />

  <v-row v-if="productStore.products.length > 0">
    <v-col
      v-for="product in productStore.filteredProducts"
      :key="product.id"
      cols="4"
    >
      <Product :deets="product" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  import { useInterfaceStore } from '@/store/interface'
  import { useProductStore } from '@/store/product'
  import Loader from '@/components/home/products/Loader.vue'
  import Product from '@/components/home/products/Product.vue'

  const productStore = useProductStore()
  const interfaceStore = useInterfaceStore()
</script>

<style scoped lang="scss"></style>
