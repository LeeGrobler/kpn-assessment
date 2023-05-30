<template>
  <v-container class="fill-height">
    loading: {{ interfaceStore.loading }}
    <br />
    products: {{ productStore.products.toString() }}
  </v-container>
</template>

<script lang="ts" setup>
  import { useInterfaceStore } from '../../store/interface'
  import { useProductStore } from '../../store/product'

  const productStore = useProductStore()
  const interfaceStore = useInterfaceStore()
</script>
