<template>
  <router-view />
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { useAppStore } from './store/app'

  const appStore = useAppStore()

  onMounted(async () => {
    await appStore.loadProducts()
  })
</script>
