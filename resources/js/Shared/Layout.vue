<template>
  <XLayout ref="layout">
    <template #logo>
      <h1>Skelly Showcase</h1>
    </template>
    <template #navigation>
      <XNavItem inertia title="Home" icon="OutlineHome" href="/" />
      <XNavItem title="Auth" icon="OutlineLogin">
        <XNavItem inertia title="Login" href="/auth/login" />
        <XNavItem
          inertia
          title="Forgot Password"
          href="/auth/forgot-password"
        />
        <XNavItem inertia title="Reset Password" href="/auth/reset-password" />
      </XNavItem>
      <XNavItem inertia title="Alerts" icon="OutlineBell" href="/alerts" />
      <XNavItem
        inertia
        title="Buttons"
        icon="SolidCursorClick"
        href="/buttons"
      />
      <XNavItem title="Inputs" icon="SolidTemplate">
        <XNavItem inertia title="Basic" href="/inputs/basic" />
        <XNavItem inertia title="Select" href="/inputs/select" />
        <XNavItem inertia title="Checkbox" href="/inputs/checkbox" />
        <XNavItem inertia title="File" href="/inputs/file" />
        <XNavItem inertia title="Photo" href="/inputs/photo" />
        <XNavItem inertia title="List" href="/inputs/list" />
        <XNavItem inertia title="Custom Select" href="/inputs/custom-select" />
        <XNavItem inertia title="WYSIWYG" href="/inputs/wysiwyg" />
        <XNavItem inertia title="Date Picker" href="/inputs/date-picker" />
      </XNavItem>
      <XNavItem
        inertia
        title="Modals"
        icon="OutlineAnnotation"
        href="/modals"
      />
      <XNavItem inertia title="Lists" icon="SolidCollection" href="/lists" />
      <XNavItem inertia title="Misc" icon="OutlineSun" href="/misc" />
    </template>
    <template #loading>
      <XLoadingScreen v-model="loading" />
    </template>
    <slot />
  </XLayout>
</template>
<script>
import { Inertia } from "@inertiajs/inertia";

export default {
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
