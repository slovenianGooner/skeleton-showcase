<template>
  <div class="p-8 max-w-screen-lg">
    <XPageHeader
      title="Alerts"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Alerts',
          href: 'alerts',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    ></XPageHeader>

    <!-- Form -->
    <XCard class="mt-5" title="Form">
      <div class="prose prose-red">
        <p>
          Whenever you post a form you can also display errors. This is done via
          the <code>XAlertFormError</code> component. Simply pass in the errors
          property and the magic happens. <br />
        </p>
      </div>
      <XAlertFormError :errors="errors" class="mt-4" />
    </XCard>

    <!-- Banner -->
    <XCard class="mt-5 mb-8" title="Banner">
      <!-- fixed -->
      <div class="prose prose-red">
        <h4>Fixed</h4>
        <p>
          Banner can be fixed to the bottom or the top. To use this, add the
          appropriate classes. <br />
          Example: <code>fixed left-0 bottom-0</code> to position the banner to
          the bottom or <code>fixed left-0 top-0</code> for the top. <br />
          You can see the example of the banner below.
        </p>
      </div>
      <XAlertBanner
        class="bottom-0 left-0 fixed z-20"
        dismissable
        @dismiss="bottomBanner = false"
        v-if="bottomBanner"
      >
        This is the banner alert that is fixed to the bottom.
        <template #link>
          <inertia-link href="/alerts" class="font-bold underline">
            This is an optional link that you can provide
            <span aria-hidden="true">&rarr;</span>
          </inertia-link>
        </template>
      </XAlertBanner>

      <!-- inline -->
      <div class="mt-8 prose prose-red">
        <h4>Inline</h4>
        <p>
          You can also position the banner inline without any special classes.
        </p>
      </div>
      <XAlertBanner class="mt-4 rounded relative" :dismissable="false">
        This is the banner alert that is inline.
        <template #link>
          <inertia-link href="/alerts" class="font-bold underline">
            See more
            <span aria-hidden="true">&rarr;</span>
          </inertia-link>
        </template>
      </XAlertBanner>

      <div class="mt-8 prose prose-red">
        <h4>Dismissable</h4>
        <p>
          A banner can also be dismissable. This is managed by the
          <code>dismissable</code> property. <br />
          By default the property is set to true, but you can set it to
          <code>false</code> to disable the possibility to dismiss it. <br />
          Clicking on the dismiss button returns a <code>@dismiss</code> event
          that you can catch and act upon it.
          <code>@dismiss="showBanner = false"</code>
        </p>
      </div>
      <XAlertBanner
        class="mt-4 rounded"
        dismissable
        @dismiss="inlineBanner = false"
        v-if="inlineBanner"
      >
        This is the banner alert that is dismissable.
        <template #link>
          <inertia-link href="/alerts" class="font-bold underline">
            See more
            <span aria-hidden="true">&rarr;</span>
          </inertia-link>
        </template>
      </XAlertBanner>
    </XCard>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomBanner: true,
      inlineBanner: true,
      errors: {
        username: ["The username field is required."],
        password: ["Password is not valid."],
      },
    };
  },
};
</script>
