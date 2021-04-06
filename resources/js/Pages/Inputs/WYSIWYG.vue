<template>
  <div class="p-8">
    <XPageHeader
      title="WYSIWYG"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Inputs',
          href: '/inputs',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    />
    <XCard class="mt-8" title="Simple Editor" :overflows="false">
      <div>
        <XInputLabel for="about"> About </XInputLabel>
        <div class="mt-1">
          <XInputEditor v-model="form.about" />
        </div>
      </div>
      <div class="mt-4 prose" v-html="form.about"></div>
    </XCard>
  </div>
</template>
<script>
import {
  XPageHeader,
  XCard,
  XInputErrors,
  XInputLabel,
  XInputEditor,
} from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XInputErrors,
    XInputLabel,
    XInputEditor,
  },
  data() {
    return {
      form: {
        about: null,
      },
    };
  },
};
</script>
