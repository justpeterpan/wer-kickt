<template>
  <div
    class="grid grid-cols-2 min-h-svh items-center justify-items-center font-black uppercase text-8xl tracking-[-0.08em]"
  >
    <div class="bg-amber-300 h-full w-full grid">
      <div class="place-self-center">{{ data?.team1.teamName }}</div>
    </div>
    <div class="bg-violet-300 h-full w-full grid">
      <div class="place-self-center">{{ data?.team2.teamName }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Match } from '~/pages/matches/index.vue'
const { data } = await useFetch<Match>(
  `${useRuntimeConfig().public.api}/getmatchdata/${useRoute().params.id}`
)
</script>
