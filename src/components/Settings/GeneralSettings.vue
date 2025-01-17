<template>
  <div class="min-h-screen mt-6">
    <div
      class="bg-white border border-border-color shadow rounded-lg px-6 py-5"
    >
      <h2
        class="font-nunito font-bold text-[20px] leading-7 tracking-[-2%] text-title-color"
      >
        {{ notificationtext }}
      </h2>
      <div class="flex gap-[18px] mt-[18px]">
        <div class="flex items-center gap-1">
          <input
            type="checkbox"
            id="email-notifications"
            class="w-[15px] h-[15px]"
            v-model="settings.emailNotifications"
          />
          <label
            for="email-notifications"
            class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color"
            >{{ emailNotification }}</label
          >
        </div>
        <div class="flex items-center gap-1">
          <input
            type="checkbox"
            id="sms-notifications"
            class="w-[15px] h-[15px]"
            v-model="settings.smsNotifications"
          />
          <label
            for="sms-notifications"
            class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color"
            >{{ SMSNotification }}</label
          >
        </div>
      </div>
    </div>

    <div
      class="bg-white border border-border-color shadow rounded-lg px-6 py-5 mt-6"
    >
      <h2
        class="font-nunito font-bold text-[20px] leading-7 tracking-[-2%] text-title-color"
      >
        {{ Audittext }}
      </h2>
      <div class="flex gap-[18px] mt-[18px]">
        <div class="flex items-center gap-1">
          <input
            type="checkbox"
            id="enable-audit-logs"
            class="w-[15px] h-[15px]"
            v-model="settings.enableAuditLogs"
          />
          <label
            for="enable-audit-logs"
            class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color"
            >{{ AuditLogs }}</label
          >
        </div>
        <div class="flex items-center gap-1">
          <input
            type="checkbox"
            id="notify-audit-events"
            class="w-[15px] h-[15px]"
            v-model="settings.notifyAuditEvents"
          />
          <label
            for="notify-audit-events"
            class="font-nunito font-mediumBold text-[14px] leading-5 tracking-[-0.05px] text-paragraph-color"
            >{{ AuditEvents }}</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  settings: Object,
  notificationtext: String,
  emailNotification: String,
  SMSNotification: String,
  Audittext: String,
  AuditLogs: String,
  AuditEvents: String,
});
</script>

<style scoped></style>
