<script setup lang="ts">
import { usePricingStore } from '~/stores/pricing'
const pricingStore = usePricingStore()

// Update feature interfaces to include highlight
interface Feature {
  title: string
  subItems?: string[]
  highlight?: boolean
}

const starterFeatures: Feature[] = [
  {
    title: 'Accès aux meilleurs LLM',
    subItems: ['Claude, GPT-4, Llama, Grok, Mistral, Gemini, DeepSeek']
  },
  {
    title: 'Modèle de raisonnement (CoT)',
    subItems: ['o3-mini, DeepSeek R1']
  },
  {
    title: 'Générer des images',
    subItems: ['Midjourney, Dall-E, Stable Diffusion, Recraft & FLUX']
  },
  {
    title: 'Créer des assistants de projet'
  },
  {
    title: 'Messages texte illimités',
    subItems: ['Une politique d\'utilisation équitable s\'applique']
  },
  {
    title: '50 images premium',
    subItems: ['Illimité avec Flux Schnell'],
  },
  {
    title: 'Documents',
    subItems: ['Jusqu\'à 10k caractères'],
  },
  {
    title: 'Annulez à tout moment'
  }
]

const standardFeatures: Feature[] = [
  {
    title: 'Tout ce qui est inclus dans Starter',
    highlight: true
  },
  {
    title: 'Images premium augmentées',
    subItems: ['200 images/mois au lieu de 50'],
  },
  {
    title: 'Documents plus longs',
    subItems: ['Jusqu\'à 300k caractères au lieu de 10k'],
  },
  {
    title: 'Priorité de traitement',
    subItems: ['Temps de réponse optimisé']
  }
]

const expertFeatures: Feature[] = [
  {
    title: 'Tout ce qui est inclus dans Standard',
    highlight: true
  },
  {
    title: 'Images premium professionnelles',
    subItems: ['1000 images/mois au lieu de 200'],
  },

]

const cards = [
  {
    title: "Starter",
    subtitle: "Idéal pour une utilisation occasionnelle",
    price: 10,
    features: starterFeatures,
    variant: "default" as const
  },
  {
    title: "Standard",
    subtitle: "Idéal pour une utilisation intensive",
    price: 20,
    features: standardFeatures,
    variant: "light" as const,
    isPopular: true
  },
  {
    title: "Expert",
    subtitle: "Pour les créateurs d'images",
    price: 60,
    features: expertFeatures,
    variant: "light" as const
  }
]
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-x-4 gap-y-10 justify-center">
      <template v-for="(card, index) in cards" :key="index">
        <PricingCardsSwitcharoo :title="card.title" :subtitle="card.subtitle" :price="card.price"
          :features="card.features" :variant="card.variant" :is-popular="card.isPopular" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.feature-item {
  @apply flex flex-col;
}

.feature-wrapper {
  @apply flex items-start gap-2;
}

.feature-check {
  @apply text-green-500 mt-1;
}

.feature-title {
  @apply font-semibold;
}

.feature-sublist {
  @apply text-gray-400;
}
</style>