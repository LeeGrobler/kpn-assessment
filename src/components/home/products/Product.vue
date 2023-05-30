<template>
  <v-card>
    <v-card-item class="">
      <v-img
        width="50%"
        :src="`https://www.kpn.com/shop/cdn/products/_/product_${deets.id}_main.png`"
        class="mx-auto mb-8"
      />

      <v-card-subtitle>{{ deets.manufacturer }}</v-card-subtitle>
      <v-card-title>{{ deets.model }}</v-card-title>
    </v-card-item>
  </v-card>
</template>

<script lang="ts" setup>
  import { Product } from '@/models/Product'
  import { PropType } from 'vue'

  defineProps({
    deets: {
      type: Object as PropType<Product>,
      required: true,
    },
  })
</script>

<style scoped lang="scss"></style>
