<template>
  <div class="p-8">
    <XPageHeader
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
    <XCard title="List" class="mt-8">
      <XInputList
        v-model="list"
        :assign-missing-props="true"
        :default="{ name: null, surname: null, toys: [] }"
      >
        <template #default="{ item }">
          <div>
            <div>
              <XInputLabel :for="'name' + item.uid">Name</XInputLabel>
              <div class="mt-1">
                <XInputText :id="'name' + item.uid" v-model="item.name" />
              </div>
            </div>
            <div class="mt-4">
              <XInputLabel :for="'surname' + item.uid">Surname</XInputLabel>
              <div class="mt-1">
                <XInputText :id="'surname' + item.uid" v-model="item.surname" />
              </div>
            </div>
            <div class="mt-4">
              <XInputLabel :for="'toys' + item.uid">Toys</XInputLabel>
              <div class="mt-1">
                <XInputSimpleList
                  :id="'toys' + item.uid"
                  :extra-data="item"
                  v-model="item.toys"
                >
                  <template #default="{ item }">
                    <XInputText :id="'value' + item.uid" v-model="item.value" />
                  </template>
                </XInputSimpleList>
              </div>
            </div>
          </div>
        </template>
      </XInputList>
    </XCard>
    <XCard title="Simple List" class="mt-8">
      <XInputSimpleList :collapsed="false" v-model="simpleList">
        <template #default="{ item }">
          <XInputText :id="'value' + item.uid" v-model="item.value" />
        </template>
      </XInputSimpleList>
    </XCard>
  </div>
</template>
<script>
import {
  XPageHeader,
  XCard,
  XInputLabel,
  XInputText,
  XInputSimpleList,
  XInputList,
} from "sg-skelly";
export default {
  components: {
    XPageHeader,
    XCard,
    XInputLabel,
    XInputText,
    XInputSimpleList,
    XInputList,
  },
  data() {
    return {
      list: [
        { name: "Lovro", surname: "Papež", toys: ["Demo"] },
        { name: "Irena", surname: "Papež" },
        { name: "Ema", surname: "Papež" },
        { name: "Filip", surname: "Papež" },
      ],
      simpleList: ["Lovro", "Irena", "Ema", "Filip"],
    };
  },
};
</script>
