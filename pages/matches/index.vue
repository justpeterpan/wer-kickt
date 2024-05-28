<template>
  <div class="w-[1050px] pl-10 pb-10">
    <h1 class="text-xl font-thin font-serif italic pt-20 pb-10">
      gruppenphase
    </h1>

    <div v-for="date of matchesPerDate" class="pb-10">
      <div class="font-serif font-thin">
        {{ date.date }}
      </div>
      <div
        v-for="match of date.matches"
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
          @click.native="active = match.matchID"
        >
          <div
            class="flex flex-row gap-2 items-center font-black uppercase text-2xl sm:text-4xl tracking-[-0.08em]"
          >
            <div class="team1" :class="{ active: active === match.matchID }">
              {{ match.team1.teamName }}
            </div>
            <div class="text-base font-medium">vs</div>
            <div class="team2" :class="{ active: active === match.matchID }">
              {{ match.team2.teamName }}
            </div>
          </div>
        </NuxtLink>
      </div>
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
const matchDates = new Set(
  matches.value
    ?.filter(
      (match) =>
        !match.group.groupName.includes('final') &&
        !match.group.groupName.includes('Finale')
    )
    .map((match) => match.matchDateTime.slice(0, 10))
)

const matchesPerDate = Array.from(matchDates).map((date) => {
  return {
    date,
    matches: matches.value?.filter((match) =>
      match.matchDateTime.includes(date)
    ),
  }
})

const active = useState()
</script>

<style scoped>
.team1.active {
  view-transition-name: team1;
  contain: layout;
}
.team2.active {
  view-transition-name: team2;
  contain: layout;
}
</style>
