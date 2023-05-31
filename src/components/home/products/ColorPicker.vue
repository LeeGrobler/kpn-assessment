<template>
  <div class="color-picker">
    <div
      v-for="(color, i) in colors"
      :key="color"
      class="color"
      :class="{ selected: i === selectedColor && colors.length > 1 }"
      :style="{ 'background-color': hexxes[color] }"
      @click="selectedColor = i"
    ></div>
  </div>
</template>

<script lang="ts" setup>
  import { PropType, ref } from 'vue'

  defineProps({
    colors: {
      type: Array as PropType<string[]>,
      required: true,
    },
  })

  const selectedColor = ref(0)

  const hexxes: { [key: string]: string } = {
    'BLAUW': '215E7B',
    'ROZE': '#F5E1C6',
    'ZILVER': '#E7DFEE',
    'ZWART': '#1D1D1D',
    'GOUD': '#F7E370',
    'GRIJS': '#808080',
    'ROOD': '#A30112',
    'GRAFIET': '#1D1D1D',
    'WIT': '#EFF0EA',
    'GEEL': '#FFFDD0',
    'GROEN': '#435956',
    'PAARS': '#8270D9',
    'MINT': '#D9ED9E',
    'CREME': '#E6DBFF',
    'VIOLET': '#435956',
    'DARK PEARL': '#8270D9',
    'MAGIC BLUE': '#D9ED9E',
    'ELECTRIC GRAPHITE': '#E6DBFF',
  }
</script>

<style scoped lang="scss">
  .color-picker {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .color {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0 5px;
      border: 1px solid #b3b3b3;
      cursor: pointer;

      &.selected {
        border: 2px solid #000;
      }
    }
  }
</style>
