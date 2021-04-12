<template>
  <div class="p-8">
    <XPageHeader
      title="Blocks"
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
    <XCard class="mt-8" title="With Default Blocks" :overflows="false">
      <div>
        <XInputLabel for="about"> HTML Content </XInputLabel>
        <div class="mt-1">
          <XInputBlocks v-model="form.html" />
        </div>
      </div>
      <div class="mt-4 prose" v-html="form.html"></div>
    </XCard>
    <XCard class="mt-8" title="With Additional Blocks" :overflows="false">
      <div>
        <XInputLabel for="about"> HTML Content </XInputLabel>
        <div class="mt-1">
          <XInputBlocks
            v-model="form.html_two"
            :blocks="[
              'default',
              { name: 'Demo', key: 'demo', component: DemoBlock },
            ]"
          />
        </div>
      </div>
      <div class="mt-4 prose" v-html="form.html_two"></div>
    </XCard>
    <XCard class="mt-8" title="With Less Blocks" :overflows="false">
      <div>
        <XInputLabel for="about"> HTML Content </XInputLabel>
        <div class="mt-1">
          <XInputBlocks
            v-model="form.html_three"
            :blocks="[
              'text',
              'image',
              { name: 'Demo', key: 'demo', component: DemoBlock },
            ]"
          />
        </div>
      </div>
      <div class="mt-4 prose" v-html="form.html_three"></div>
    </XCard>
  </div>
</template>
<script>
import {
  XPageHeader,
  XCard,
  XInputErrors,
  XInputLabel,
  XInputBlocks,
} from "sg-skelly";
import DemoBlock from "../../Shared/DemoBlock.vue";

export default {
  components: {
    XPageHeader,
    XCard,
    XInputErrors,
    XInputLabel,
    XInputBlocks,
  },
  data() {
    return {
      DemoBlock: DemoBlock,
      form: {
        html: [],
        html_two: [],
        html_three: [],
      },
    };
  },
};
</script>
