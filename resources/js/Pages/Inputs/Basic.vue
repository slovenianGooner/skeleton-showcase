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
    <XCard class="mt-5" title="Basic Inputs">
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
    </XCard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: null,
        code: null,
      },
      errors: {
        username: ["The username field is required."],
      },
    };
  },
};
</script>
