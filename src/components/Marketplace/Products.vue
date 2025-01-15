<template>
  <div class="p-6 bg-white border border-border-color rounded-lg shadow">
    <div class="flex items-center justify-between">
      <h1 class="text-[20px] font-nunito font-bold leading-7 text-title-color">
        {{ title }}
      </h1>
      <router-link to="/product-listing">
        <Button
          text="View All Products"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
    <Table class="mt-[18px] w-[689px] h-[260px] overflow-hidden">
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
          <td class="flex items-center space-x-3 text-table-content">
            <img
              :src="row.image"
              alt="Product image"
              class="w-8 h-8 rounded-full"
            />
            <span class="text-table-content">{{ row.product }}</span>
          </td>
          <td class="text-table-content">{{ row.price }}</td>
          <td>
            <div class="flex items-center space-x-1">
              <span>
                <StarIcon />
              </span>
              <span class="text-table-content">{{ row.rating }}</span>
            </div>
          </td>
          <td>
            <CustomButton :color-classes="statusColors[row.status]">
              {{ row.status }}
            </CustomButton>
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
import CustomButton from "@/components/global/CustomButton.vue";
import InsectKiller from "@/assets/images/InsectKiller.png";
import HerbSpray from "@/assets/images/HerbSpray.png";
import OrganicSpray from "@/assets/images/OrganicSpray.png";
import { ref } from "vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import EditIcon from "@/components/icons/EditMarketplaceIcon.vue";
import DeleteIcon from "@/components/icons/DeleteMarketplaceIcon.vue";
import ViewIcon from "@/components/icons/ViewIcon.vue";
defineProps({
  title: String,
})

const tableHeaders = ref([
  "ID",
  "Product",
  "Price",
  "Rating",
  "Status",
  "Action",
]);

const tableData = ref([
  {
    id: 11,
    product: "Insect Killer",
    price: "$250",
    rating: 4,
    image: InsectKiller,
    status: "Completed",
  },
  {
    id: 12,
    product: "Herb Spray",
    price: "$500",
    rating: 5,
    image: HerbSpray,
    status: "Pending",
  },
  {
    id: 9,
    product: "Organic Spray",
    price: "$300",
    rating: 3,
    image: OrganicSpray,
    status: "Under Process",
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
