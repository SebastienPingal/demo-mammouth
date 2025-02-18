<script setup lang="ts">
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
    highlight: true
  },
  {
    title: 'Documents',
    subItems: ['Jusqu\'à 10k caractères'],
    highlight: true
  },
  {
    title: 'Annulez à tout moment'
  }
]

const standardFeatures: Feature[] = [
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
    title: '200 images premium',
    subItems: ['Illimité avec Flux Schnell'],
    highlight: true
  },
  {
    title: 'Documents plus longs',
    subItems: ['Jusqu\'à 300k caractères'],
    highlight: true
  },
  {
    title: 'Annulez à tout moment'
  }
]

const expertFeatures: Feature[] = [
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
    subItems: ['Politique d\'utilisation plus élevée']
  },
  {
    title: '1000 images premium',
    subItems: ['Illimité avec Flux Schnell'],
    highlight: true
  },
  {
    title: 'Documents plus longs',
    subItems: ['Jusqu\'à 300k caractères'],
    highlight: true
  },
  {
    title: 'Annulez à tout moment'
  }
]
</script>

<template>
  <div class="flex flex-wrap gap-x-4 gap-y-10 justify-center">
    <PricingCardV1 title="Starter" subtitle="Idéal pour une utilisation occasionnelle" :price="10"
      :features="starterFeatures" />
    <PricingCardV1 title="Standard" variant="light" subtitle="Idéal pour une utilisation intensive" :price="20"
      :features="standardFeatures" :is-popular="true" />
    <PricingCardV1 variant="light" title="Expert" subtitle="Pour les créateurs d'images" :price="60"
      :features="expertFeatures" />
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