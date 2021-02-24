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
          href: '/inputs/select',
        },
      ]"
      @back="$inertia.visit($event)"
      @navigate="$inertia.visit($event)"
    ></x-page-header>

    <!-- Selects -->
    <x-card class="mt-5" title="Selects">
      <h3 class="font-semibold">Select Input</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.selectInput }}</pre>
      </div>
      <div>
        <x-input-label for="country"> Country </x-input-label>
        <div class="mt-1">
          <x-input-select
            :options="countries"
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
          />
        </div>
      </div>
      <h3 class="mt-8 font-semibold">Select Input With Error</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.selectInputWithError }}</pre>
      </div>
      <div>
        <x-input-label for="Country" :errors="errors.country">
          Country
        </x-input-label>
        <div class="mt-1">
          <x-input-select
            :options="countries"
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
            :errors="errors.country"
          />
          <x-input-errors :errors="errors.country" />
        </div>
      </div>
      <h3 class="mt-8 font-semibold">Select Input With Button</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.selectInputWithButton }}</pre>
      </div>
      <div>
        <x-input-label for="language"> Language </x-input-label>
        <div class="mt-1">
          <x-input-select-button
            :options="languages"
            v-model="form.language"
            @click="say(form.language)"
            button="Submit"
          />
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
      examples: {
        selectInput: `<div>
    <x-input-label for="country"> Country </x-input-label>
    <div class="mt-1">
        <x-input-select
            :options="countries"
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
        />
    </div>
</div>`,
        selectInputWithError: `<div>
    <x-input-label for="Country" :errors="errors.country">
        Country
    </x-input-label>
    <div class="mt-1">
        <x-input-select
            :options="countries"
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
            :errors="errors.country"
        />
        <x-input-errors :errors="errors.country" />
    </div>
</div>`,
        selectInputWithButton: `<div>
    <x-input-label for="language"> Language </x-input-label>
    <div class="mt-1">
        <x-input-select-button
            :options="languages"
            v-model="form.language"
            @click="say(form.language)"
            button="Submit"
        />
    </div>
</div>`,
      },
    };
  },
};
</script>
