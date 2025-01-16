<template>
  <div class="lg:w-[1104px] w-full">
    <div
      class="flex flex-col mt-6 lg:flex-row items-center justify-center gap-2 lg:justify-between mb-4"
    >
      <div class="flex gap-2">
        <div class="relative">
          <select
            class="lg:w-[81px] w-full px-3 py-3 border border-table-border radius-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Under Process">Under Process</option>
          </select>
        </div>
        <div class="relative">
          <select
            class="lg:w-[81px] w-full px-3 py-3 border border-table-border radius-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Region</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Under Process">Under Process</option>
          </select>
        </div>
        <div class="relative">
          <select
            class="lg:w-[90px] w-full px-3 py-3 border border-table-border radius-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Category</option>
            <option value="createdDate">Created Date</option>
            <option value="product">Product</option>
          </select>
        </div>
      </div>
      <div class="relative lg:w-[361px] w-full">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search"
          class="block w-full pl-10 px-[14px] py-[11px] font-nunito font-normal text-[16px] leading-[22px] tracking-[-0.18px] text-Search-Text"
        />
      </div>
    </div>
    <div class="table-container">
      <Table
        class="mt-6 bg-white border border-border-color rounded-lg shadow w-[350px] lg:w-full"
      >
        <template #header>
          <th>Entity Name</th>
          <th>Entity Type</th>
          <th>Location</th>
          <th>Last Audit Date</th>
          <th>Status</th>
          <th>Action</th>
        </template>

        <template #rows>
          <tr v-for="row in tableData" :key="row.id">
            <td>{{ row.entityName }}</td>
            <td>{{ row.entityType }}</td>
            <td>{{ row.location }}</td>
            <td>{{ row.date }}</td>
            <td>
              <CustomButton
                :color-classes="getStatusClass(row.status)"
                :dot-classes="getStatusDotClass(row.status)"
                :show-dot="true"
              >
                {{ row.status }}
              </CustomButton>
            </td>
            <td>
              <div class="flex gap-3">
                <router-link :to="`/generate-report/${row.id}`">
                  <Button
                    text="Generate Report"
                    backgroundColor="bg-white"
                    textColor="text-primary-color"
                    custom-classes="px-[14px] py-2 border border-primary-color"
                  />
                </router-link>

                <router-link
                  :to="{ name: 'AuditHistory', params: { id: row.id } }"
                >
                  <Button
                    text="View History"
                    backgroundColor="bg-primary-color"
                    textColor="text-bold-color"
                    custom-classes="px-[14px] py-2"
                  />
                </router-link>
              </div>
            </td>
          </tr>
        </template>
      </Table>
    </div>

    <div
      class="lg:flex hidden items-center justify-between mt-6 bg-white border border-border-color rounded-lg shadow py-4 px-[14px]"
    >
      <div class="flex space-x-2">
        <ArrowLeft />
        <button
          class="font-nunito font-mediumSemiBold text-[14px] leading-[20px] tracking-[-0.02px] text-paragraph-color"
        >
          Previous
        </button>
      </div>
      <div class="flex space-x-2">
        <button
          v-for="page in totalPages"
          :key="page"
          class="w-10 h-10 rounded-[8px] font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px]"
          :class="{ 'bg-Pagination-bg text-black': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
      </div>
      <div class="flex space-x-2">
        <button
          class="font-nunito font-mediumSemiBold text-[14px] leading-[20px] tracking-[-0.02px] text-paragraph-color"
        >
          Next
        </button>
        <ArrowRight />
      </div>
    </div>
  </div>
</template>

<script setup>
import Table from "@/components/global/Table.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import ArrowLeft from "@/components/icons/ArrowLeft.vue";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import CustomButton from "@/components/global/CustomButton.vue";
import { ref } from "vue";
import Button from "@/components/global/Button.vue";

const currentPage = ref(1);
const totalPages = 10;

const goToPage = (page) => {
  currentPage.value = page;
};

const tableData = ref([
  {
    id: 1,
    entityName: "JD Farm",
    entityType: "Farm",
    location: "NewYork, USA",
    date: "2024-09-15",
    status: "Compliant",
  },
  {
    id: 2,
    entityName: "EcoPro Facility",
    entityType: "Processing Facility",
    location: "LA, USA",
    date: "2024-11-12",
    status: "Non-Compliant",
  },
  {
    id: 3,
    entityName: "MarketMaven",
    entityType: "Trader",
    location: "Liberty City, USA",
    date: "2024-03-15",
    status: "Pending",
  },
  {
    id: 4,
    entityName: "JD Farm",
    entityType: "Darrell",
    location: "NewYork, USA",
    date: "2024-12-11",
    status: "Compliant",
  },
  {
    id: 4,
    entityName: "TradeNest",
    entityType: "Trader",
    location: "LA, USA",
    date: "2024-01-01",
    status: "Non-Compliant",
  },
  {
    id: 5,
    entityName: "Harvest Haven",
    entityType: "Farm",
    location: "NewYork, USA",
    date: "2024-03-01",
    status: "Pending",
  },
  {
    id: 6,
    entityName: "TradeVision",
    entityType: "Trader",
    location: "Liberty City, USA",
    date: "2024-06-15",
    status: "Compliant",
  },
  {
    id: 7,
    entityName: "Verde Facility",
    entityType: "Processing Facility",
    location: "LAs, USA",
    date: "2024-09-14",
    status: "Non-Compliant",
  },
]);

const getStatusClass = (status) => {
  const statusClasses = {
    Compliant: "bg-completed-Table text-completed-Text",
    Pending: "bg-pending-Table text-pending-Text",
    "Non-Compliant": "bg-closed-bg text-closed-text",
  };
  return statusClasses[status] || "bg-gray-100 text-gray-500";
};

const getStatusDotClass = (status) => {
  const dotClasses = {
    Compliant: "bg-completed-Text",
    Pending: "bg-pending-Text",
    "Non-Compliant": "bg-closed-text",
  };
  return dotClasses[status] || "bg-gray-300";
};
</script>
<style scoped></style>
