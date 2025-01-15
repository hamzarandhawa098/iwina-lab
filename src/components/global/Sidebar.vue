<template>
  <div
    class="w-[272px] mt-8 h-screen font-nunito bg-white flex flex-col justify-between shadow-lg px-4"
  >
    <div>
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
      </div>
      <div class="mt-6 space-y-2">
        <div
          v-for="(item, index) in menuItems"
          :key="item.name"
          @click="selectMenuItem(index)"
          :class="[
            'flex items-center px-3 text-base leading-[22px] tracking-[-0.18px] py-[8px] cursor-pointer rounded-[6px]',
            item.active
              ? 'bg-primary-color svg-active font-bold text-bold-color'
              : 'font-mediumBold text-light-color',
          ]"
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
        :class="[
          'flex items-center px-3 text-base leading-[22px] tracking-[-0.18px] py-[8px] cursor-pointer rounded-lg',
          item.active
            ? 'bg-primary-color svg-active font-bold text-bold-color'
            : 'font-mediumBold text-light-color',
        ]"
      >
        <router-link :to="item.link" class="flex w-full items-center">
          <div>
            <component :is="item.icon" />
          </div>
          <span class="ml-4">{{ item.label }}</span>
          <span
            v-if="item.notificationCount"
            :class="[
              'ml-auto flex items-center justify-center px-2 py-1 text-white text-xs rounded-full',
              item.active
                ? 'bg-black text-primary-color'
                : 'bg-notification-color text-white',
            ]"
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
          <p
            class="font-inter font-normal text-[14px] leading-5 text-light-color"
          >
            {{ profileMail }}
          </p>
        </div>
        <div class="ml-auto">
          <LogoutIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

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
</script>

<style scoped></style>
