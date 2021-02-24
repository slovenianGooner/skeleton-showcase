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
          href: '/inputs/checkbox',
        },
      ]"
      @back="$inertia.visit($event)"
      @navigate="$inertia.visit($event)"
    ></x-page-header>

    <!-- Inputs -->
    <x-card class="mt-5" title="Checkboxes">
      <h4 class="text-md font-semibold mb-4">Single Checkbox</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.singleCheckbox }}</pre>
      </div>
      <div class="mb-8">
        <x-input-checkbox
          id="checked"
          label="Notify me"
          v-model="form.checked"
        />
        <div class="mt-4 text-sm text-gray-700">
          <strong>Checked:</strong>
          {{ form.checked }}
        </div>
      </div>

      <h4 class="text-md font-semibold mb-4">Multiple Checkboxes</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleCheckboxes }}</pre>
      </div>
      <h4>We are using this array as an example:</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleCheckboxesArray }}</pre>
      </div>
      <div class="space-y-2">
        <div v-for="(item, index) in allItems">
          <x-input-checkbox
            :id="'checkedItem' + index"
            :label="item"
            v-model="form.checkedItems"
            :value="item"
          />
        </div>
      </div>
      <div class="mt-4 text-sm text-gray-700">
        <strong>Selected:</strong>
        {{
          form.checkedItems.length > 0 ? form.checkedItems.join(", ") : "None"
        }}
      </div>
    </x-card>
    <x-card class="mt-5" title="Radios">
      <h4 class="text-md font-semibold mb-4">Multiple Radios</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleRadios }}</pre>
      </div>
      <h4>We are using this array as an example:</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleCheckboxesArray }}</pre>
      </div>
      <div class="space-y-2">
        <div v-for="(item, index) in allItems">
          <x-input-radio
            :id="'checkedRadioItem' + index"
            :label="item"
            v-model="form.checkedRadio"
            :value="item"
          />
        </div>
        <button
          class="text-gray-700 underline text-sm"
          @click="form.checkedRadio = null"
        >
          Deselect
        </button>
      </div>
      <div class="mt-4 text-sm text-gray-700">
        <strong>Selected:</strong>
        {{ form.checkedRadio ? form.checkedRadio : "None" }}
      </div>
    </x-card>
    <x-card class="mt-5" title="Toggles">
      <h4 class="text-md font-semibold mb-4">Single Checkbox Toggle</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.singleToggle }}</pre>
      </div>
      <div class="mb-8">
        <x-input-checkbox-toggle
          id="checkedToggle"
          label="Notify me"
          v-model="form.checked"
        />
        <div class="mt-4 text-sm text-gray-700">
          <strong>Checked:</strong>
          {{ form.checked }}
        </div>
      </div>

      <h4 class="text-md font-semibold mb-4">Multiple Checkbox Toggles</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleToggles }}</pre>
      </div>
      <h4>We are using this array as an example:</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleCheckboxesArray }}</pre>
      </div>
      <div class="space-y-2">
        <div v-for="(item, index) in allItems">
          <x-input-checkbox-toggle
            :id="'checkedItemToggle' + index"
            :label="item"
            v-model="form.checkedItems"
            :value="item"
          />
        </div>
      </div>
      <div class="mt-4 mb-8 text-sm text-gray-700">
        <strong>Selected:</strong>
        {{
          form.checkedItems.length > 0 ? form.checkedItems.join(", ") : "None"
        }}
      </div>
      <h4 class="text-md font-semibold mb-4">Multiple Radio Toggles</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleRadioToggles }}</pre>
      </div>
      <h4>We are using this array as an example:</h4>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.multipleCheckboxesArray }}</pre>
      </div>
      <div class="space-y-2">
        <div v-for="(item, index) in allItems">
          <x-input-radio-toggle
            :id="'checkedRadioItemToggle' + index"
            :label="item"
            v-model="form.checkedRadio"
            :value="item"
          />
        </div>
        <button
          class="text-gray-700 underline text-sm"
          @click="form.checkedRadio = null"
        >
          Deselect
        </button>
      </div>
      <div class="mt-4 text-sm text-gray-700">
        <strong>Selected:</strong>
        {{ form.checkedRadio ? form.checkedRadio : "None" }}
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        checked: false,
        checkedItems: [],
        checkedRadio: null,
      },
      allItems: ["Will Smith", "Christopher Waltz", "Brad Pitt"],
      errors: {},
      examples: {
        singleToggle: `<x-input-checkbox-toggle
    id="checkedToggle"
    label="Notify me"
    v-model="form.checked"
/>`,
        multipleToggles: `<div v-for="(item, index) in allItems">
    <x-input-checkbox-toggle
        :id="'checkedItemToggle' + index"
        :label="item"
        v-model="form.checkedItems"
        :value="item"
    />
</div>`,
        multipleRadioToggles: `<div v-for="(item, index) in allItems">
    <x-input-radio-toggle
        :id="'checkedRadioItemToggle' + index"
        :label="item"
        v-model="form.checkedRadio"
        :value="item"
    />
</div>`,
        singleCheckbox: `<x-input-checkbox
    id="checked"
    label="Notify me"
    v-model="form.checked"
/>`,
        multipleCheckboxesArray: `[
    "Will Smith",
    "Christopher Waltz",
    "Brad Pitt"
]`,
        multipleCheckboxes: `<div v-for="(item, index) in allItems">
    <x-input-checkbox
        :id="'checkedItem' + index"
        :label="item"
        v-model="form.checkedItems"
        :value="item"
        />
</div>`,
        multipleRadios: `<div v-for="(item, index) in allItems">
    <x-input-radio
        :id="'checkedRadioItem' + index"
        :label="item"
        v-model="form.checkedRadio"
        :value="item"
        />
</div>`,
      },
    };
  },
};
</script>
