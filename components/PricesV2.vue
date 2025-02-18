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
    title: 'Accès aux modèles IA',
    subItems: ['GPT-4, Claude, Mistral, Gemini'],
    highlight: true
  },
  {
    title: 'Génération d\'images limitée',
    subItems: ['50 images/mois', 'Midjourney, Dall-E']
  },
  {
    title: 'Traitement de documents',
    subItems: ['Jusqu\'à 10k caractères']
  },
  {
    title: 'Messages texte',
    subItems: ['Limite quotidienne de 50 messages']
  },
  {
    title: 'Assistants basiques',
    subItems: ['1 assistant par projet']
  }
]

const standardFeatures: Feature[] = [
  {
    title: 'Accès aux modèles IA avancés',
    subItems: ['GPT-4, Claude, Mistral, Gemini, Llama, DeepSeek'],
    highlight: true
  },
  {
    title: 'Génération d\'images étendue',
    subItems: ['200 images/mois', 'Tous les moteurs disponibles'],
    highlight: true
  },
  {
    title: 'Traitement de documents pro',
    subItems: ['Jusqu\'à 300k caractères']
  },
  {
    title: 'Messages texte illimités',
    subItems: ['Limite équitable d\'utilisation']
  },
  {
    title: 'Assistants avancés',
    subItems: ['5 assistants par projet', 'Personnalisation complète']
  }
]

const expertFeatures: Feature[] = [
  {
    title: 'Accès prioritaire aux modèles IA',
    subItems: ['Tous les modèles + accès anticipé'],
    highlight: true
  },
  {
    title: 'Génération d\'images professionnelle',
    subItems: ['1000 images/mois', 'Priorité de génération'],
    highlight: true
  },
  {
    title: 'Traitement de documents entreprise',
    subItems: ['Documents illimités', 'Analyse avancée']
  },
  {
    title: 'Messages texte prioritaires',
    subItems: ['Sans limite', 'Réponses prioritaires']
  },
  {
    title: 'Assistants experts',
    subItems: ['Assistants illimités', 'API disponible']
  }
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