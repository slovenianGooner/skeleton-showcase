<template>
  <div class="p-8 max-w-screen-lg">
    <x-page-header
      title="Inputs"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Inputs',
          href: '/inputs/file',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></x-page-header>

    <!-- Inputs -->
    <x-card class="mt-5" title="File Inputs">
      <h3 class="font-semibold">File Input</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.fileInput }}</pre>
      </div>
      <div>
        <x-input-label for="file"> File </x-input-label>
        <div class="mt-1">
          <x-input-file v-model="form.file" />
        </div>
      </div>
      <h3 class="mt-8 font-semibold">File Input With Error</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.fileInputWithError }}</pre>
      </div>
      <div>
        <x-input-label for="file" :errors="errors.file"> File </x-input-label>
        <div class="mt-1">
          <x-input-file v-model="form.file" :errors="errors.file" />
          <x-input-errors :errors="errors.file" />
        </div>
      </div>
      <h3 class="font-semibold mt-8">Multiple Files Input</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleFilesInput }}</pre>
      </div>
      <div>
        <x-input-label for="file"> Files </x-input-label>
        <div class="mt-1">
          <x-input-files v-model="form.files" />
        </div>
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        file: null,
        files: [],
      },
      errors: {
        file: ["The file is too big."],
      },
      examples: {
        fileInput: `<div>
    <x-input-label for="file"> File </x-input-label>
    <div class="mt-1">
        <x-input-file v-model="form.file" />
    </div>
</div>`,
        fileInputWithError: `<div>
    <x-input-label for="file" :errors="errors.file"> File </x-input-label>
    <div class="mt-1">
        <x-input-file v-model="form.file" :errors="errors.file" />
        <x-input-errors :errors="errors.file" />
    </div>
</div>`,
        multipleFilesInput: `<div>
    <x-input-label for="file"> Files </x-input-label>
    <div class="mt-1">
        <x-input-files v-model="form.files" />
    </div>
</div>`,
      },
    };
  },
};
</script>
