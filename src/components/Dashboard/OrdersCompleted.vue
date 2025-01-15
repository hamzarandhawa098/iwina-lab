<template>
    <div class="max-w-[729px] w-full bg-white border border-border-color shadow rounded-[12px]">
      <div class="flex justify-between items-center px-5 pt-5">
        <h2 class="text-[20px] font-nunito font-bold leading-7 text-title-color">{{ OrderCompletedTitle }}</h2>
        <div class="relative">
          <button
            class="appearance-none border border-light-color rounded-[8px] px-5 py-3 text-xs font-nunito font-normal leading-[18px] w-full text-left flex items-center justify-between"
            @click="toggleDropdown"
          >
            {{ dropdownLabel }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-400"
              :class="{ 'rotate-180': isDropdownOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            v-if="isDropdownOpen"
            class="absolute z-10 bg-white border border-light-color rounded-[8px] w-full mt-1 shadow"
          >
            <li
              v-for="option in options"
              :key="option.value"
              class="px-5 py-3 text-xs font-nunito font-normal leading-[18px] hover:bg-light-gray cursor-pointer"
              @click="selectOption(option.value)"
            >
              {{ option.label }}
            </li>
          </ul>
        </div>
      </div>
      <div class="w-[689px] mt-[18px]">
        <BarGraph :series="series" />
      </div>
    </div>
  </template>
<script setup>
import { ref } from "vue";
import BarGraph from "@/components/global/Bargraph.vue";
defineProps({
  OrderCompletedTitle : String
})

const timeframe = ref("monthly");
const isDropdownOpen = ref(false);

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

const dropdownLabel = ref(options.find((o) => o.value === timeframe.value).label);

const data = {
  monthly: [
    {
      name: "Inflation",
      data: [82, 55, 40, 90, 50, 70, 50, 30],
      color: ({ dataPointIndex }) => (dataPointIndex === 3 ? "#436ED0" : "#B3C9FB"),
    },
  ],
  weekly: [
    {
      name: "Inflation",
      data: [40, 60, 20, 80, 30, 50, 70],
      color: ({ dataPointIndex }) => (dataPointIndex === 2 ? "#436ED0" : "#B3C9FB"),
    },
  ],
  daily: [
    {
      name: "Inflation",
      data: [10, 20, 30, 40, 50, 60, 70],
      color: ({ dataPointIndex }) => (dataPointIndex === 5 ? "#436ED0" : "#B3C9FB"),
    },
  ],
};

const series = ref(data[timeframe.value]);

function updateSeries() {
  series.value = data[timeframe.value];
}

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectOption(value) {
  timeframe.value = value;
  dropdownLabel.value = options.find((o) => o.value === value).label;
  updateSeries();
  isDropdownOpen.value = false;
}
</script>
<style scoped>
.hover\:bg-light-gray:hover {
  background-color: #f4f4f4;
}

.rotate-180 {
  transform: rotate(180deg);
}

.border-light-color {
  border-color: #d1d5db;
}
</style>
  