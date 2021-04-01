<template>
  <div class="p-8">
    <x-page-header
      title="Misc"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Misc',
          href: '/misc',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    />
    <x-section class="mt-4" title="Section" collapsed>
      <div class="prose max-w-none">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </x-section>
    <div class="prose mt-8 max-w-none">
      <pre>{{ sectionExample }}</pre>
    </div>

    <x-card class="mt-5" title="Toast notification">
      <portal to="modal">
        <x-toast
          :hide="3000"
          v-if="showToast"
          @hidden="showToast = false"
          type="success"
        >
          <p class="text-sm font-medium text-gray-900">Successfully saved!</p>
          <p class="mt-1 text-sm text-gray-500">
            Anyone with a link can now view this file.
          </p>
        </x-toast>
      </portal>
      <div class="flex space-x-2">
        <x-button-form-md @click="showToast = true">
          Show toast
        </x-button-form-md>
      </div>
      <div class="prose mt-8 max-w-none">
        <pre>{{ toastExample }}</pre>
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showToast: false,
      sectionExample: `<x-section class="mt-4" title="Section" collapsed>
    <div class="prose max-w-none">
        Content.
    </div>
</x-section>`,
      toastExample: `<x-toast class="bottom-0 right-0" :hide="5000">
      Success message.
</x-toast>`,
    };
  },
};
</script>
