<template>
  <div class="p-6 bg-white border border-border-color rounded-lg shadow">
    <div class="flex items-center justify-between">
      <h1 class="text-[20px] font-nunito font-bold leading-7 text-title-color">
        Transactions
      </h1>
      <Button
        text="View All Transactions"
        backgroundColor="bg-primary-color"
        textColor="text-bold-color"
        custom-classes="px-4 py-3"
      />
    </div>
    <Table class="w-[681px] mt-[18px]">
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
          <td class="text-table-content flex justify-center">{{ row.price }}</td>
          <td>
            <div>
              <span class="text-table-content">{{ row.buyer }}</span>
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
            <div class="flex space-x-3">
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
</template>

<script setup>
import Table from "@/components/global/Table.vue";
import Button from "@/components/global/Button.vue";
import { ref } from "vue";
import EditIcon from "@/components/icons/EditMarketplaceIcon.vue";
import DeleteIcon from "@/components/icons/DeleteMarketplaceIcon.vue";
import ViewIcon from "@/components/icons/ViewIcon.vue";

const tableHeaders = ref(["ID", "Date", "Transaction", "Buyer", "Gross", "Action"]);

const tableData = ref([
  {
    id: 102,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Alex",
    gross: "-$246",
  },
  {
    id: 104,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Rice",
    gross: "+$240",
  },
  {
    id: 106,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Wheat",
    gross: "+$200",
  },
  {
    id: 108,
    Date: "12feb,2024",
    price: "$202",
    buyer: "Rice",
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
