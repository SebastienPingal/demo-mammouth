import { defineStore } from 'pinia'

export const usePricingStore = defineStore('pricing', {
  state: () => ({
    useV2Card: false
  }),
  actions: {
    toggleCard() {
      this.useV2Card = !this.useV2Card
    }
  }
}) 