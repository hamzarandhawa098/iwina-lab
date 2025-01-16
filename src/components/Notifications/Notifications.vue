<template>
  <div class="bg-white border mt-6 w-full lg:w-[1104px] border-border-color p-4 rounded-lg shadow-sm">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="flex items-center space-x-3 space-y-[14px] p-4 border-b last:border-b-0"
    >
      <div class="px-[11px] py-[9px] ">
        <component  :is="NotificationPageIcon" />
      </div>
      <div>
        <h4 class="font-nunito font-bold text-[14px] leading-[20px] tracking-[-0.05px] text-scores-label">{{ notification.title }}</h4>
        <p class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-light-color mt-1">
          {{ notification.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
    NotificationPageIcon: String,
    notifications : Array,
})
</script>

<style scoped></style>
