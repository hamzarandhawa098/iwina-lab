<template>
  <div class="flex justify-between items-start">
    <PageTitle title="Support" subtitle="You can see Support tickets here" />
    <div>
      <router-link to="/support/create-ticket">
        <Button
          text="Create Ticket"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
  </div>
  <SupportTable class="mt-6" />
</template>
<script setup>
import PageTitle from "@/components/global/PageTitle.vue";
import SupportTable from "@/components/Support/SupportTable.vue";
import Button from "@/components/global/Button.vue";
</script>
