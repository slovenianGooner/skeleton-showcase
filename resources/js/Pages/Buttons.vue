<template>
  <div class="p-8 max-w-screen-lg">
    <XPageHeader
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
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></XPageHeader>
    <XCard class="mt-5" title="Form">
      <div class="prose prose-red">
        <p>
          This is a classic form button that can be defined via the
          <code>type</code> property, either <code>submit</code> or
          <code>button</code>.
        </p>
      </div>
      <div class="mt-4 flex flex-wrap items-center space-x-4">
        <XButtonForm size="xs" color="red" text-color="text-white">
          Form
        </XButtonForm>
        <XButtonForm size="sm" color="red" text-color="text-white">
          Form
        </XButtonForm>
        <XButtonForm color="red" text-color="text-white"> Form </XButtonForm>
        <XButtonForm size="lg" color="red" text-color="text-white">
          Form
        </XButtonForm>
        <XButtonForm size="xl" color="red" text-color="text-white">
          Form
        </XButtonForm>
      </div>
    </XCard>
    <XCard class="mt-5" title="Link">
      <div class="prose prose-red">
        <p>This is a classic anchor link.</p>
      </div>
      <div class="mt-4 flex flex-wrap items-center space-x-4">
        <XButtonLink size="xs" color="red" text-color="text-white">
          Link
        </XButtonLink>
        <XButtonLink size="sm" color="red" text-color="text-white">
          Link
        </XButtonLink>
        <XButtonLink color="red" text-color="text-white"> Link </XButtonLink>
        <XButtonLink size="lg" color="red" text-color="text-white">
          Link
        </XButtonLink>
        <XButtonLink size="xl" color="red" text-color="text-white">
          Link
        </XButtonLink>
      </div>
    </XCard>
    <XCard class="mt-5" title="Inertia Link">
      <div class="prose prose-red">
        <p>
          <strong>InertiaJS</strong> anchor link works the same as an anchor
          link, but just a helper to make an inertia call. <br />
          You can add the <code>inertia</code> prop to enable an Inertia link.
        </p>
      </div>
    </XCard>
  </div>
</template>
<script>
import { XPageHeader, XCard, XButtonForm, XButtonLink } from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XButtonForm,
    XButtonLink,
  },
};
</script>
