<template>
  <div class="p-8">
    <XPageHeader
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
    <XSection class="mt-4" title="Section" collapsed>
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
    </XSection>

    <XCard class="mt-5" title="Toast notification">
      <teleport to="body">
        <XToast
          :hide="3000"
          v-if="showToast"
          @hidden="showToast = false"
          type="success"
        >
          <p class="text-sm font-medium text-gray-900">Successfully saved!</p>
          <p class="mt-1 text-sm text-gray-500">
            Anyone with a link can now view this file.
          </p>
        </XToast>
      </teleport>
      <div class="flex space-x-2">
        <XButtonForm @click="showToast = true"> Show toast </XButtonForm>
      </div>
    </XCard>
  </div>
</template>
<script>
import { XPageHeader, XCard, XButtonForm, XSection, XToast } from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XButtonForm,
    XSection,
    XToast,
  },
  data() {
    return {
      showToast: false,
    };
  },
};
</script>
