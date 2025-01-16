<template>
  <div class="lg:p-6 mt-6 bg-white border border-border-color rounded-lg shadow">
    <h1 class="text-[20px] text-center font-nunito font-bold leading-7 text-title-color">
      Buyers List
    </h1>
    <div class="flex items-center justify-center lg:justify-between mb-4 mt-6">
      <div class="flex space-x-2">
        <div class="relative">
          <select
            class="w-[81px] px-3 py-3 border border-table-border radius-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Under Process">Under Process</option>
          </select>
        </div>
        <div class="relative">
          <select
            class="w-[86px] px-3 py-3 border border-table-border radius-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Sort by</option>
            <option value="createdDate">Created Date</option>
            <option value="product">Product</option>
          </select>
        </div>
      </div>
      <div class="relative w-[173px] ">
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
    <Table class="mt-6 w-[350px] lg:w-[100%]">
      <template #header>
        <th class="checkbox-cell">
          <input type="checkbox" />
        </th>
        <th class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color">
          ID
        </th>
        <th class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color">
          Product
        </th>
        <th class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color">
          Company Name
        </th>
        <th class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color">
          Email
        </th>
        <th class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color">
          Action
        </th>
      </template>

      <template #rows>
        <tr v-for="(row, index) in tableData" :key="index">
          <td class="checkbox-cell">
            <input type="checkbox" :value="row" />
          </td>
          <td>{{ row.id }}</td>
          <td>{{ row.product }}</td>
          <td>{{ row.companyName }}</td>
          <td>{{ row.email }}</td>
          <td>
            <CustomButton
              :color-classes="'bg-Action-bg text-Action-Text'"
              :base-classes="'px-[32px] py-2 rounded-[8px]'"
            >
              View
            </CustomButton>
          </td>
        </tr>
      </template>
    </Table>
  </div>
    <div class="lg:flex items-center justify-between mt-6 hidden">
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

const currentPage = ref(1);
const totalPages = 10;

const goToPage = (page) => {
  currentPage.value = page;
};

const tableData = [
  { id: 3536, product: "Oil Palm", companyName: "Xi - Xian Group", email: "trungkienspktnd@gamail.com" },
  { id: 8013, product: "Rice", companyName: "Pak - Pakistan Corporation", email: "vuhaithuongnute@gmail.com" },
  { id: 9462, product: "Wheat", companyName: "Hero - Hero Corporation", email: "danghoang87hl@gmail.com" },
  { id: 1148, product: "Cowpea", companyName: "Gen - General Enterprise", email: "ckctm12@gmail.com" },
  { id: 9359, product: "Palm kernel", companyName: "VG - Van Group", email: "manhhachkt08@gmail.com" }
];
</script>

<style scoped>
th:nth-child(6){
  text-align: right;
  padding-right: 47px;
}
</style>
