<template>
    <div class="p-6 bg-white border border-border-color rounded-lg shadow">
      <div>
        <h1 class="text-[20px] text-center lg:text-left font-nunito font-bold leading-7 text-title-color">
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
              <td class="flex header items-center space-x-[6px] text-table-content">
                <img
                  :src="row.image"
                  alt="Supplier Image"
                  class="w-10 h-10 rounded-full"
                />
                <span>{{ row.name }}</span>
              </td>
              <td>
                <select
                  v-model="row.role"
                  class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder px-3 py-[10px] w-full border border-Ticket-input rounded-[8px]"
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </td>
              <td>
                <input
                  v-model="row.permission"
                  class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder px-3 py-[10px] w-full border border-Ticket-input rounded-[8px]"
                  placeholder="Enter Permissions"
                />
              </td>
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
  
    </div>
  </template>
  
  <script setup>
  import Table from "@/components/global/Table.vue";
  import { ref } from "vue";
  import EditIcon from "@/components/icons/EditMarketplaceIcon.vue";
  import DeleteIcon from "@/components/icons/DeleteMarketplaceIcon.vue";
  import ViewIcon from "@/components/icons/ViewIcon.vue";
  import AvatarTrainer from "@/assets/images/AvatarTrainer.png";
  import Avatar from "@/assets/images/Avatar.png";
  import CustomButton from "@/components/global/CustomButton.vue";
  
  defineProps({
    title: String,
  });
  
  const currentPage = ref(1);
  const totalPages = 10;
  
  const goToPage = (page) => {
    currentPage.value = page;
  };
  
  const tableHeaders = ref(["Name", "Role", "Permissions", "Status", "Action"]);
  
  const tableData = ref([
    {
      name: "James Wilson",
      image: AvatarTrainer,
      role: "Admin",
      status: "Active",
      permission: "Enter Permissions",
    },
    {
      name: "Sophia Johnson",
      image: Avatar,
      role: "Editor",
      status: "Inactive",
      permission: "Enter Permissions",
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
  
  const getStatusClass = (status) => {
    const statusClasses = {
      Active: "bg-completed-Table text-completed-Text",
      Inactive: "bg-closed-bg text-closed-text",
    };
    return statusClasses[status] || "bg-gray-100 text-gray-500";
  };
  
  const getStatusDotClass = (status) => {
    const dotClasses = {
      Active: "bg-completed-Text",
      Inactive: "bg-closed-text",
    };
    return dotClasses[status] || "bg-gray-300";
  };
  </script>
  
  <style scoped>
  th:nth-child(5) {
    text-align: right;
    padding-right: 47px;
  }
  </style>
  