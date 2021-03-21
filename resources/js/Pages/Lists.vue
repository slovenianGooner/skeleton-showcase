<template>
  <div class="p-8">
    <x-page-header
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
    <x-list-card class="mt-4" :data="Object.values($page.props.items.data)">
      <template slot="header">
        <x-list-search
          class="px-4 py-3 sm:px-6"
          :value="query().search"
          @submit="
            $inertia.reload({
              data: {
                search: $event,
                page: 1,
              },
            })
          "
        />
      </template>
      <template #default="{ item, index }">
        <list-card-content :item="item" />
      </template>
      <template #footer>
        <x-list-pagination
          class="px-4 py-3 sm:px-6"
          :data="$page.props.items"
          @change="
            $inertia.get($event.url, {
              preserveScroll: true,
            })
          "
        />
      </template>
    </x-list-card>
    <div class="mt-8 prose">
      <pre>{{ cardListExample }}</pre>
    </div>
    <h2 class="mt-8 font-semibold text-2xl">Separate card list</h2>
    <x-list-separate-card
      class="mt-4"
      :data="Object.values($page.props.items.data)"
    >
      <template slot="header">
        <x-list-search
          :value="query().search"
          @submit="
            $inertia.reload({
              data: {
                search: $event,
                page: 1,
              },
            })
          "
        />
      </template>
      <template #default="{ item, index }">
        <list-card-content :item="item" />
      </template>
      <template #footer>
        <x-list-pagination
          :data="$page.props.items"
          @change="
            $inertia.get($event.url, {
              preserveScroll: true,
            })
          "
        />
      </template>
    </x-list-separate-card>
    <div class="mt-8 prose">
      <pre>{{ separateCardListExample }}</pre>
    </div>
    <h2 class="mt-8 font-semibold text-2xl">Card list with filter</h2>
    <x-list-card class="mt-4" :data="Object.values($page.props.items.data)">
      <template slot="header">
        <div class="flex items-center space-x-4 px-4 py-3 sm:px-6">
          <x-list-search
            class="flex-1"
            :value="query().search"
            @submit="
              $inertia.get(
                $route($route().current(), {
                  ...query(),
                  search: $event,
                  page: 1,
                }),
                {
                  preserveScroll: true,
                }
              )
            "
          />
          <x-button-form-md @click="$refs.filter.toggle()" no-ring>
            <x-icon-filter
              class="-ml-1.5 mr-1.5 text-gray-400"
              size="w-5 h-5"
            />
            Filter
          </x-button-form-md>
        </div>
        <x-list-filter
          ref="filter"
          :filters="filters"
          @clear="
            $inertia.get(
              $route($route().current(), {
                ...$event,
                page: 1,
              }),
              {
                preserveScroll: true,
              }
            )
          "
          class="px-4 sm:px-6 border-t py-3"
        >
          <div class="grid md:grid-cols-3 gap-3 mb-3">
            <div>
              <x-input-label for="job">Job</x-input-label>
              <div class="mt-1">
                <x-input-select
                  id="job"
                  :value="query().job"
                  :options="['Recruiter', 'Child Care Worker']"
                  @input="
                    $inertia.reload({
                      data: {
                        ...query(),
                        job: $event,
                      },
                    })
                  "
                />
              </div>
            </div>
            <div>
              <x-input-label for="type">Type</x-input-label>
              <div class="mt-1">
                <x-input-select
                  id="type"
                  :value="query().type"
                  :options="['Full-time', 'Part-time']"
                  @input="
                    $inertia.reload({
                      data: {
                        ...query(),
                        type: $event,
                      },
                    })
                  "
                />
              </div>
            </div>
          </div>
        </x-list-filter>
      </template>
      <template #default="{ item, index }">
        <list-card-content :item="item" />
      </template>
      <template #footer>
        <x-list-pagination
          class="px-4 py-3 sm:px-6"
          :data="$page.props.items"
          @change="
            $inertia.get($event.url, {
              preserveScroll: true,
            })
          "
        />
      </template>
    </x-list-card>
    <div class="mt-8 prose">
      <p>
        You can add this button to the header of the card list to toggle the
        filters.
      </p>
      <pre>{{ cardWithFilterExampleButton }}</pre>
      <p>
        Then also in the header section you include the
        <code>x-list-filter</code>
        component with inputs that will filter the selection.
      </p>
      <pre>{{ cardWithFilterExample }}</pre>
    </div>
  </div>
</template>
<script>
import ListCardContent from "../Shared/Demo/ListCardContent.vue";
export default {
  components: { ListCardContent },
  data() {
    return {
      filters: ["type", "job"],
      cardListExample: `<x-list-card :data="items">
    <template slot="header">
        <x-list-search
            class="px-4 py-3 sm:px-6"
            :value="query().search"
            @submit="
                $inertia.get(
                    $route($route().current(), {
                        ...query(),
                        search: $event,
                        page: 1,
                    }),
              )
            "
        />
    </template>
    <template #default="{ item, index }">
        // Card contents...
    </template>
    <template #footer>
        <x-list-pagination
            class="px-4 py-3 sm:px-6"
            :data="items"
            @change="$inertia.get($event.url)"
        />
    </template>
</x-list-card>`,
      separateCardListExample: `<x-list-separate-card :data="items">
    <template slot="header">
        <x-list-search
            :value="query().search"
            @submit="
                $inertia.get(
                    $route($route().current(), {
                        ...query(),
                        search: $event,
                        page: 1,
                    }),
              )
            "
        />
    </template>
    <template #default="{ item, index }">
        // Card contents...
    </template>
    <template #footer>
        <x-list-pagination
            :data="items"
            @change="$inertia.get($event.url)"
        />
    </template>
</x-list-separate-card>`,
      cardWithFilterExampleButton: `<x-button-form-md @click="$refs.filter.toggle()" no-ring>
    <x-icon-filter
        class="-ml-1.5 mr-1.5 text-gray-400"
        size="w-5 h-5"
    />
    Filter
</x-button-form-md>`,
      cardWithFilterExample: `<x-list-filter
    ref="filter"
    :filters="filters"
    @clear="
        $inertia.get(
            $route($route().current(), {
                ...$event,
                page: 1,
            }),
        )
    "
    class="px-4 sm:px-6 border-t py-3">
    <div class="grid md:grid-cols-3 gap-3 mb-3">
        <div>
            <x-input-label for="job">Job</x-input-label>
            <div class="mt-1">
                <x-input-select
                  id="job"
                  :value="query().job"
                  :options="['Recruiter', 'Child Care Worker']"
                  @input="
                    $inertia.reload({
                      data: {
                        ...query(),
                        job: $event,
                      },
                    })
                  "
                />
            </div>
        </div>
    </div>
</x-list-filter>`,
    };
  },
};
</script>
