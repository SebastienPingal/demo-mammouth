<script setup lang="ts">
const starterFeatures = [
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
    subItems: ['Illimité avec Flux Schnell']
  },
  {
    title: 'Documents',
    subItems: ['Jusqu\'à 10k caractères']
  },
  {
    title: 'Annulez à tout moment'
  }
]

const standardFeatures = [
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
    subItems: ['Illimité avec Flux Schnell']
  },
  {
    title: 'Documents plus longs',
    subItems: ['Jusqu\'à 300k caractères']
  },
  {
    title: 'Annulez à tout moment'
  }
]

const expertFeatures = [
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
    subItems: ['Illimité avec Flux Schnell']
  },
  {
    title: 'Documents plus longs',
    subItems: ['Jusqu\'à 300k caractères']
  },
  {
    title: 'Annulez à tout moment'
  }
]
</script>

<template>
  <div class="flex gap-6 justify-center">
    <PricingCard title="Starter" subtitle="Idéal pour une utilisation occasionnelle" :price="10"
      :features="starterFeatures" />
    <PricingCard title="Standard" variant="light" subtitle="Idéal pour une utilisation intensive" :price="20"
      :features="standardFeatures" />
    <PricingCard variant="light" title="Expert" subtitle="Pour les créateurs d'images" :price="60"
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