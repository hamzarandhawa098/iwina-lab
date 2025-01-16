<template>
    <div class="lg:w-[1104px] w-full">
      <div class="table-container">
        <Table class="mt-6 bg-white border border-border-color rounded-lg shadow w-[350px] lg:w-full">
          <template #header>
            <th>Audit Date</th>
            <th>Recommendation Notes</th>
            <th>Status</th>
            <th>Action</th>
          </template>
  
          <template #rows>
            <tr v-for="row in tableData" :key="row.id">
              <td>{{ row.date }}</td>
              <td class="lg:w-[476px] w-full">{{ row.recommendations }}</td>
              <td>
                <router-link
                  :to="{ name: 'ComplianceReporting', params: { id: row.id } }"
                ><CustomButton
                  :color-classes="getStatusClass(row.status)"
                  :dot-classes="getStatusDotClass(row.status)"
                  :show-dot="true"
                >
                  {{ row.status }}
                </CustomButton>
              </router-link>
              </td>
              <td>
                <div class="flex gap-3">
                  <Button
                    text="Generate Report"
                    backgroundColor="bg-white"
                    textColor="text-primary-color"
                    custom-classes="px-[14px] py-2 border border-primary-color"
                    @click="openGeneratePopup"
                  />
                  <Button
                    text="Download Report"
                    backgroundColor="bg-primary-color"
                    textColor="text-bold-color"
                    custom-classes="px-[14px] py-2"
                    @click="openDownloadPopup({
                      entityName: 'JD Farm',
                      entityType: 'Farm',
                      dateFrom: row.date,
                      dateTo: '2024-10-18',
                      summary: 'The audit assessed the farm’s compliance, record-keeping, and sustainability practices. Key findings indicate the need for improved documentation, equipment maintenance, and employee training. Recommendations include enhancing compliance checks and adopting sustainable practices to boost overall performance.',
                    })"
                  />
                </div>
              </td>
            </tr>
          </template>
        </Table>
      </div>
  
      <div class="lg:flex hidden items-center justify-between mt-6 bg-white border border-border-color rounded-lg shadow py-4 px-[14px]">
        <div class="flex space-x-2">
          <ArrowLeft />
          <button class="font-nunito font-mediumSemiBold text-[14px] leading-[20px] tracking-[-0.02px] text-paragraph-color">
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
          <button class="font-nunito font-mediumSemiBold text-[14px] leading-[20px] tracking-[-0.02px] text-paragraph-color">
            Next
          </button>
          <ArrowRight />
        </div>
      </div>
  
      <GenerateReportPopup :isOpen="isGeneratePopupOpen" @close="closeGeneratePopup" @generate="handleGenerateReport" />
      <ReportPopup :isOpen="isDownloadPopupOpen" :reportData="selectedReportData" @close="closeDownloadPopup" />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Table from "@/components/global/Table.vue";
  import ArrowLeft from "@/components/icons/ArrowLeft.vue";
  import ArrowRight from "@/components/icons/ArrowRight.vue";
  import CustomButton from "@/components/global/CustomButton.vue";
  import Button from "@/components/global/Button.vue";
  import GenerateReportPopup from "@/components/global/GenerateReportPopup.vue";
  import ReportPopup from "@/components/global/ReportPopup.vue";
  
  const tableData = [
    { id: 1, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-09-15", status: "Compliant" },
    { id: 2, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-11-12", status: "Non-Compliant" },
    { id: 3, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-03-15", status: "Pending" },
    { id: 4, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-09-15", status: "Compliant" },
    { id: 5, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-11-12", status: "Non-Compliant" },
    { id: 6, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-03-15", status: "Pending" },
    { id: 7, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-09-15", status: "Compliant" },
    { id: 8, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-11-12", status: "Non-Compliant" },
    { id: 9, recommendations: "Ensure compliance, maintain records, adopt sustainability...", date: "2024-03-15", status: "Pending" },
  ];
  
  const currentPage = ref(1);
  const totalPages = 10;
  
  const isGeneratePopupOpen = ref(false);
  const isDownloadPopupOpen = ref(false);
  const selectedReportData = ref({});
  
  const openGeneratePopup = () => {
    isGeneratePopupOpen.value = true;
  };
  
  const closeGeneratePopup = () => {
    isGeneratePopupOpen.value = false;
  };
  
  const handleGenerateReport = (formData) => {
    console.log("Generated Report Data:", formData);
    closeGeneratePopup();
  };
  
  const openDownloadPopup = (reportData) => {
    selectedReportData.value = reportData;
    isDownloadPopupOpen.value = true;
  };
  
  const closeDownloadPopup = () => {
    isDownloadPopupOpen.value = false;
  };
  
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
  
  const goToPage = (page) => {
    currentPage.value = page;
  };
  </script>
  
  <style scoped>
  </style>
  