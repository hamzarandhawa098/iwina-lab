<template>
  <div class="p-6 bg-white border border-border-color rounded-lg shadow">
    <div>
      <h1 class="text-[20px]  text-center lg:text-left font-nunito font-bold leading-7 text-title-color">
        {{ title }}
      </h1>
    </div>
    <div>
      <Table class="lg:w-[1063px] w-[350px] mt-[18px]">
        <template #header>
          <th
            v-for="(header, index) in tableHeaders"
            :key="index"
            class="self-stretch font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-paragraph-color"
          >
            {{ header }}
          </th>
        </template>

        <template #rows>
          <tr v-for="(row, index) in tableData" :key="index">
            <td
              class="flex header items-center space-x-[6px] text-table-content"
            >
              <img
                :src="row.image"
                alt="Supplier Image"
                class="w-10 h-10 rounded-full"
              />
              <router-link
                :to="{ name: 'supplierprofile', params: { id: index } }"
              >
                {{ row.name }}
              </router-link>
            </td>
            <td>
              <span class="text-table-content">{{ row.product }}</span>
            </td>
            <td class="flex items-center space-x-1 text-table-content">
              <ProductRatingStarIcon />
              <span>{{ row.rating }}</span>
            </td>
            <td>
              <div class="flex space-x-2 lg:space-x-6 items-center justify-end">
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
import { ref } from "vue";
import EditIcon from "@/components/icons/EditMarketplaceIcon.vue";
import DeleteIcon from "@/components/icons/DeleteMarketplaceIcon.vue";
import ViewIcon from "@/components/icons/ViewIcon.vue";
import ArrowLeft from "@/components/icons/ArrowLeft.vue";
import ArrowRight from "@/components/icons/ArrowRight.vue";
import AvatarTrainer from "@/assets/images/AvatarTrainer.png";
import Avatar from "@/assets/images/Avatar.png";
import TrainerImg from "@/assets/images/TrainerImg.png";
import ProductRatingStarIcon from "@/components/icons/ProductRatingStarIcon.vue";

defineProps({
  title: String,
});

const currentPage = ref(1);
const totalPages = 10;

const goToPage = (page) => {
  currentPage.value = page;
};

const tableHeaders = ref(["Name", "Products", "Rating", "Action"]);

const tableData = ref([
  {
    name: "James Wilson",
    image: AvatarTrainer,
    product: "200",
    rating: "3.5",
  },
  {
    name: "Sophia Johnson",
    image: Avatar,
    product: "150",
    rating: "4.0",
  },
  {
    name: "Ethan Brown",
    image: TrainerImg,
    product: "180",
    rating: "4.2",
  },
  {
    name: "Olivia Smith",
    image: AvatarTrainer,
    product: "210",
    rating: "3.9",
  },
  {
    name: "Michael Lee",
    image: Avatar,
    product: "130",
    rating: "4.5",
  },
  {
    name: "Emma Garcia",
    image: TrainerImg,
    product: "220",
    rating: "4.1",
  },
  {
    name: "William Martinez",
    image: AvatarTrainer,
    product: "140",
    rating: "3.8",
  },
  {
    name: "Ava Davis",
    image: Avatar,
    product: "250",
    rating: "4.6",
  },
  {
    name: "Jacob Gonzalez",
    image: TrainerImg,
    product: "160",
    rating: "3.7",
  },
  {
    name: "Mia Hernandez",
    image: AvatarTrainer,
    product: "190",
    rating: "4.3",
  },
  {
    name: "Alexander Lopez",
    image: Avatar,
    product: "240",
    rating: "3.6",
  },
  {
    name: "Isabella Clark",
    image: TrainerImg,
    product: "170",
    rating: "4.4",
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
th:nth-child(4) {
  text-align: right;
  padding-right: 47px;
}
</style>
