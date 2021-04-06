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
          href: '/inputs/select',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></XPageHeader>

    <!-- Selects -->
    <x-card class="mt-5" title="Selects">
      <h3 class="font-semibold mb-4">Select Input</h3>
      <div>
        <XInputLabel for="country"> Country </XInputLabel>
        <div class="mt-1">
          <XInputSelect
            :options="countries"
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
          />
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">Select Input With Error</h3>
      <div>
        <XInputLabel for="Country" :errors="errors.country">
          Country
        </XInputLabel>
        <div class="mt-1">
          <XInputSelect
            :options="countries"
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
            :errors="errors.country"
          />
          <x-input-errors :errors="errors.country" />
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">Select Input With Button</h3>
      <div>
        <XInputLabel for="language"> Language </XInputLabel>
        <div class="mt-1">
          <XInputSelectButton
            :options="languages"
            v-model="form.language"
            button="Submit"
          />
        </div>
      </div>
    </x-card>
  </div>
</template>
<script>
import {
  XPageHeader,
  XInputSelect,
  XInputSelectButton,
  XCard,
  XInputLabel,
  XInputErrors,
} from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XInputSelect,
    XInputSelectButton,
    XCard,
    XInputLabel,
    XInputErrors,
  },
  data() {
    return {
      form: {
        country: null,
        language: null,
      },
      countries: [
        {
          value: "AT",
          title: "Austria",
        },
        {
          value: "AU",
          title: "Australia",
        },
      ],
      languages: ["PHP", "Javascript", "Vue", "Laravel"],
      errors: {
        country: ["The country field is required."],
      },
    };
  },
};
</script>
