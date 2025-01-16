<template>
  <div
    class="lg:p-6 px-1 bg-white border border-border-color rounded-lg shadow"
  >
    <div class="flex items-center justify-between">
      <h1 class="text-[20px] font-nunito font-bold leading-7 text-title-color">
        {{ title }}
      </h1>
      <router-link to="/product-sourcing">
        <Button
          text="View All Sourcing"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
    <div class="table-container">
      <Table class="w-[350px] lg:w-[1056px] mt-[18px]">
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
              <span class="text-table-content">{{ row.product }}</span>
            </td>
            <td class="text-table-content">{{ row.supplier }}</td>
            <td>
              <CustomButton :color-classes="statusColors[row.status]">
                {{ row.status }}
              </CustomButton>
            </td>
            <td>
              <span class="text-table-content">
                {{ row.quantity }}
              </span>
            </td>
            <td>
              <span class="text-table-content">
                {{ row.targetPrice }}
              </span>
            </td>
            <td>
              <span class="text-table-content">
                {{ row.sourcePrice }}
              </span>
            </td>
            <td>
              <div class="flex space-x-6">
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
  </div>
</template>

<script setup>
import Table from "@/components/global/Table.vue";
import Button from "@/components/global/Button.vue";
import { ref } from "vue";
import EditIcon from "@/components/icons/EditMarketplaceIcon.vue";
import DeleteIcon from "@/components/icons/DeleteMarketplaceIcon.vue";
import ViewIcon from "@/components/icons/ViewIcon.vue";
import CustomButton from "@/components/global/CustomButton.vue";
defineProps({
  title: String,
});

const tableHeaders = ref([
  "ID",
  "Product",
  "Supplier",
  "Status",
  "Quantity",
  "Target Price",
  "Source Price",
  "Action",
]);

const tableData = ref([
  {
    id: 102,
    product: "Oil Palm",
    supplier: "Supplier A",
    status: "Completed",
    quantity: "500",
    targetPrice: "$250",
    sourcePrice: "$200",
  },
  {
    id: 104,
    product: "Rice",
    supplier: "Supplier B",
    status: "Pending",
    quantity: "1000",
    targetPrice: "$350",
    sourcePrice: "$300",
  },
  {
    id: 106,
    product: "Wheat",
    supplier: "Supplier C",
    status: "Under Process",
    quantity: "300",
    targetPrice: "$450",
    sourcePrice: "$400",
  },
  {
    id: 108,
    product: "Cowpea",
    supplier: "Supplier D",
    status: "Pending",
    quantity: "200",
    targetPrice: "$550",
    sourcePrice: "$500",
  },
  {
    id: 108,
    product: "Palm kernel",
    supplier: "Supplier E",
    status: "Under Process",
    quantity: "400",
    targetPrice: "$500",
    sourcePrice: "$400",
  },
]);

const statusColors = {
  Completed: "bg-completed-Table text-completed-Text",
  Pending: "bg-pending-Table text-pending-Text",
  "Under Process": "bg-underProcess-Table text-underProcess-Text",
};

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
