<template>
  <router-view />
  <Alert />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'

  import { useProductStore } from './store/product'
  import Alert from './components/interface/Alert.vue'

  const productStore = useProductStore()

  onMounted(async () => {
    await productStore.loadProducts()
  })
</script>
