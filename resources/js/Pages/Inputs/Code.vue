<template>
  <div class="p-8">
    <XPageHeader
      title="Code"
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
    <XCard class="mt-8" title="Code Editor" :overflows="false">
      <div>
        <XInputLabel for="about"> JSON Params </XInputLabel>
        <div class="mt-1">
          <XInputCode v-model="form.code" />
        </div>
      </div>
      <div class="mt-4 prose" v-if="form.code">
        <pre v-html="form.code"></pre>
      </div>
      <div class="mt-4">
        <XInputLabel for="about"> PHP </XInputLabel>
        <div class="mt-1">
          <XInputCode v-model="form.codeTwo" mode="php" />
        </div>
      </div>
      <div class="mt-4 prose" v-if="form.codeTwo">
        <pre v-html="form.codeTwo"></pre>
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
  XInputCode,
} from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XInputErrors,
    XInputLabel,
    XInputCode,
  },
  data() {
    return {
      form: {
        code:
          '{"url": "https://adria-mobil.jp/catalog/", "countries": ["jp"], "title_key": "Download Centre"}',
        codeTwo: null,
      },
    };
  },
};
</script>
