<template>
  <div class="p-8">
    <XPageHeader
      title="Lists"
      :breadcrumbs="[
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Lists',
          href: '/lists',
        },
      ]"
      @back="$inertia.get($event)"
      @navigate="$inertia.get($event)"
    />
    <h2 class="mt-8 font-semibold text-2xl">Card list</h2>
    <XListCard class="mt-4" :data="Object.values($page.props.items.data)">
      <template #header>
        <XListSearch
          class="px-4 py-3 sm:px-6"
          :modelValue="query().search"
          @search="
            $inertia.get(route(route().current()), {
              search: $event,
              page: 1,
            })
          "
        />
      </template>
      <template #default="{ item }">
        <ListCardContent :item="item" />
      </template>
      <template #footer>
        <XListPagination
          class="px-4 py-3 sm:px-6"
          :data="$page.props.items"
          @change="
            $inertia.get(
              $event.url,
              {},
              {
                preserveScroll: true,
              }
            )
          "
        />
      </template>
    </XListCard>
    <h2 class="mt-8 font-semibold text-2xl">Separate card list</h2>
    <XListSeparateCard
      class="mt-4"
      :data="Object.values($page.props.items.data)"
    >
      <template #header>
        <XListSearch
          :modelValue="query().search"
          @search="
            $inertia.get(route(route().current()), {
              search: $event,
              page: 1,
            })
          "
        />
      </template>
      <template #default="{ item }">
        <ListCardContent :item="item" />
      </template>
      <template #footer>
        <XListPagination
          :data="$page.props.items"
          @change="
            $inertia.get(
              $event.url,
              {},
              {
                preserveScroll: true,
              }
            )
          "
        />
      </template>
    </XListSeparateCard>
    <h2 class="mt-8 font-semibold text-2xl">Card list with filter</h2>
    <XListCard class="mt-4" :data="Object.values($page.props.items.data)">
      <template #header>
        <div class="flex items-center space-x-4 px-4 py-3 sm:px-6">
          <XListSearch
            class="flex-1"
            :modelValue="query().search"
            @search="
              $inertia.get(
                route(route().current(), {
                  ...query(),
                  search: $event,
                  page: 1,
                }),
                {},
                {
                  preserveScroll: true,
                }
              )
            "
          />
          <XButtonForm @click="$refs.filter.toggle()" no-ring>
            Filter
          </XButtonForm>
        </div>
        <XListFilter
          ref="filter"
          :filters="filters"
          @clear="
            $inertia.get(
              route(route().current(), {
                ...$event,
                page: 1,
              }),
              {},
              {
                preserveScroll: true,
              }
            )
          "
          class="px-4 sm:px-6 border-t py-3"
        >
          <div class="grid md:grid-cols-3 gap-3 mb-3">
            <div>
              <XInputLabel for="job">Job</XInputLabel>
              <div class="mt-1">
                <XInputSelect
                  id="job"
                  :modelValue="query().job"
                  :options="['Recruiter', 'Child Care Worker']"
                  @update:modelValue="
                    $inertia.get(
                      route(route().current()),
                      {
                        ...query(),
                        job: $event,
                      },
                      {
                        preserveScroll: true,
                      }
                    )
                  "
                />
              </div>
            </div>
            <div>
              <XInputLabel for="type">Type</XInputLabel>
              <div class="mt-1">
                <XInputSelect
                  id="type"
                  :modelValue="query().type"
                  :options="['Full-time', 'Part-time']"
                  @update:modelValue="
                    $inertia.get(
                      route(route().current()),
                      {
                        ...query(),
                        type: $event,
                      },
                      {
                        preserveScroll: true,
                      }
                    )
                  "
                />
              </div>
            </div>
          </div>
        </XListFilter>
      </template>
      <template #default="{ item }">
        <ListCardContent :item="item" />
      </template>
      <template #footer>
        <XListPagination
          class="px-4 py-3 sm:px-6"
          :data="$page.props.items"
          @change="
            $inertia.get(
              $event.url,
              {},
              {
                preserveScroll: true,
              }
            )
          "
        />
      </template>
    </XListCard>
    <div class="mt-8 prose">
      <p>
        You can add this button to the header of the card list to toggle the
        filters.
      </p>
      <p>
        Then also in the header section you include the
        <code>XListFilter</code>
        component with inputs that will filter the selection.
      </p>
    </div>
  </div>
</template>
<script>
import {
  XPageHeader,
  XListCard,
  XListFilter,
  XListPagination,
  XListSearch,
  XListSeparateCard,
  XInputLabel,
  XInputSelect,
  XButtonForm,
} from "sg-skelly";
import ListCardContent from "../Shared/Demo/ListCardContent.vue";
export default {
  components: {
    XPageHeader,
    ListCardContent,
    XListCard,
    XListFilter,
    XListPagination,
    XListSearch,
    XListSeparateCard,
    XInputLabel,
    XInputSelect,
    XButtonForm,
  },
  data() {
    return {
      filters: ["type", "job"],
    };
  },
};
</script>
