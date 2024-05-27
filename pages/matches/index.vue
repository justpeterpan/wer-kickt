<template>
  <div class="w-[1050px] pl-10">
    <h1 class="text-xl font-thin font-serif italic">gruppenphase</h1>
    <div
      v-for="match of matches"
      :key="match.matchID"
      class="max-h-min max-w-min"
    >
      <NuxtLink
        v-if="
          !(
            match.group.groupName.includes('finale') ||
            match.group.groupName.includes('Finale')
          )
        "
        :to="`${useRoute().path}/${match.matchID}`"
      >
        <div
          class="flex flex-row gap-4 items-center font-black uppercase text-4xl tracking-[-0.08em]"
        >
          <div>
            {{ match.team1.teamName }}
          </div>
          <div class="text-base font-medium">vs</div>
          <div>
            {{ match.team2.teamName }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
export type Match = {
  goals: any[]
  group: {
    groupID: number
    groupName: string
    groupOrderID: number
  }
  lastUpdateDateTime: string
  leagueId: number
  leagueName: string
  leagueSeason: number
  leagueShortcut: string
  location: {
    locationCity: string
    locationID: number
    locationStadium: string
  }
  matchDateTime: string
  matchDateTimeUTC: string
  matchID: number
  matchIsFinished: boolean
  matchResults: any[]
  numberOfViewers: null | number
  team1: {
    shortName: string
    teamGroupName: null | string
    teamIconUrl: string
    teamId: number
    teamName: string
  }
  team2: {
    shortName: string
    teamGroupName: null | string
    teamIconUrl: string
    teamId: number
    teamName: string
  }
  timeZoneID: string
}
const { data: matches } = await useFetch<Match[]>(
  `${useRuntimeConfig().public.api}/getmatchdata/em2024/2024`
)
</script>
