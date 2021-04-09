<template>
  <XLayout ref="layout">
    <template #logo>
      <h1>Skelly Showcase</h1>
    </template>
    <template #navigation>
      <XNavItem inertia title="Home" href="/" />
      <XNavItem title="Auth">
        <XNavItem inertia title="Login" href="/auth/login" />
        <XNavItem
          inertia
          title="Forgot Password"
          href="/auth/forgot-password"
        />
        <XNavItem inertia title="Reset Password" href="/auth/reset-password" />
      </XNavItem>
      <XNavItem inertia title="Alerts" href="/alerts" />
      <XNavItem inertia title="Buttons" href="/buttons" />
      <XNavItem title="Inputs">
        <XNavItem inertia title="Basic" href="/inputs/basic" />
        <XNavItem inertia title="Select" href="/inputs/select" />
        <XNavItem inertia title="Checkbox" href="/inputs/checkbox" />
        <XNavItem inertia title="File" href="/inputs/file" />
        <XNavItem inertia title="Photo" href="/inputs/photo" />
        <XNavItem inertia title="List" href="/inputs/list" />
        <XNavItem inertia title="Custom Select" href="/inputs/custom-select" />
        <XNavItem inertia title="WYSIWYG" href="/inputs/wysiwyg" />
        <XNavItem inertia title="Code" href="/inputs/code" />
        <XNavItem inertia title="Autocomplete" href="/inputs/autocomplete" />
        <XNavItem inertia title="TreeSelect" href="/inputs/treeselect" />
        <XNavItem inertia title="Date Picker" href="/inputs/date-picker" />
        <XNavItem inertia title="Tags" href="/inputs/tags" />
      </XNavItem>
      <XNavItem inertia title="Modals" href="/modals" />
      <XNavItem inertia title="Lists" href="/lists" />
      <XNavItem inertia title="Misc" href="/misc" />
    </template>
    <template #loading>
      <XLoadingScreen v-model="loading" />
    </template>
    <slot />
  </XLayout>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";
import { XNavItem, XLoadingScreen, XLayout } from "sg-skelly";

export default {
  components: {
    XNavItem,
    XLoadingScreen,
    XLayout,
  },
  created() {
    let timeout = null;

    // Set up loading by inertia
    Inertia.on("start", () => {
      timeout = setTimeout(() => (this.loading = true), 250);
    });
    Inertia.on("finish", () => {
      if (this.$refs.layout) {
        this.$refs.layout.sidebarOpen = false;
      }
      clearTimeout(timeout);
      if (!this.loading) {
        return;
      }

      this.loading = false;
    });
  },
  data() {
    return {
      loading: false,
    };
  },
};
</script>
