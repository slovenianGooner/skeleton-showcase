<template>
  <div>
    <x-alert-banner class="fixed top-0 w-full" :dismissable="false">
      This is the guest layout.
      <template #link>
        <inertia-link href="/" class="font-bold underline">
          Back to showcase <span aria-hidden="true">&rarr;</span>
        </inertia-link>
      </template>
    </x-alert-banner>
    <slot />
  </div>
</template>
