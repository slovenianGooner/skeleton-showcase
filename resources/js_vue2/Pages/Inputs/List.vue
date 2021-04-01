<template>
  <div class="p-8">
    <x-page-header
      title="Inputs"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Inputs',
          href: '/inputs/photo',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    />
    <x-card title="List" class="mt-8">
      <x-input-list
        v-model="list"
        :assign-missing-props="true"
        :default="{ name: null, surname: null, toys: [] }"
      >
        <template #default="{ item, index }">
          <div>
            <div>
              <x-input-label :for="'name' + item.uid">Name</x-input-label>
              <div class="mt-1">
                <x-input-text :id="'name' + item.uid" v-model="item.name" />
              </div>
            </div>
            <div class="mt-4">
              <x-input-label :for="'surname' + item.uid">Surname</x-input-label>
              <div class="mt-1">
                <x-input-text
                  :id="'surname' + item.uid"
                  v-model="item.surname"
                />
              </div>
            </div>
            <div class="mt-4">
              <x-input-label :for="'toys' + item.uid">Toys</x-input-label>
              <div class="mt-1">
                <x-input-simple-list
                  :id="'toys' + item.uid"
                  :extra-data="item"
                  v-model="item.toys"
                >
                  <template #default="{ item, index, extraData }">
                    <x-input-text
                      :id="'value' + item.uid"
                      v-model="item.value"
                    />
                  </template>
                </x-input-simple-list>
              </div>
            </div>
          </div>
        </template>
      </x-input-list>
      <div class="mt-8 prose max-w-none">
        <pre>{{ examples.list }}</pre>
      </div>
    </x-card>
    <x-card title="Simple List" class="mt-8">
      <x-input-simple-list :collapsed="false" v-model="simpleList">
        <template #default="{ item, index }">
          <x-input-text :id="'value' + item.uid" v-model="item.value" />
        </template>
      </x-input-simple-list>
      <div class="mt-8 prose max-w-none">
        <pre>{{ examples.simpleList }}</pre>
      </div>
    </x-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { name: "Lovro", surname: "Papež", toys: ["Demo"] },
        { name: "Irena", surname: "Papež" },
        { name: "Ema", surname: "Papež" },
        { name: "Filip", surname: "Papež" },
      ],
      simpleList: ["Lovro", "Irena", "Ema", "Filip"],
      examples: {
        list: `<x-input-list
    :collapsed="false"
    v-model="list"
    :assign-missing-props="true"
    :default="{ name: null, surname: null, toys: [] }">
    <template #default="{ item, index }">
        <div>
            <x-input-label :for="'name' + item.uid">Name</x-input-label>
            <div class="mt-1">
            <x-input-text :id="'name' + item.uid" v-model="item.name" />
            </div>
        </div>
        ... more inputs here
    </template>
</x-input-list>`,
        simpleList: `<x-input-simple-list :collapsed="false" v-model="simpleList">
    <template #default="{ item, index }">
        <x-input-text :id="'value' + item.uid" v-model="item.value" />
    </template>
</x-input-simple-list>`,
      },
    };
  },
};
</script>
