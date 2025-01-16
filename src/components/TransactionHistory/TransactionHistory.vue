<template>
  <div class="lg:p-6 p-2 bg-white border border-border-color rounded-lg shadow">
    <div class="flex flex-col lg:flex-row items-center justify-between">
      <h1 class="text-[20px] font-nunito font-bold leading-7 text-title-color">
        {{ title }}
      </h1>
      <router-link to="">
        <Button
          text="View All Products"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
    <div class="table-container">
    <Table class="lg:w-[1063px] w-[350px] mt-[18px]">
      <template #header>
        <th class="checkbox-cell">
          <input type="checkbox" />
        </th>
        <th
          v-for="(header, index) in tableHeaders"
          :key="index"
          class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color"
        >
          {{ header }}
        </th>
      </template>

      <template #rows>
        <tr v-for="(row, index) in tableData" :key="index">
          <td class="checkbox-cell">
            <input type="checkbox" :value="row" />
          </td>
          <td class="text-table-content">{{ row.id }}</td>
          <td>
            <span class="text-table-content">{{ row.Date }}</span>
          </td>
          <td class="text-table-content flex justify-center">
            {{ row.price }}
          </td>
          <td>
            <div>
              <span class="text-table-content">{{ row.buyer }}</span>
            </div>
          </td>
          <td>
            <div>
              <span class="text-table-content">{{ row.product }}</span>
            </div>
          </td>
          <td>
            <span
              :class="{
                'text-green-500': row.gross.startsWith('+'),
                'text-red-500': row.gross.startsWith('-'),
              }"
            >
              {{ row.gross }}
            </span>
          </td>
          <td>
            <div class="flex space-x-3 justify-end">
              <ViewIcon
                class="w-5 h-5 cursor-pointer text-green-500"
                @click="onView(row)"
              />
              <DeleteIcon
                class="w-5 h-5 cursor-pointer text-red-500"
                @click="onDelete(row)"
              />
              <EditIcon
                class="w-5 h-5 cursor-pointer text-blue-500"
                @click="onEdit(row)"
              />
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
import Button from "@/components/global/Button.vue";
import { ref } from "vue";
import EditIcon from "@/components/icons/EditMarketplaceIcon.vue";
import DeleteIcon from "@/components/icons/DeleteMarketplaceIcon.vue";
import ViewIcon from "@/components/icons/ViewIcon.vue";
import ArrowLeft from "@/components/icons/ArrowLeft.vue";
import ArrowRight from "@/components/icons/ArrowRight.vue";

defineProps({
  title: String,
});


const currentPage = ref(1);
const totalPages = 10;

const goToPage = (page) => {
  currentPage.value = page;
};


const tableHeaders = ref([
  "ID",
  "Date",
  "Transaction",
  "Buyer",
  "Product",
  "Gross",
  "Action",
]);

const tableData = ref([
  {
    id: 102,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Alex",
    product: "Oil Palm",
    gross: "-$246",
  },
  {
    id: 104,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Rice",
    product: "Rice",
    gross: "+$240",
  },
  {
    id: 106,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Wheat",
    product: "Wheat",
    gross: "+$200",
  },
  {
    id: 108,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Rice",
    product: "Rice",
    gross: "+$249",
  },
  {
    id: 108,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Rice",
    product: "Oil Palm",
    gross: "+$249",
  },
  {
    id: 108,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Rice",
    product: "Rice",
    gross: "+$249",
  },
]);

const onEdit = (row) => {
  console.log("Edit clicked for:", row);
};

const onDelete = (row) => {
  console.log("Delete clicked for:", row);
};

const onView = (row) => {
  console.log("View clicked for:", row);
};
</script>
<style scoped>
th:nth-child(8) {
  text-align: right;
  padding-right: 47px;
}
th:nth-child(2) {
  text-align: left;
}
th:nth-child(4) {
  text-align: center;
}
</style>
