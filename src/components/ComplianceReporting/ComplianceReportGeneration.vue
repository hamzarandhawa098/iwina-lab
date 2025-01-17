<template>
  <div
    class="lg:w-[1104px] mx-auto border border-border-color px-6 py-5 mt-6 bg-white rounded-lg shadow"
  >
    <h2
      class="font-inter font-semibold text-[30px] leading-[38px] text-title-color"
    >
      Compliance Report Generation
    </h2>
    <form @submit.prevent="generateReport" class="mt-[22px]">
      <div>
        <select
          id="organisation"
          v-model="selectedOrganisation"
          class="w-full font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder px-3 py-[17px] rounded-[8px] border border-Ticket-input"
        >
          <option value="" disabled>Select Organisation</option>
          <option
            v-for="organisation in organisations"
            :key="organisation"
            :value="organisation"
          >
            {{ organisation }}
          </option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-4 mt-[22px]">
        <div>
          <GenericInput
            id="fromDate"
            type="date"
            v-model="fromDate"
          />
        </div>
        <div>
          <GenericInput
            id="toDate"
            type="date"
            v-model="toDate"
          />
        </div>
      </div>
      <div class="mt-[22px]">
        <Button
          text="Generate Report"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/global/Button.vue";
import GenericInput from "@/components/global/GenericInput.vue";

const selectedOrganisation = ref("");
const fromDate = ref("");
const toDate = ref("");
const organisations = ref(["Org 1", "Org 2", "Org 3"]); 

const generateReport = () => {
  if (!selectedOrganisation.value || !fromDate.value || !toDate.value) {
    alert("Please fill in all fields.");
    return;
  }

  alert(
    `Generating report for ${selectedOrganisation.value} from ${fromDate.value} to ${toDate.value}`
  );
};
</script>

<style scoped></style>
