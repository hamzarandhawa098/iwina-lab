<template>
  <div class="lg:w-[1104px] w-full">
    <div class="flex flex-col lg:flex-row items-center justify-center gap-2  lg:justify-between mb-4">
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
            class="lg:w-[86px] w-full px-3 py-3 border border-table-border radius-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Sort by</option>
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
    <Table class="mt-6 bg-white border border-border-color rounded-lg shadow w-[350px] lg:w-full">
      <template #header>
        <th>Ticket ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Title</th>
        <th>Status</th>
        <th>Action</th>
      </template>

      <template #rows>
        <tr v-for="row in tableData" :key="row.id">
          <td>{{ row.id }}</td>
          <td>{{ row.username }}</td>
          <td>{{ row.email }}</td>
          <td>{{ row.title }}</td>
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
            <CustomButton
              :color-classes="'bg-Action-bg text-Action-Text'"
              :base-classes="'px-[32px] py-2 rounded-[8px]'"
            >
              <router-link
                :to="{ name: 'supportdetails', params: { id: row.id } }"
              >
                View
              </router-link>
            </CustomButton>
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

const currentPage = ref(1);
const totalPages = 10;

const goToPage = (page) => {
  currentPage.value = page;
};

const tableData = [
  {
    id: 4600,
    username: "Max",
    email: "nvt.isst.nute@gmail.com",
    title: "123456",
    status: "Resolved",
  },
  {
    id: 4152,
    username: "Kristin",
    email: "tranthuy.nute@gmail.com",
    title: "123456",
    status: "Closed",
  },
  {
    id: 8829,
    username: "Soham",
    email: "thuhang.nute@gmail.com",
    title: "123456",
    status: "Resolved",
  },
  {
    id: 3536,
    username: "Darrell",
    email: "trungkienspktnd@gamail.com",
    title: "123456",
    status: "Open",
  },
  {
    id: 8013,
    username: "Cameron",
    email: "vuhaithuongnute@gmail.com",
    title: "123456",
    status: "Open",
  },
  {
    id: 9462,
    username: "Darlene",
    email: "danghoang87hl@gmail.com",
    title: "123456",
    status: "Resolved",
  },
  {
    id: 1148,
    username: "Victoria",
    email: "ckctm12@gmail.com",
    title: "123456",
    status: "Open",
  },
  {
    id: 9359,
    username: "Leslie",
    email: "manhhachkt08@gmail.com",
    title: "123456",
    status: "Resolved",
  },
];

const getStatusClass = (status) => {
  const statusClasses = {
    Resolved: "bg-completed-Table text-completed-Text",
    Open: "bg-pending-Table text-pending-Text",
    Closed: "bg-closed-bg text-closed-text",
  };
  return statusClasses[status] || "bg-gray-100 text-gray-500";
};

const getStatusDotClass = (status) => {
  const dotClasses = {
    Resolved: "bg-completed-Text",
    Open: "bg-pending-Text",
    Closed: "bg-closed-text",
  };
  return dotClasses[status] || "bg-gray-300";
};
</script>
