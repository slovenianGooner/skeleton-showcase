<template>
  <XAuthLogin title="Skelly Showcase" subtitle="Sign in to your account" />
</template>
<script>
import GuestLayout from "../../Shared/GuestLayout";
import { XAuthLogin } from "sg-skelly";

export default {
  components: {
    XAuthLogin,
  },
  layout: GuestLayout,
};
</script>
