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
    <XCard class="mt-5" title="Nestable">
      <XNestable :items="nestableItems" @sort="say($event)" class="space-y-2">
        <template #default="{ item, toggle }">
          <div class="border rounded-md flex divide-x divide-gray-300">
            <XNestableHandle
              class="px-4 py-2 flex items-center justify-items-center"
            />
            <div class="flex-1 px-4 py-2 hover:bg-gray-50">
              <div>{{ item.name }}</div>
              <div class="text-xs underline flex space-x-2">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            <XNestableToggle
              :item="item"
              @click="toggle(item)"
              class="px-4 py-2 flex items-center justify-items-center"
            />
          </div>
        </template>
      </XNestable>
    </XCard>
  </div>
</template>
<script>
import {
  XPageHeader,
  XCard,
  XButtonForm,
  XSection,
  XToast,
  XNestable,
  XNestableHandle,
  XNestableToggle,
} from "sg-skelly";

export default {
  components: {
    XPageHeader,
    XCard,
    XButtonForm,
    XSection,
    XToast,
    XNestable,
    XNestableHandle,
    XNestableToggle,
  },
  data() {
    return {
      showToast: false,
      nestableItems: [
        {
          name: "One",
          id: 1,
          isOpen: false,
          children: [
            { name: "One-One", id: 11 },
            { name: "One-Two", id: 12 },
            {
              name: "One-Three",
              id: 13,
              isOpen: false,
              children: [
                {
                  name: "One-Three-One",
                  id: 131,
                  isOpen: false,
                  children: [{ name: "One-Three-One-One", id: 1311 }],
                },
              ],
            },
          ],
        },
        {
          name: "Two",
          id: 2,
          isOpen: false,
          children: [
            { name: "Two-One", id: 21 },
            { name: "Two-Two", id: 22 },
            { name: "Two-Three", id: 23 },
          ],
        },
      ],
    };
  },
};
</script>
