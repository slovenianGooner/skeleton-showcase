<template>
  <a href="#" class="block hover:bg-gray-50">
    <div class="px-4 py-4 sm:px-6">
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-red-600 truncate">
          {{ item.name }}
        </p>
        <div class="ml-2 flex-shrink-0 flex">
          <p
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
          >
            {{ item.type }}
          </p>
        </div>
      </div>
      <div class="mt-2 sm:flex sm:justify-between">
        <div class="text-sm text-gray-500">{{ item.email }}</div>
        <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <p>
            Leaving on
            <time :datetime="item.expiring">{{ item.expiring }}</time>
          </p>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    item: {
      required: true,
    },
  },
};
</script>
