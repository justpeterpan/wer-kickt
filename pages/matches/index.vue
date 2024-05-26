<template>
  <div class="w-[750px]">
    <h1 class="text6xl">Matches</h1>
    <div v-for="match of matches" :key="match.matchID">
      <div
        v-if="
          !match.group.groupName.includes('Finale') &&
          !match.group.groupName.includes('finale')
        "
        class="grid grid-cols-5 gap-2 items-center"
      >
        <div>
          {{ new Date(match.matchDateTime).toLocaleDateString() }} -
          {{ new Date(match.matchDateTime).toLocaleTimeString().slice(0, 5) }}
        </div>
        <div class="flex flex-row gap-4 items-center">
          <img
            :src="match.team1.teamIconUrl"
            class="w-4 h-4"
            :alt="'flag of ' + match.team1.teamName"
          />
          {{ match.team1.teamName }}
        </div>
        <div class="text-center">:</div>
        <div class="flex flex-row gap-4 items-center">
          <img
            :src="match.team2.teamIconUrl"
            class="w-4 h-4"
            :alt="'flag of ' + match.team2.teamName"
          />
          {{ match.team2.teamName }}
        </div>
        {{ match.group.groupName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: matches } = await useFetch('/api/matches', { method: 'GET' })
</script>
