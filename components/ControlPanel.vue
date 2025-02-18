<template>
  <div class="bg-white rounded-bl-lg shadow-sm border p-4">
    <h2 class="text-lg text-black font-semibold">Versions</h2>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-center h-8 gap-2">
        <p class="text-sm text-gray-500 my-auto">Style de carte</p>
        <div class="flex items-center">
          <CardVersionToggle />
        </div>
      </div>

      <div class="flex justify-between items-center h-8 gap-2">
        <p class="text-sm text-gray-500 my-auto">Organisation des données</p>
        <div class="flex items-center">
          <VersionToggle />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardVersionToggle from './CardVersionToggle.vue'
import VersionToggle from './VersionToggle.vue'
</script>