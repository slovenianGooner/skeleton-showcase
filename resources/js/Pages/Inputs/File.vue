<template>
  <div class="p-8 max-w-screen-lg">
    <XPageHeader
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
    ></XPageHeader>

    <!-- Inputs -->
    <XCard class="mt-5" title="File Inputs">
      <h3 class="font-semibold mb-4">File Input</h3>
      <div>
        <XInputLabel for="file"> File </XInputLabel>
        <div class="mt-1">
          <XInputFile v-model="form.file" />
        </div>
      </div>
      <h3 class="mt-8 font-semibold mb-4">File Input With Error</h3>
      <div>
        <XInputLabel for="file" :errors="errors.file"> File </XInputLabel>
        <div class="mt-1">
          <XInputFile v-model="form.file" :errors="errors.file" />
          <XInputErrors :errors="errors.file" />
        </div>
      </div>
      <h3 class="font-semibold mt-8 mb-4">Multiple Files Input</h3>
      <div>
        <XInputLabel for="file"> Files </XInputLabel>
        <div class="mt-1">
          <XInputFiles v-model="form.files" />
        </div>
      </div>
    </XCard>
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
    };
  },
};
</script>
