<template>
  <div>
    <nav class="absolute w-full px-10 h-16 flex items-center bg-transparent">
      <ul class="flex justify-between w-full">
        <li>
          <NuxtLink to="/matches">
            <UIcon name="i-heroicons-trophy-20-solid w-6 h-6" />
          </NuxtLink>
        </li>
        <li>
          <UserMenu />
        </li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
</template>
