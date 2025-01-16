<template>
    <PageTitle title="Notifications" subtitle="You can see notifications about the system here"  class="mt-10 lg:mt-0"/>
    <Notifications 
    :NotificationPageIcon="NotificationPageIcon"
    :notifications="notifications"
    />
</template>
<script setup>
import { ref } from "vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Notifications from "@/components/Notifications/Notifications.vue";
import NotificationPageIcon from '@/components/icons/NotificationPageIcon.vue';

     const notifications = ref([
        { id: 1, title: "Notification Title", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." },
        { id: 2, title: "Notification Title", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." },
        { id: 3, title: "Notification Title", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." },
        { id: 4, title: "Notification Title", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." },
        { id: 5, title: "Notification Title", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." },
      ])
</script>
