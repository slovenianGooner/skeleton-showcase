<template>
  <div class="p-8">
    <XPageHeader
      title="Date Picker"
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
    <XCard class="mt-8" title="Simple" :overflows="false">
      <div>
        <XInputLabel for="about"> Date </XInputLabel>
        <div class="mt-1">
          <XInputDatePicker v-model="form.date" />
        </div>
      </div>
    </XCard>
    <XCard class="mt-8" title="Date And Time" :overflows="false">
      <div>
        <XInputLabel for="about"> Date And Time </XInputLabel>
        <div class="mt-1">
          <XInputDateTimePicker v-model="form.date_time" />
        </div>
      </div>
    </XCard>
    <XCard class="mt-8" title="Time" :overflows="false">
      <div>
        <XInputLabel for="about"> Time </XInputLabel>
        <div class="mt-1">
          <XInputTimePicker v-model="form.time" />
        </div>
      </div>
    </XCard>
    <XCard class="mt-8" title="Range" :overflows="false">
      <div>
        <XInputLabel for="about"> Range </XInputLabel>
        <div class="mt-1">
          <XInputRangePicker v-model="form.range" />
        </div>
        {{ form.range }}
      </div>
    </XCard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        date: null,
        date_time: null,
        time: null,
        range: null,
      },
    };
  },
};
</script>
