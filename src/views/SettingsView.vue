<template>
     <PageTitle
    title="Settings & User Management"
    subtitle="Customize Settings"
    class="mt-6 lg:mt-0"
  />
  <UserManagement 
  title="User Management"
  />
  <GeneralSettings />
</template>
<script setup>
import PageTitle from '@/components/global/PageTitle.vue';
import UserManagement from '@/components/Settings/UserManagement.vue';
import GeneralSettings from '@/components/Settings/GeneralSettings.vue';
</script>