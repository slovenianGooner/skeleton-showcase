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
          href: '/inputs/basic',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></x-page-header>

    <!-- Inputs -->
    <x-card class="mt-5" title="Basic Inputs">
      <div class="prose prose-red">
        <p>
          This covers basic input elements, such as a text input, select, etc.
        </p>
      </div>
      <h3 class="mt-8 font-semibold">Text Input</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.textInput }}</pre>
      </div>
      <div>
        <x-input-label for="username"> Username </x-input-label>
        <div class="mt-1">
          <x-input-text type="text" v-model="form.username" />
        </div>
      </div>
      <h3 class="mt-8 font-semibold">Text Input With Error</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.textInputWithError }}</pre>
      </div>
      <div>
        <x-input-label for="username" :errors="errors.username">
          Username
        </x-input-label>
        <div class="mt-1">
          <x-input-text
            type="text"
            v-model="form.username"
            :errors="errors.username"
          />
          <x-input-errors :errors="errors.username" />
        </div>
      </div>
      <h3 class="mt-8 font-semibold">Textarea</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.textareaInput }}</pre>
      </div>
      <div>
        <x-input-label for="code"> Code </x-input-label>
        <div class="mt-1">
          <x-input-textarea type="text" v-model="form.code" rows="5" />
        </div>
      </div>
      <h3 class="mt-8 font-semibold">Text Input With Button</h3>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ examples.textInputWithButton }}</pre>
      </div>
      <div>
        <x-input-label for="username"> Username </x-input-label>
        <div class="mt-1">
          <x-input-text-button
            type="text"
            v-model="form.username"
            @click="say(form.username)"
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
        username: null,
        code: null,
      },
      errors: {
        username: ["The username field is required."],
      },
      examples: {
        textInput: `<div>
    <x-input-label for="username"> Username </x-input-label>
    <div class="mt-1">
        <x-input-text
            type="text"
            v-model="form.username"
        />
        <x-input-errors />
    </div>
</div>`,
        textareaInput: `<div>
    <x-input-label for="code"> Code </x-input-label>
    <div class="mt-1">
        <x-input-textarea type="text" v-model="form.code" rows="5" />
    </div>
</div>`,
        textInputWithError: `<div>
    <x-input-label for="username" :errors="errors.username"> Username </x-input-label>
    <div class="mt-1">
        <x-input-text
            type="text"
            v-model="form.username"
            :errors="errors.username"
        />
        <x-input-errors :errors="errors.username" />
    </div>
</div>`,
        textInputWithButton: `<div>
    <x-input-label for="username"> Username </x-input-label>
    <div class="mt-1">
        <x-input-text-button
            type="text"
            v-model="form.username"
            @click="handleClickEvent"
            button="Submit"
        />
    </div>
</div>`,
      },
    };
  },
};
</script>
