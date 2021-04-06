<template>
  <XAuthForgotPassword title="Skelly Showcase" subtitle="Reset your password" />
</template>
<script>
import GuestLayout from "../../Shared/GuestLayout";
import { XAuthForgotPassword } from "sg-skelly";

export default {
  components: {
    XAuthForgotPassword,
  },
  layout: GuestLayout,
};
</script>
