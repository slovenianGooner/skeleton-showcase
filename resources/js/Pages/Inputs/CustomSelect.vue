<template>
  <div class="p-8">
    <x-page-header
      title="Inputs"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Inputs',
          href: '/inputs/custom-select',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    />
    <x-card class="mt-5" :overflows="false" title="Custom Select">
      <div>
        <x-input-label>Country</x-input-label>
        <div class="mt-1">
          <x-input-custom-select
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
            :options="countries"
          >
          </x-input-custom-select>
        </div>
      </div>
      <div class="prose max-w-none mt-8">
        <pre>{{ examples.customSelect }}</pre>
      </div>
    </x-card>
    <x-card class="mt-5" :overflows="false" title="Multiselect">
      <div>
        <x-input-label>Languages</x-input-label>
        <div class="mt-1">
          <x-input-custom-select
            multiple
            v-model="form.languages"
            :options="languages"
          />
        </div>
      </div>
      <div class="prose max-w-none mt-8">
        <pre>{{ examples.customSelect }}</pre>
      </div>
    </x-card>
    <x-card class="mt-5" :overflows="false" title="Custom select with search">
      <div>
        <x-input-label>Language</x-input-label>
        <div class="mt-1">
          <x-input-custom-select
            v-model="form.language"
            :options="languages"
            value-resolver="value"
            label-resolver="title"
            :search="true"
          />
        </div>
      </div>
      <div class="prose max-w-none mt-8">
        <pre>{{ examples.customSelectWithSearch }}</pre>
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        country: "AT",
        countries: ["AT"],
        languages: [],
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
      languages: [
        "PHP",
        "Javascript",
        "Vue",
        "Laravel",
        "Rails",
        "React",
        "TailwindCSS",
      ],
      examples: {
        customSelect: `<div>
    <x-input-label>Country</x-input-label>
    <div class="mt-1">
        <x-input-custom-select
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
            :options="countries"
        />
    </div>
</div>`,
        multipleSelect: `<div>
    <x-input-label>Languages</x-input-label>
    <div class="mt-1">
        <x-input-custom-select
            multiple
            v-model="form.languages"
            :options="languages"
          />
    </div>
</div>`,
        customSelectWithSearch: `<div>
    <x-input-label>Language</x-input-label>
    <div class="mt-1">
        <x-input-custom-select
            v-model="form.language"
            :options="languages"
            :value-resolver="(item) => item"
            :search="true"
        />
    </div>
</div>`,
      },
    };
  },
};
</script>
