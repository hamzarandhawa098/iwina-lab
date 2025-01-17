<template>
  <div>
    <div class="flex items-center w-screen justify-between px-4 py-2 bg-white shadow-lg lg:hidden"
    >
      <div class="flex items-center">
        <img :src="Logo" alt="Logo" class="w-[133px] h-8" />
      </div>
      <button @click="toggleSidebar" class="text-gray-600 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <div
      v-if="sidebarOpen"
      @click="closeSidebar"
      class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
    ></div>

    <div
      :class="[ 
        'w-[272px] h-screen font-nunito bg-white flex flex-col pt-8 pb-8 justify-between shadow-lg px-4 fixed top-0 left-0 transform transition-transform duration-300 z-50',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0 lg:static lg:flex',
      ]"
    >
      <div>
        <div class="flex items-center justify-center mb-4">
          <img :src="Logo" alt="Logo" class="w-[133px] h-8" />
        </div>
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="w-[231px] px-4 h-[44px] py-2 border rounded-lg focus:outline-none pl-[42px]"
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-[14px]">
            <SearchIcon />
          </div>
        </div>
        <div class="mt-6 space-y-2">
          <div
            v-for="(item, index) in menuItems"
            :key="item.name"
            @click="selectMenuItem(index)"
            :class="[...baseClass(item.active)]"
          >
            <router-link :to="item.link" class="flex w-full items-center">
              <div>
                <component :is="item.icon" />
              </div>
              <span class="ml-3">{{ item.label }}</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="mt-4 space-y-2">
        <div
          v-for="(item, index) in bottomNavItems"
          :key="item.name"
          @click="selectMenuItem(index + menuItems.length)"
          :class="[...baseClass(item.active)]"
        >
          <router-link :to="item.link" class="flex w-full items-center">
            <div>
              <component :is="item.icon" />
            </div>
            <span class="ml-4">{{ item.label }}</span>
            <span
              v-if="item.notificationCount"
              :class="[...notificationClass(item.active)]"
            >
              {{ item.notificationCount }}
            </span>
          </router-link>
        </div>

        <div class="flex items-center pt-[48px] border-t">
          <img :src="Avatar" alt="Profile" class="w-10 h-10 rounded-full" />
          <div class="ml-3">
            <p class="font-bold text-[14px] leading-5 tracking-[-0.05px]">
              {{ profileName }}
            </p>
            <p class="font-inter font-normal text-[14px] leading-5 text-light-color">
              {{ profileMail }}
            </p>
          </div>
          <div class="ml-auto">
            <LogoutIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import GenericInput from "@/components/global/GenericInput.vue";

const route = useRoute();
const sidebarOpen = ref(false);

const props = defineProps({
  Logo: String,
  Avatar: String,
  SearchIcon: String,
  LogoutIcon: String,
  menuItems: Array,
  bottomNavItems: Array,
  profileName: String,
  profileMail: String,
});

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
  document.body.style.overflow = sidebarOpen.value ? "hidden" : "auto";
};

const closeSidebar = () => {
  sidebarOpen.value = false;
  document.body.style.overflow = "auto";
};

const selectMenuItem = (index) => {
  [...props.menuItems, ...props.bottomNavItems].forEach((item, i) => {
    item.active = i === index;
  });
};

watch(
  () => route.path,
  (newPath) => {
    props.menuItems.forEach((item) => (item.active = item.link === newPath));
    props.bottomNavItems.forEach((item) => (item.active = item.link === newPath));
  }
);

onUnmounted(() => {
  document.body.style.overflow = "auto";
});

const baseClass = (isActive) => [
  "flex items-center px-3 text-base leading-[22px] tracking-[-0.18px] py-[8px] cursor-pointer rounded-[6px]",
  isActive ? "bg-primary-color svg-active font-bold text-bold-color" : "font-mediumBold text-light-color",
];

const notificationClass = (isActive) => [
  "ml-auto flex items-center justify-center px-2 py-1 text-white text-xs rounded-full",
  isActive ? "bg-black text-primary-color" : "bg-notification-color text-white",
];
</script>
