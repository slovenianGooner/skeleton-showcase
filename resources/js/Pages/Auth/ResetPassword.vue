<template>
  <XAuthResetPassword title="Skelly Showcase" subtitle="Reset your password" />
</template>
<script>
import GuestLayout from "../../Shared/GuestLayout";
import { XAuthResetPassword } from "sg-skelly";

export default {
  components: {
    XAuthResetPassword,
  },
  layout: GuestLayout,
};
</script>
