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
          href: '/inputs/basic',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></XPageHeader>

    <!-- Inputs -->
    <XCard class="mt-5" title="Basic Inputs" :overflows="false">
      <div class="prose prose-red">
        <p>
          This covers basic input elements, such as a text input, select, etc.
        </p>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">Text Input</h3>
      <div>
        <XInputLabel for="username"> Username </XInputLabel>
        <div class="mt-1">
          <XInputText type="text" v-model="form.username" />
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">Text Input With Error</h3>
      <div>
        <XInputLabel for="username" :errors="errors.username">
          Username
        </XInputLabel>
        <div class="mt-1">
          <XInputText
            type="text"
            v-model="form.username"
            :errors="errors.username"
          />
          <XInputErrors :errors="errors.username" />
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">Textarea</h3>
      <div>
        <XInputLabel for="code"> Code </XInputLabel>
        <div class="mt-1">
          <XInputTextarea type="text" v-model="form.code" rows="5" />
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">Text Input With Button</h3>
      <div>
        <XInputLabel for="username"> Username </XInputLabel>
        <div class="mt-1">
          <XInputTextButton
            type="text"
            v-model="form.username"
            @click="say(form.username)"
            button="Submit"
            no-ring
          />
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">
        Text Input With Leading and trailing add-on
      </h3>
      <div>
        <XInputLabel for="username"> Price </XInputLabel>
        <div class="mt-1">
          <XInputTextGroup
            type="text"
            v-model="form.username"
            @click="say(form.username)"
            no-ring
          >
            <template #leading>
              <div
                class="px-4 py-2 text-sm bg-white rounded-l-md border border-r-0 border-gray-300 inline-flex items-center font-medium shadow-sm focus:outline-none"
              >
                &dollar;
              </div>
            </template>
            <template #trailing>
              <div
                class="px-4 py-2 text-sm bg-white rounded-r-md border border-l-0 border-gray-300 inline-flex items-center font-medium shadow-sm focus:outline-none"
              >
                USD
              </div>
            </template>
          </XInputTextGroup>
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">
        Text Input With select trailing add-on
      </h3>
      <div>
        <XInputLabel for="username"> Price </XInputLabel>
        <div class="mt-1">
          <XInputTextGroup type="text" v-model="form.price" no-ring>
            <template #trailing>
              <XInputCustomSelect
                class="!mt-0"
                button-class="rounded-l-none border-l-0 focus:ring-0 focus:border-gray-300 w-32"
                v-model="form.country"
                value-resolver="value"
                label-resolver="title"
                :options="countries"
              >
              </XInputCustomSelect>
            </template>
          </XInputTextGroup>
        </div>
        <div class="mt-2">
          Price: {{ form.price }}, Country: {{ form.country }}
        </div>
      </div>
      <h3 class="mt-8 mb-4 font-semibold">
        Text Input With select leading add-on
      </h3>
      <div>
        <XInputLabel for="username"> Price </XInputLabel>
        <div class="mt-1">
          <XInputTextGroup type="text" v-model="form.price" no-ring>
            <template #leading>
              <XInputCustomSelect
                class="!mt-0"
                button-class="rounded-r-none border-r-0 focus:ring-0 focus:border-gray-300 w-32"
                v-model="form.country"
                value-resolver="value"
                label-resolver="title"
                :options="countries"
              >
              </XInputCustomSelect>
            </template>
          </XInputTextGroup>
        </div>
        <div class="mt-2">
          Price: {{ form.price }}, Country: {{ form.country }}
        </div>
      </div>
    </XCard>
  </div>
</template>
<script>
import {
  XPageHeader,
  XCard,
  XInputErrors,
  XInputLabel,
  XInputText,
  XInputTextarea,
  XInputTextButton,
  XInputTextGroup,
  XInputCustomSelect,
} from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XInputErrors,
    XInputLabel,
    XInputText,
    XInputTextarea,
    XInputTextButton,
    XInputTextGroup,
    XInputCustomSelect,
  },
  data() {
    return {
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
      form: {
        username: null,
        code: null,
        price: null,
        country: "AU",
      },
      errors: {
        username: ["The username field is required."],
      },
    };
  },
};
</script>
