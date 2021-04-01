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
          href: '/inputs/photo',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></x-page-header>

    <!-- Inputs -->
    <x-card class="mt-5" title="Photo Inputs">
      <h3 class="font-semibold">Photo Input</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.photoInput }}</pre>
      </div>
      <div>
        <x-input-label for="photo"> Photo </x-input-label>
        <div class="mt-1">
          <x-input-photo v-model="form.photo" />
        </div>
      </div>
      <h3 class="mt-8 font-semibold">Photo Input With Error</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.photoInputWithError }}</pre>
      </div>
      <div>
        <x-input-label for="photo" :errors="errors.photo">
          Photo
        </x-input-label>
        <div class="mt-1">
          <x-input-photo v-model="form.photo" :errors="errors.photo" />
          <x-input-errors :errors="errors.photo" />
        </div>
      </div>
      <h3 class="font-semibold mt-8">Photo Input (with existing photo)</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.existingPhotoInput }}</pre>
      </div>
      <div>
        <x-input-label for="photo"> Photo </x-input-label>
        <div class="mt-1">
          <x-input-photo
            v-model="form.photoTwo"
            src="https://i.guim.co.uk/img/media/c94b1f4f0953f77b777216a698d5ec7fc00f0227/0_354_4296_2578/master/4296.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4db44a58ab558cc49444ca5253a02071"
          />
        </div>
      </div>
      <h3 class="font-semibold mt-8">Multiple Photos Input</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multiplePhotosInput }}</pre>
      </div>
      <div>
        <x-input-label for="photos"> Photos </x-input-label>
        <div class="mt-1">
          <x-input-photos v-model="form.photos" />
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
        photo: null,
        photoTwo: null,
        photos: [],
      },
      errors: {
        photo: [
          "The photo is not an acceptable. Only JPG, PNG or TIF allowed.",
        ],
      },
      examples: {
        photoInput: `<div>
    <x-input-label for="photo"> Photo </x-input-label>
    <div class="mt-1">
        <x-input-photo v-model="form.photo" />
    </div>
</div>`,
        photoInputWithError: `<div>
    <x-input-label for="photo" :errors="errors.photo">
        Photo
    </x-input-label>
    <div class="mt-1">
        <x-input-photo v-model="form.photo" :errors="errors.photo" />
        <x-input-errors :errors="errors.photo" />
    </div>
</div>`,
        existingPhotoInput: `<div>
    <x-input-label for="photo"> Photo </x-input-label>
    <div class="mt-1">
        <x-input-photo
        v-model="form.photoTwo"
        src="https://i.guim.co.uk/img/media/c94b1f4f0953f77b777216a698d5ec7fc00f0227/0_354_4296_2578/master/4296.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4db44a58ab558cc49444ca5253a02071"
        />
    </div>
</div>`,
        multiplePhotosInput: `<div>
    <x-input-label for="photos"> Photos </x-input-label>
    <div class="mt-1">
        <x-input-photos v-model="form.photos" />
    </div>
</div>`,
      },
    };
  },
};
</script>
