<template>
  <div>
    <PricingCardV2 v-if="pricingStore.useV2Card" :title="title" :subtitle="subtitle" :price="price" :features="features"
      :variant="variant" :is-popular="isPopular" />
    <PricingCardV1 v-else :title="title" :subtitle="subtitle" :price="price" :features="features" :variant="variant"
      :is-popular="isPopular" />
  </div>
</template>

<script setup lang="ts">
import { usePricingStore } from '~/stores/pricing'

interface Feature {
  title: string
  subItems?: string[]
  highlight?: boolean
}
interface Props {
  title: string
  subtitle: string
  price: number
  features: Feature[]
  variant?: 'default' | 'light'
  isPopular?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  isPopular: false,
})
const pricingStore = usePricingStore()
</script>
