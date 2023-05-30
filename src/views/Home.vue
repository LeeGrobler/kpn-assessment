<template>
  <v-container class="fill-height">
    <Filter />
    <Products />
  </v-container>
</template>

<script lang="ts" setup>
  import Filter from '@/components/home/Filter.vue'
  import Products from '@/components/home/products/index.vue'
</script>

<style scoped lang="scss">
  .v-container {
    max-width: 1200px;
  }
</style>
