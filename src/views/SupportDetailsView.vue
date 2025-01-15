<template>
    <PageHeader 
  linkText="Support"
  currentPageText="Komba Osby"
  slash="/"
  />
  <div class="flex justify-between items-start mt-8">
    <PageTitle title="Support"/>
    <div>
      <router-link to="#">
        <Button
          text="Mark as Resolved"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
  </div>
  <SupportDetails 
  SupportDetailsTitle="Komba Osby"
  SupportPresidency="(Urgent)"
  SupportTicket="Support Ticket"
  SupportTicketNumber="21356"
  SupportDescription="Diam, in vitae ante velit suscipit scelerisque commodo urna at. Arcu quam erat ac volutpat sed nunc faucibus id. Tempor adipiscing ultricies odio ipsum sed quis amet, mauris. Diam, in vitae ante velit suscipit scelerisque commodo urna at. Arcu quam erat ac volutpat sed nunc faucibus id. Tempor adipiscing ultricies odio ipsum sed quis amet, mauris."
  />

  <SupportChatModule />
  </template>
  
  <script setup>
  import PageHeader from '@/components/global/PageHeader.vue';
  import PageTitle from '@/components/global/PageTitle.vue';
  import Button from '@/components/global/Button.vue';
  import SupportDetails from '@/components/SupportDetail/SupportDetails.vue';
  import SupportChatModule from '@/components/SupportDetail/SupportChatModule.vue';
  </script>
  