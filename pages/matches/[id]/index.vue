<template>
  <div
    class="grid sm:grid-cols-2 min-h-svh items-center justify-items-center font-black uppercase text-6xl sm:text-6xl tracking-[-0.06em] hyphens-auto"
  >
    <div
      class="bg-amber-300 h-full w-full grid items-center justify-items-center grid-rows-2 gap-6"
    >
      <div class="place-self-center team1 self-end">
        {{ data?.team1.teamName }}
      </div>
      <input
        type="text"
        name="score"
        id=""
        placeholder="0"
        class="border-8 border-black w-32 h-40 text-center self-start"
        v-model="team1Score"
        @click="handleScore('team1')"
      />
    </div>
    <div
      class="bg-violet-300 h-full w-full grid items-center justify-items-center grid-rows-2 gap-6"
    >
      <div class="place-self-center team2 self-end">
        {{ data?.team2.teamName }}
      </div>
      <input
        type="text"
        name="score"
        id=""
        placeholder="0"
        class="border-8 border-black w-32 h-40 text-center self-start"
        v-model="team2Score"
        @click="handleScore('team2')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Match } from '~/pages/matches/index.vue'
const { data } = await useFetch<Match>(
  `${useRuntimeConfig().public.api}/getmatchdata/${useRoute().params.id}`
)

const team1Score = defineModel('team1Score', {
  default: 0,
})

const team2Score = defineModel('team2Score', {
  default: 0,
})

function handleScore(team: 'team1' | 'team2') {
  switch (team) {
    case 'team1':
      team1Score.value = null
      break
    case 'team2':
      team2Score.value = null
      break
  }
}
</script>

<style scoped>
.team1 {
  view-transition-name: team1;
}

.team2 {
  view-transition-name: team2;
}
</style>
