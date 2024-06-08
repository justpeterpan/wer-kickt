<template>
  <UPopover :popper="{ placement: 'bottom-end' }">
    <UIcon name="i-heroicons-user-circle-20-solid w-6 h-6" />
    <template #panel>
      <div class="flex flex-col">
        <ULink to="/profile" class="hover:bg-neutral-300/20 py-2 px-6"
          >Profile</ULink
        >
        <ULink to="/settings" class="hover:bg-neutral-300/20 py-2 px-6"
          >Settings</ULink
        >
        <ULink to="/logout" class="hover:bg-neutral-300/20 py-2 px-6"
          >Logout</ULink
        >
      </div>
    </template>
  </UPopover>
</template>
