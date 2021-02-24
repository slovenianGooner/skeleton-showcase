<template>
  <div class="p-8 max-w-screen-lg">
    <x-page-header
      title="Buttons"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Buttons',
          href: 'buttons',
        },
      ]"
      @back="$inertia.visit($event)"
      @navigate="$inertia.visit($event)"
    ></x-page-header>
    <x-card class="mt-5" title="Form">
      <div class="prose prose-red">
        <p>
          This is a classic form button that can be defined via the
          <code>type</code> property, either <code>submit</code> or
          <code>button</code>.
        </p>
      </div>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ formButtonExample }}</pre>
      </div>
      <div class="mt-4 flex items-center space-x-4">
        <x-button-form-xs color="red" text-color="text-white">
          Form
        </x-button-form-xs>
        <x-button-form-sm color="red" text-color="text-white">
          Form
        </x-button-form-sm>
        <x-button-form-md color="red" text-color="text-white">
          Form
        </x-button-form-md>
        <x-button-form-lg color="red" text-color="text-white">
          Form
        </x-button-form-lg>
        <x-button-form-xl color="red" text-color="text-white">
          Form
        </x-button-form-xl>
      </div>
    </x-card>
    <x-card class="mt-5" title="Link">
      <div class="prose prose-red">
        <p>This is a classic anchor link.</p>
      </div>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ linkButtonExample }}</pre>
      </div>
      <div class="mt-4 flex items-center space-x-4">
        <x-button-link-xs color="red" text-color="text-white">
          Link
        </x-button-link-xs>
        <x-button-link-sm color="red" text-color="text-white">
          Link
        </x-button-link-sm>
        <x-button-link-md color="red" text-color="text-white">
          Link
        </x-button-link-md>
        <x-button-link-lg color="red" text-color="text-white">
          Link
        </x-button-link-lg>
        <x-button-link-xl color="red" text-color="text-white">
          Link
        </x-button-link-xl>
      </div>
    </x-card>
    <x-card class="mt-5" title="Inertia Link">
      <div class="prose prose-red">
        <p>
          <strong>InertiaJS</strong> anchor link works the same as an anchor
          link, but just a helper to make an inertia call. <br />
          You can add the <code>inertia</code> prop to enable an Inertia link.
        </p>
      </div>
      <div class="prose max-w-none mt-2 mb-8">
        <pre>{{ inertiaButtonExample }}</pre>
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formButtonExample: `<x-button-form-xs color="red" text-color="text-white">
    Form
</x-button-form-xs>
<x-button-form-sm color="red" text-color="text-white">
    Form
</x-button-form-sm>
<x-button-form-md color="red" text-color="text-white">
    Form
</x-button-form-md>
<x-button-form-lg color="red" text-color="text-white">
    Form
</x-button-form-lg>
<x-button-form-xl color="red" text-color="text-white">
    Form
</x-button-form-xl>`,
      linkButtonExample: `<x-button-link-xs href="/" color="red" text-color="text-white">
    Link
</x-button-link-xs>
<x-button-link-sm href="/" color="red" text-color="text-white">
    Link
</x-button-link-sm>
<x-button-link-md href="/" color="red" text-color="text-white">
    Link
</x-button-link-md>
<x-button-link-lg href="/" color="red" text-color="text-white">
    Link
</x-button-link-lg>
<x-button-link-xl href="/" color="red" text-color="text-white">
    Link
</x-button-link-xl>`,
      inertiaButtonExample: `<x-button-link-xs inertia href="/" color="red" text-color="text-white">
    Link
</x-button-link-xs>`,
    };
  },
};
</script>
