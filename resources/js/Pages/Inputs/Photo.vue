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
          href: '/inputs/photo',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></XPageHeader>

    <!-- Inputs -->
    <XCard class="mt-5" title="Photo Inputs">
      <h3 class="font-semibold mb-4">Photo Input</h3>
      <div>
        <XInputLabel for="photo"> Photo </XInputLabel>
        <div class="mt-1">
          <XInputPhoto v-model="form.photo" />
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">Photo Input With Error</h3>
      <div>
        <XInputLabel for="photo" :errors="errors.photo"> Photo </XInputLabel>
        <div class="mt-1">
          <XInputPhoto v-model="form.photo" :errors="errors.photo" />
          <XInputErrors :errors="errors.photo" />
        </div>
      </div>
      <h3 class="font-semibold mt-8 mb-4">Photo Input (with existing photo)</h3>
      <div>
        <XInputLabel for="photo"> Photo </XInputLabel>
        <div class="mt-1">
          <XInputPhoto
            v-model="form.photoTwo"
            src="https://i.guim.co.uk/img/media/c94b1f4f0953f77b777216a698d5ec7fc00f0227/0_354_4296_2578/master/4296.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4db44a58ab558cc49444ca5253a02071"
          />
        </div>
      </div>
      <h3 class="font-semibold mt-8 mb-4">Multiple Photos Input</h3>
      <div>
        <XInputLabel for="photos"> Photos </XInputLabel>
        <div class="mt-1">
          <XInputPhotos v-model="form.photos" />
        </div>
      </div>
    </XCard>
  </div>
</template>
<script>
import {
  XPageHeader,
  XInputPhoto,
  XInputPhotos,
  XCard,
  XInputLabel,
  XInputErrors,
} from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XInputPhoto,
    XInputPhotos,
    XCard,
    XInputLabel,
    XInputErrors,
  },
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
    };
  },
};
</script>
