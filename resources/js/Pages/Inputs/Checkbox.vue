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
          href: '/inputs/checkbox',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></XPageHeader>

    <!-- Inputs -->
    <XCard class="mt-5" title="Checkboxes">
      <h4 class="text-md font-semibold mb-4">Single Checkbox</h4>
      <div class="mb-8">
        <XInputCheckbox id="checked" label="Notify me" v-model="form.checked" />
        <div class="mt-4 text-sm text-gray-700">
          <strong>Checked:</strong>
          {{ form.checked }}
        </div>
      </div>

      <h4 class="text-md font-semibold mb-4">Multiple Checkboxes</h4>
      <div class="space-y-2">
        <div v-for="(item, index) in allItems" :key="index">
          <XInputCheckbox
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
    </XCard>
    <XCard class="mt-5" title="Radios">
      <h4 class="text-md font-semibold mb-4">Multiple Radios</h4>
      <div class="space-y-2">
        <div v-for="(item, index) in allItems" :key="index">
          <XInputRadio
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
    </XCard>
    <XCard class="mt-5" title="Toggles">
      <h4 class="text-md font-semibold mb-4">Single Checkbox Toggle</h4>
      <div class="mb-8">
        <XInputCheckboxToggle
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
      <div class="space-y-2">
        <div v-for="(item, index) in allItems" :key="index">
          <XInputCheckboxToggle
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
      <div class="space-y-2">
        <div v-for="(item, index) in allItems" :key="index">
          <XInputRadioToggle
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
    </XCard>
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
    };
  },
};
</script>
