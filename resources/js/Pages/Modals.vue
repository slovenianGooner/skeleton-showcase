<template>
  <div class="p-8 max-w-screen-lg">
    <XPageHeader
      title="Modals"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Modals',
          href: '/modals',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    />
    <XAlertSuccess v-if="$page.props.flash.success" class="mt-4">
      {{ $page.props.flash.success }}
    </XAlertSuccess>
    <XCard class="mt-5">
      <div class="flex flex-col">
        <!-- simple modal -->
        <h3 class="font-semibold mb-4 text-lg">Simple modal</h3>

        <div class="mb-4">
          <XButtonForm @click="$refs.simpleModal.show()">
            Open simple modal
          </XButtonForm>
        </div>

        <teleport to="body">
          <XModal ref="simpleModal">
            <template #header>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Simple Modal
              </h3>
            </template>
            <div class="prose">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo totam non cumque deserunt officiis ex maiores nostrum.
              </p>
            </div>
            <template #footer="{ close }">
              <div class="flex justify-end items-center space-x-2">
                <XButtonForm @click="close">Cancel</XButtonForm>
                <XButtonForm
                  color="gray"
                  text-color="text-white"
                  @click="
                    close();
                    submit();
                  "
                >
                  Save
                </XButtonForm>
              </div>
            </template>
          </XModal>
        </teleport>

        <!-- confirmation modal -->
        <h3 class="font-semibold mb-4 text-lg">Confirmation modal</h3>

        <div class="mb-4">
          <XButtonForm @click="$refs.confirmationModal.show()">
            Open confirmation modal
          </XButtonForm>
        </div>

        <teleport to="body">
          <XModalConfirm ref="confirmationModal" @submit="confirm">
            <template #header>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Are you sure?
              </h3>
            </template>
            Confirming this action will delete all your account data.
          </XModalConfirm>
        </teleport>

        <!-- fullscreen modal -->
        <h3 class="font-semibold mb-4 text-lg">Fullscreen modal</h3>

        <div class="mb-4">
          <XButtonForm @click="$refs.fullscreenModal.show()">
            Open fullscreen modal
          </XButtonForm>
        </div>

        <teleport to="body">
          <XModalFullscreen ref="fullscreenModal" :transition="false">
            <template #header>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Fullscreen Modal
              </h3>
            </template>
            <div class="prose max-w-none">
              <p v-for="number in Array(22).keys()" :key="number">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo totam non cumque deserunt officiis ex maiores nostrum.
              </p>
            </div>
            <template #footer="{ close }">
              <div class="flex justify-end items-center space-x-2">
                <XButtonForm @click="close">Cancel</XButtonForm>
                <XButtonForm
                  color="gray"
                  text-color="text-white"
                  @click="
                    close();
                    submit();
                  "
                >
                  Save
                </XButtonForm>
              </div>
            </template>
          </XModalFullscreen>
        </teleport>

        <!-- modal switching -->
        <h3 class="font-semibold mb-4 text-lg">Modal switching</h3>

        <div class="mb-4">
          <XButtonForm @click="$refs.modalOne.show()">
            Open initial modal
          </XButtonForm>
          <teleport to="body">
            <XModal ref="modalOne">
              <template #header>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Initial Modal
                </h3>
              </template>
              <div class="prose">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo totam non cumque deserunt officiis ex maiores
                  nostrum.
                </p>
              </div>
              <template #footer="{ close }">
                <div class="flex justify-end items-center space-x-2">
                  <XButtonForm @click="close">Cancel</XButtonForm>
                  <XButtonForm
                    color="gray"
                    text-color="text-white"
                    @click="
                      close();
                      $refs.modalTwo.show(false);
                    "
                  >
                    Open another modal
                  </XButtonForm>
                </div>
              </template>
            </XModal>
            <XModal ref="modalTwo" :transition="false">
              <template #header>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Second Modal
                </h3>
              </template>
              <div class="prose">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo totam non cumque deserunt officiis ex maiores
                  nostrum.
                </p>
              </div>
              <template #footer="{ close }">
                <div class="flex justify-end items-center space-x-2">
                  <XButtonForm @click="close">Cancel</XButtonForm>
                  <XButtonForm
                    color="gray"
                    text-color="text-white"
                    @click="
                      close();
                      submit();
                    "
                  >
                    Save
                  </XButtonForm>
                </div>
              </template>
            </XModal>
          </teleport>
        </div>
      </div>
    </XCard>
  </div>
</template>
<script>
import {
  XAlertSuccess,
  XButtonForm,
  XButtonLink,
  XCard,
  XModal,
  XModalConfirm,
  XModalFullscreen,
  XPageHeader,
} from "sg-skelly";
export default {
  components: {
    XAlertSuccess,
    XButtonForm,
    XButtonLink,
    XCard,
    XModal,
    XModalConfirm,
    XModalFullscreen,
    XPageHeader,
  },
  methods: {
    submit() {
      this.$inertia.post("modal");
    },
    submitFullscreen() {
      this.$inertia.post("modal");
    },
    confirm() {
      this.$inertia.delete("confirmation-modal");
    },
  },
};
</script>
