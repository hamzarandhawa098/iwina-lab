<template>
  <div class="bg-white border mt-6 border-border-color shadow rounded-[12px]"
  style="z-index: -10;">
    <div
      class="flex flex-col lg:flex-row justify-between items-center px-5 pt-[27px] max-w-[840px] w-full"
    >
      <h2 class="text-[20px] font-nunito font-bold leading-7 text-title-color">
        {{ IncidentGraphTitle }}
      </h2>
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
    <div>
      <IncidentBarchart :series="series" :chartOptions="chartOptions" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import IncidentBarchart from "@/components/global/IncidentBarchart.vue";

const props = defineProps({
  IncidentGraphTitle: String,
  incidentData: Object, 
  incidentChartOptions: Object, 
});

const timeframe = ref("monthly");
const isDropdownOpen = ref(false);

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

const dropdownLabel = ref(
  options.find((o) => o.value === timeframe.value).label
);

const series = ref(props.incidentData?.[timeframe.value] || []);
const chartOptions = ref(props.incidentChartOptions);

watch(
  () => timeframe.value,
  (newTimeframe) => {
    series.value = props.incidentData?.[newTimeframe] || [];
  }
);

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectOption(value) {
  timeframe.value = value;
  dropdownLabel.value = options.find((o) => o.value === value).label;
  isDropdownOpen.value = false;
}
</script>
