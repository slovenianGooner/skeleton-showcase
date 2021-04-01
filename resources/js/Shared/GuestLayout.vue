<template>
  <div>
    <XAlertBanner class="fixed top-0 w-full" :dismissable="false">
      This is the guest layout.
      <template #link>
        <inertia-link href="/" class="font-bold underline">
          Back to showcase <span aria-hidden="true">&rarr;</span>
        </inertia-link>
      </template>
    </XAlertBanner>
    <slot />
  </div>
</template>
