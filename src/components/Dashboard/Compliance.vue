<template>
  <div class="p-6 bg-white border border-border-color shadow rounded-[12px]">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-[20px] font-nunito font-bold leading-7 text-title-color">
        Compliance
      </h1>
      <div class="flex space-x-4">
        <!-- Status Selector -->
        <div class="relative">
          <select
            class="w-[81px] px-3 py-3 border border-table-border rounded-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Under Process">Under Process</option>
          </select>
        </div>

        <!-- Sort Selector -->
        <div class="relative">
          <select
            class="w-[86px] px-3 py-3 border border-table-border rounded-[4px] font-nunito font-normal text-[12px] leading-[18px] text-Selector-Text"
          >
            <option value="">Sort by</option>
            <option value="createdDate">Created Date</option>
            <option value="product">Product</option>
          </select>
        </div>

        <!-- Search Input -->
        <div class="relative w-[173px]">
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
    </div>

    <Table class="mt-6 w-[681px]">
      <template #header>
        <th class="checkbox-cell">
          <input type="checkbox" />
        </th>
        <th
          class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color"
        >
          ID
        </th>
        <th
          class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color"
        >
          Product
        </th>
        <th
          class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color"
        >
          Created Date
        </th>
        <th
          class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color"
        >
          Status
        </th>
        <th
          class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color"
        >
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
          <td>{{ row.createdDate }}</td>
          <td>
            <CustomButton :color-classes="statusColors[row.status]">
              {{ row.status }}
            </CustomButton>
          </td>
          <td>
            <CustomButton
              :color-classes="'bg-Action-bg text-Action-Text'"
              :base-classes="'px-[32px] py-2 rounded-[8px]'"
            >
              Open
            </CustomButton>
          </td>
        </tr>
      </template>
    </Table>
  </div>
</template>

<script setup>
import Table from "@/components/global/Table.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import CustomButton from "@/components/global/CustomButton.vue";

const tableData = [
  {
    id: 3536,
    product: "Oil Palm",
    createdDate: "February 29, 2012",
    status: "Completed",
  },
  {
    id: 8013,
    product: "Rice",
    createdDate: "November 28, 2015",
    status: "Pending",
  },
  {
    id: 9462,
    product: "Wheat",
    createdDate: "December 29, 2012",
    status: "Under Process",
  },
];

const statusColors = {
  Completed: "bg-completed-Table text-completed-Text",
  Pending: "bg-pending-Table text-pending-Text",
  "Under Process": "bg-underProcess-Table text-underProcess-Text",
};
</script>
