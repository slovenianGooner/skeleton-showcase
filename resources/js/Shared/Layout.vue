<template>
  <x-layout ref="layout">
    <template #logo>
      <h1>Skelly Showcase</h1>
    </template>
    <template #navigation>
      <x-nav-item inertia title="Home" icon="home" href="/" />
      <x-nav-item title="Auth" icon="login">
        <x-nav-item inertia title="Login" href="/auth/login" />
        <x-nav-item
          inertia
          title="Forgot Password"
          href="/auth/forgot-password"
        />
        <x-nav-item
          inertia
          title="Reset Password"
          href="/auth/reset-password"
        />
      </x-nav-item>
      <x-nav-item inertia title="Alerts" icon="alert" href="/alerts" />
      <x-nav-item inertia title="Buttons" icon="click" href="/buttons" />
      <x-nav-item title="Inputs" icon="template">
        <x-nav-item inertia title="Basic" href="/inputs/basic" />
        <x-nav-item inertia title="Select" href="/inputs/select" />
        <x-nav-item inertia title="Checkbox" href="/inputs/checkbox" />
        <x-nav-item inertia title="File" href="/inputs/file" />
        <x-nav-item inertia title="Photo" href="/inputs/photo" />
      </x-nav-item>
      <x-nav-item inertia title="Modals" icon="annotation" href="/modals" />
      <x-nav-item inertia title="Lists" icon="list" :href="$route('lists')" />
    </template>
    <template #loading>
      <x-loading-screen v-model="loading" />
    </template>
    <template>
      <slot />
    </template>
    <template slot="modal">
      <portal-target name="modal" multiple />
    </template>
  </x-layout>
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
