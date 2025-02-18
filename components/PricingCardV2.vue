<script setup lang="ts">
import { computed } from 'vue'
const toast = useToast()

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
  isPopular: false
})

const cardClasses = computed(() => ({
  'bg-background text-foreground border border-border': props.variant === 'light',
  'bg-black text-white': props.variant === 'default'
}))

const textClasses = computed(() => ({
  'text-foreground': props.variant === 'light',
  'text-primary-foreground': props.variant === 'default'
}))

const subItemClasses = computed(() => ({
  'text-muted-foreground': props.variant === 'light',
  'text-primary-foreground/80': props.variant === 'default'
}))
</script>

<template>
  <div class="relative w-[350px] rounded-lg p-6" :class="[cardClasses, isPopular && 'border-2 border-black scale-105']">
    <div v-if="isPopular" class="absolute -top-3 left-1/2 -translate-x-1/2">
      <span class="bg-black text-white text-sm font-medium px-3 py-1 rounded-full">
        Plus populaire
      </span>
    </div>

    <div class="space-y-2">
      <h2 class="text-xl font-semibold" :class="textClasses">{{ title }}</h2>
      <p :class="textClasses">{{ subtitle }}</p>
    </div>

    <div class="my-6 space-y-4">
      <div class="flex items-end" :class="textClasses">
        <h3 class="text-5xl font-bold">€{{ price }}</h3>
        <p>/mois</p>
      </div>
      <UButton @click="toast.add({
        title: `Abonnement au plan ${title}`,
        description: 'Vous recevrez un email de confirmation',
        icon: 'i-heroicons-hand-thumb-up',
        color: 'green'
      }); console.log(toast)" class="w-full justify-center" :color="variant === 'light' ? 'white' : 'black'">
        S'abonner
      </UButton>
    </div>

    <div class="space-y-4">
      <p :class="textClasses">Ce que vous obtenez :</p>
      <ul class="space-y-2">
        <li v-for="feature in features" :key="feature.title" class="feature-item"
            :class="[
              feature.highlight && 'p-2 rounded',
              feature.highlight && (
                variant === 'light' 
                  ? 'bg-gray-300 text-black' 
                  : 'bg-gray-600 text-gray-100'
              )
            ]">
          <div class="feature-wrapper">
            <Icon name="i-heroicons-check" class="h-4 w-4 shrink-0 place-self-center"
              :class="variant === 'light' ? 'text-black-500' : 'text-white'" />
            <div>
              <span class="feature-title" 
                :class="[
                  textClasses, 
                  feature.highlight && 'font-bold'
                ]">
                {{ feature.title }}
              </span>
              <ul v-if="feature.subItems" class="feature-sublist">
                <li v-for="subItem in feature.subItems" :key="subItem" 
                    :class="subItemClasses">
                  {{ subItem }}
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
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

.feature-title {
  @apply font-medium;
}

.feature-sublist {
  @apply mt-1 text-sm space-y-1;
}
</style>