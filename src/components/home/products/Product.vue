<template>
  <v-card>
    <v-card-item class="card-items">
      <v-img
        width="50%"
        :src="images[parseInt(deets.id.toString().substring(0, 1))]"
        class="mx-auto mb-8"
      />

      <ColorPicker :colors="deets.colors" />

      <v-card-subtitle>{{ deets.manufacturer }}</v-card-subtitle>
      <v-card-title>{{ deets.model }}</v-card-title>
    </v-card-item>
  </v-card>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue'

  import ColorPicker from '@/components/home/products/ColorPicker.vue'
  import { Product } from '@/models/Product'

  import image1 from '@/assets/images/phone-1.webp'
  import image2 from '@/assets/images/phone-2.webp'
  import image3 from '@/assets/images/phone-3.webp'
  import image4 from '@/assets/images/phone-4.webp'
  import image5 from '@/assets/images/phone-5.webp'
  import image6 from '@/assets/images/phone-6.webp'
  import image7 from '@/assets/images/phone-7.webp'
  import image8 from '@/assets/images/phone-8.webp'
  import image9 from '@/assets/images/phone-9.webp'

  defineProps({
    deets: {
      type: Object as PropType<Product>,
      required: true,
    },
  })

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ]
</script>

<style scoped lang="scss">
  .card-items {
    position: relative;
  }
</style>
