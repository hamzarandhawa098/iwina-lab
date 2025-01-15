<template>
  <div class="bg-white border mt-6 border-border-color shadow rounded-[12px]">
    <div
      class="flex flex-col lg:flex-row justify-between items-center px-5 pt-[27px]"
    >
      <h2 class="text-[20px] font-nunito font-bold leading-7 text-title-color">
        Buyers
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
            @click="selectOption(option.label)"
          >
            {{ option.label }}
          </li>
        </ul>
      </div>
    </div>
    <Maps
      tableTitle="<span class='font-semibold text-[36px] leading-[44px] tracking-[-2%] text-title-color'>$100.8k</span>  <span class='font-medium text-[24px] leading-[44px] tracking-[-2%] text-Map-semi-color'>Export</span>"
      :points="points"
      :details="details"
      :options="options"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Maps from "@/components/global/Maps.vue";
import USAflagIcon from "@/components/icons/USAflagIcon.vue";
import UKflagIcon from "@/components/icons/UKflagIcon.vue";
import IndianflagIcon from "@/components/icons/IndiaFlagIcon.vue";
import AustrailiaflagIcon from "@/components/icons/AustrailiaflagIcon.vue";
import CanadaflagIcon from "@/components/icons/CanadaflagIcon.vue";

const points = ref([
  {
    id: 1,
    name: "Ali & Sons Foods",
    website: "Alisonsfood.com",
    top: "30%",
    left: "40%",
  },
  {
    id: 2,
    name: "Ali & Sons Foods",
    website: "Alisonsfood.com",
    top: "50%",
    left: "70%",
  },
]);

const details = ref([
  {
    name: "Ali & Sons Foods",
    website: "Alisonsfood.com",
    country: "USA",
    flag: USAflagIcon,
  },
  {
    name: "Ali & Sons Foods",
    website: "Alisonsfood.com",
    country: "India",
    flag: IndianflagIcon,
  },
  {
    name: "Ali & Sons Foods",
    website: "Alisonsfood.com",
    country: "UK",
    flag: UKflagIcon,
  },
  {
    name: "Ali & Sons Foods",
    website: "Alisonsfood.com",
    country: "Austrailia",
    flag: AustrailiaflagIcon,
  },
  {
    name: "Ali & Sons Foods",
    website: "Alisonsfood.com",
    country: "Canada",
    flag: CanadaflagIcon,
  },
]);

const options = [
  { value: "monthly", label: "Monthly" },
  { value: "weekly", label: "Weekly" },
  { value: "daily", label: "Daily" },
];

const isDropdownOpen = ref(false);
const dropdownLabel = ref("Monthly");

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function selectOption(label) {
  dropdownLabel.value = label;
  isDropdownOpen.value = false;
}
</script>
