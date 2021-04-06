<template>
  <div class="p-8">
    <XPageHeader
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
    <XCard class="mt-5" :overflows="false" title="Custom Select">
      <div>
        <XInputLabel>Country</XInputLabel>
        <div class="mt-1">
          <XInputCustomSelect
            v-model="form.country"
            value-resolver="value"
            label-resolver="title"
            :options="countries"
          >
          </XInputCustomSelect>
        </div>
      </div>
    </XCard>
    <XCard class="mt-5" :overflows="false" title="Multiselect">
      <div>
        <XInputLabel>Languages</XInputLabel>
        <div class="mt-1">
          <XInputCustomSelect
            multiple
            v-model="form.languages"
            :options="languages"
          />
        </div>
      </div>
    </XCard>
    <XCard class="mt-5" :overflows="false" title="Custom select with search">
      <div>
        <XInputLabel>Language</XInputLabel>
        <div class="mt-1">
          <XInputCustomSelect
            v-model="form.language"
            :options="languages"
            :search="true"
          />
        </div>
      </div>
    </XCard>
  </div>
</template>
<script>
import { XPageHeader, XCard, XInputLabel, XInputCustomSelect } from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XInputLabel,
    XInputCustomSelect,
  },
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
    };
  },
};
</script>
