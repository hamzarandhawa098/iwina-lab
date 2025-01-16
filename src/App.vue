<template>
  <div>
    <component :is="layoutComponent">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from '@/layout/DefaultLayout.vue';
import DashboardLayout from '@/layout/DashboardLayout.vue';

const route = useRoute();

const layoutComponent = computed(() => {
  return route.meta.layout === DefaultLayout ? DefaultLayout : DashboardLayout;
});
</script>
