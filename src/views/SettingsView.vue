<template>
     <PageTitle
    title="Settings & User Management"
    subtitle="Customize Settings"
    class="mt-6 lg:mt-0"
  />
  <UserManagement 
  title="User Management"
  />
  <GeneralSettings 
  :settings="settings"
  notificationtext="Notification Settings"
  emailNotification="Email Notifications"
  SMSNotification="SMS Notifications"
  Audittext="Audit Preferences"
  AuditLogs="Enable Audit Logs"
  AuditEvents="Notify on Audit Events"
  />
</template>
<script setup>
import { ref } from 'vue';
import PageTitle from '@/components/global/PageTitle.vue';
import UserManagement from '@/components/Settings/UserManagement.vue';
import GeneralSettings from '@/components/Settings/GeneralSettings.vue';

const settings = ref({
    emailNotifications: false,
    smsNotifications: false,
    enableAuditLogs: false,
    notifyAuditEvents: false,
  });
</script>