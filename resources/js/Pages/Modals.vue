<template>
  <div class="p-8 max-w-screen-lg">
    <x-page-header
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
    <x-alert-success v-if="$page.props.flash.success" class="mt-4">
      <template>
        {{ $page.props.flash.success }}
      </template>
    </x-alert-success>
    <x-card class="mt-5">
      <div class="flex flex-col">
        <!-- simple modal -->
        <h3 class="font-semibold mb-4 text-lg">Simple modal</h3>

        <div>
          <x-button-form-md @click="$refs.simpleModal.show()">
            Open simple modal
          </x-button-form-md>
        </div>

        <div class="prose mt-4 mb-8">
          <pre>{{ examples.simpleModal }}</pre>
        </div>

        <portal to="modal">
          <x-modal ref="simpleModal">
            <template #header>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Simple Modal
              </h3>
            </template>
            <template>
              <div class="prose">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo totam non cumque deserunt officiis ex maiores
                  nostrum.
                </p>
              </div>
            </template>
            <template #footer="{ close }">
              <div class="flex justify-end items-center space-x-2">
                <x-button-form-md @click="close">Cancel</x-button-form-md>
                <x-button-form-md
                  color="gray"
                  text-color="text-white"
                  @click="
                    close();
                    submit();
                  "
                >
                  Save
                </x-button-form-md>
              </div>
            </template>
          </x-modal>
        </portal>

        <!-- confirmation modal -->
        <h3 class="font-semibold mb-4 text-lg">Confirmation modal</h3>

        <div>
          <x-button-form-md @click="$refs.confirmationModal.show()">
            Open confirmation modal
          </x-button-form-md>
        </div>

        <div class="prose mt-4 mb-8">
          <pre>{{ examples.confirmationModal }}</pre>
        </div>

        <portal to="modal">
          <x-modal-confirm ref="confirmationModal" @submit="confirm">
            <template #header>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Are you sure?
              </h3>
            </template>
            <template>
              Confirming this action will delete all your account data.
            </template>
          </x-modal-confirm>
        </portal>

        <!-- fullscreen modal -->
        <h3 class="font-semibold mb-4 text-lg">Fullscreen modal</h3>

        <div>
          <x-button-form-md @click="$refs.fullscreenModal.show()">
            Open fullscreen modal
          </x-button-form-md>
        </div>

        <div class="prose mt-4 mb-8">
          <pre>{{ examples.fullScreenModal }}</pre>
        </div>

        <portal to="modal">
          <x-modal-fullscreen ref="fullscreenModal" :transition="false">
            <template #header>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Fullscreen Modal
              </h3>
            </template>
            <template>
              <div class="prose max-w-none">
                <p v-for="number in Array(22).keys()" :key="number">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo totam non cumque deserunt officiis ex maiores
                  nostrum.
                </p>
              </div>
            </template>
            <template #footer="{ close }">
              <div class="flex justify-end items-center space-x-2">
                <x-button-form-md @click="close">Cancel</x-button-form-md>
                <x-button-form-md
                  color="gray"
                  text-color="text-white"
                  @click="
                    close();
                    submit();
                  "
                >
                  Save
                </x-button-form-md>
              </div>
            </template>
          </x-modal-fullscreen>
        </portal>

        <!-- modal switching -->
        <h3 class="font-semibold mb-4 text-lg">Modal switching</h3>

        <div>
          <x-button-form-md @click="$refs.modalOne.show()">
            Open initial modal
          </x-button-form-md>
          <portal to="modal">
            <x-modal ref="modalOne">
              <template #header>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Initial Modal
                </h3>
              </template>
              <template>
                <div class="prose">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo totam non cumque deserunt officiis ex maiores
                    nostrum.
                  </p>
                </div>
              </template>
              <template #footer="{ close }">
                <div class="flex justify-end items-center space-x-2">
                  <x-button-form-md @click="close">Cancel</x-button-form-md>
                  <x-button-form-md
                    color="gray"
                    text-color="text-white"
                    @click="
                      close();
                      $refs.modalTwo.show(false);
                    "
                  >
                    Open another modal
                  </x-button-form-md>
                </div>
              </template>
            </x-modal>
            <x-modal ref="modalTwo" :transition="false">
              <template #header>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Second Modal
                </h3>
              </template>
              <template>
                <div class="prose">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo totam non cumque deserunt officiis ex maiores
                    nostrum.
                  </p>
                </div>
              </template>
              <template #footer="{ close }">
                <div class="flex justify-end items-center space-x-2">
                  <x-button-form-md @click="close">Cancel</x-button-form-md>
                  <x-button-form-md
                    color="gray"
                    text-color="text-white"
                    @click="
                      close();
                      submit();
                    "
                  >
                    Save
                  </x-button-form-md>
                </div>
              </template>
            </x-modal>
          </portal>
        </div>
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
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
  data() {
    return {
      examples: {
        simpleModal: `<!-- button to open the modal -->
<div>
    <x-button-form-md @click="$refs.simpleModal.show()">
    Open simple modal
    </x-button-form-md>
</div>

<!-- modal gets portaled to modal portal target -->
<portal to="modal">
    <x-modal ref="simpleModal">
        <template #header>
            Modal header.
        </template>
        <template>
            Body content.
        </template>
        <template #footer="{ close }">
            <div class="flex justify-end items-center space-x-2">
                <x-button-form-md @click="close">Cancel</x-button-form-md>
                <x-button-form-md color="gray" text-color="text-white" @click="close(); submit();">
                    Save
                </x-button-form-md>
            </div>
        </template>
    </x-modal>
</portal>`,
        confirmationModal: `<!-- button to open the modal -->
<div>
    <x-button-form-md @click="$refs.confirmationModal.show()">
        Open confirmation modal
    </x-button-form-md>
</div>

<!-- modal gets portaled to modal portal target -->
<portal to="modal">
    <x-modal-confirm ref="confirmationModal" @submit="confirm">
        <template #header>
            Modal header
        </template>
        <template>
            Confirming this action will delete all your account data.
        </template>
    </x-modal-confirm>
</portal>`,
        fullScreenModal: `<!-- button to open the modal -->
<div>
    <x-button-form-md @click="$refs.fullscreenModal.show()">
        Open fullscreen modal
    </x-button-form-md>
</div>

<!-- modal gets portaled to modal portal target -->
<portal to="modal">
    <x-modal-fullscreen ref="fullscreenModal">
        <template #header>
            Modal header
        </template>
        <template>
            Body.
        </template>
        <template #footer="{ close }">
            <div class="flex justify-end items-center space-x-2">
                <x-button-form-md @click="close">Cancel</x-button-form-md>
                <x-button-form-md color="gray" text-color="text-white" @click="close(); submit();">
                    Save
                </x-button-form-md>
            </div>
        </template>
    </x-modal-fullscreen>
</portal>`,
      },
    };
  },
};
</script>
