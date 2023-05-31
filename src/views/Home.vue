<template>
  <v-container class="fill-height">
    <Filters />
    <Products />
  </v-container>
</template>

<script lang="ts" setup>
  import Filters from '@/components/home/Filters.vue'
  import Products from '@/components/home/products/index.vue'
</script>

<style scoped lang="scss">
  .v-container {
    max-width: 1200px;
  }
</style>
