<template>
  <div class="flex">
    <Sidebar
      class="fixed pb-[32px] z-50 lg:z-0"
      :Logo="Logo"
      :Avatar="Avatar"
      :SearchIcon="SearchIcon"
      :LogoutIcon="LogoutIcon"
      :menuItems="menuItems"
      :bottomNavItems="bottomNavItems"
      :profileName="profileName"
      :profileMail="profileMail"
    />
    <div class="lg:ml-[272px] mx-auto md:px-8 pb-12 mt-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "@/components/global/Sidebar.vue";
import Logo from "@/assets/images/Logo.png";
import Avatar from "@/assets/images/Avatar.png";
import DashboardIcon from "@/components/icons/DashboardIcon.vue";
import ComplianceToolsIcon from "@/components/icons/ComplianceToolsIcon.vue";
import MarketPlaceIcon from "@/components/icons/MarketPlaceIcon.vue";
import TrainingResourcesIcon from "@/components/icons/TrainingResourcesIcon.vue";
import NotificationIcon from "@/components/icons/NotificationIcon.vue";
import SupportIcon from "@/components/icons/SupportIcon.vue";
import SettingsIcon from "@/components/icons/SettingsIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import LogoutIcon from "@/components/icons/LogoutIcon.vue";

const menuItems = ref([
  {
    name: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    name: "complianceTools",
    label: "Compliance Tools",
    icon: ComplianceToolsIcon,
    link: "/compliance-tools",
  },
  {
    name: "trainingResources",
    label: "Training Resources",
    icon: TrainingResourcesIcon,
    link: "/training-resources",
  },
  {
    name: "marketplace",
    label: "Marketplace",
    icon: MarketPlaceIcon,
    link: "/marketplace",
  },
]);

const bottomNavItems = ref([
  {
    name: "notifications",
    label: "Notification",
    icon: NotificationIcon,
    link: "/notification",
    notificationCount: 10,
  },
  {
    name: "support",
    label: "Support",
    icon: SupportIcon,
    link: "/support",
  },
  {
    name: "settings",
    label: "Settings",
    icon: SettingsIcon,
    link: "/settings",
  },
]);

const profileName = ref("Arslan Zubair");
const profileMail = ref("arslan@example.com");
</script>

<style scoped></style>
