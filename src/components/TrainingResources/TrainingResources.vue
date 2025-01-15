<template>
  <div class="px-6 py-5 border border-border-color shadow rounded-lg">
    <div>
      <h1 class="font-nunito font-bold text-[20px] leading-[28px] text-title-color">
        {{ TrainingResourcesTitle }}
      </h1>
    </div>

    <div class="flex mt-[22px] space-x-4">
      <button
        @click="setActiveSection('learning')"
        :class="{
          'text-primary-color border-b-2 border-primary-color font-bold':
            activeSection === 'learning',
          'text-Map-title font-medium': activeSection !== 'learning',
        }"
        class="font-nunito text-[14px] leading-5 py-[10px]"
      >
        {{ LearningButton }}
      </button>

      <button
        @click="setActiveSection('trainers')"
        :class="{
          'text-primary-color border-b-2 border-primary-color font-bold':
            activeSection === 'trainers',
          'text-Map-title font-medium': activeSection !== 'trainers',
        }"
        class="font-nunito text-[14px] leading-5 py-[10px]"
      >
        {{ TrainersButton }}
      </button>
    </div>

    <section v-if="activeSection === 'learning'" id="learning">
      <div class="flex justify-end space-x-3 mt-[22px]">
        <router-link to="/trainig-resources/create-module">
          <Button
            text="Create New Module"
            backgroundColor="bg-notification-color"
            textColor="text-white"
            custom-classes="px-4 py-3 text-[18px] leading-[24px]"
          />
        </router-link>
        <Button
          text="Remove Module"
          backgroundColor="bg-white"
          textColor="text-primary-color"
          custom-classes="px-4 py-3 border border-primary-color text-[18px] leading-[24px]"
        />
        <Button
          text="Edit"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-[22px]"
      >
        <TrainingCard
          v-for="(course, index) in courses"
          :key="index"
          :image="course.image"
          :title="course.title"
          :lessons="course.lessons"
          :description="course.description"
          :instructor="course.instructor"
          :instructorAvatar="course.instructorAvatar"
        />
      </div>
    </section>

    <section v-if="activeSection === 'trainers'" id="trainers">
      <div class="flex justify-end space-x-3 mt-[22px]">
      <router-link to="/add-new-trainer">
        <Button
          text="Add Trainer"
          backgroundColor="bg-notification-color"
          textColor="text-white"
          custom-classes="px-4 py-3 text-[18px] leading-[24px]"
        />
      </router-link>
      </div>
      <TrainerTable 
      :TrainerImg="TarinerImg"
      :EditIcon="EditIcon"
      :DelIcon="DelIcon"
      :headers="headers"
      :trainers="trainers"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import TrainingCard from "@/components/global/TrainingCard.vue";
import Button from "@/components/global/Button.vue";
import ExportImg from "@/assets/images/ExportImg.png";
import AvatarTrainer from "@/assets/images/AvatarTrainer.png";
import Farming from "@/assets/images/Farming.png";
import QualityCheck from "@/assets/images/QualityCheck.png";
import TrainerTable from "@/components/TrainingResources/TrainerTable.vue";
import TarinerImg from "@/assets/images/TrainerImg.png";
import EditIcon from "@/components/icons/EditIcon.vue";
import DelIcon from "@/components/icons/DelIcon.vue";

defineProps({
  TrainingResourcesTitle: String,
  LearningButton: String,
  TrainersButton: String,
});

const route = useRoute();
const router = useRouter();

const activeSection = ref(route.query.tab || "learning");

const setActiveSection = (section) => {
  activeSection.value = section;
  router.replace({ query: { ...route.query, tab: section } });
};

watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab) activeSection.value = newTab;
  }
);

const courses = ref([
  {
    image: ExportImg,
    title: "How to Export",
    lessons: 12,
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing",
    instructor: "Mr. David",
    instructorAvatar: AvatarTrainer,
  },
  {
    image: QualityCheck,
    title: "Quality Checking",
    lessons: 6,
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing",
    instructor: "Mr. David",
    instructorAvatar: AvatarTrainer,
  },
  {
    image: Farming,
    title: "Best way to Farm",
    lessons: 10,
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing",
    instructor: "Mr. David",
    instructorAvatar: AvatarTrainer,
  },
  {
    image: ExportImg,
    title: "How to Export",
    lessons: 12,
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing",
    instructor: "Mr. David",
    instructorAvatar: AvatarTrainer,
  },
  {
    image: QualityCheck,
    title: "Quality Checking",
    lessons: 6,
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing",
    instructor: "Mr. David",
    instructorAvatar: AvatarTrainer,
  },
  {
    image: Farming,
    title: "Best way to Farm",
    lessons: 10,
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing",
    instructor: "Mr. David",
    instructorAvatar: AvatarTrainer,
  },
]);


const headers = ref([
  "Trainer Name",
  "Details",
  "Course Title",
  "Timing",
  "Duration",
  "Status",
  "Progress",
]);

const trainers = ref([
  {
    id: 1,
    profileImage: TarinerImg,
    trainerName: "Audrey Jones",
    details:
      "Hi, it's David. I'm a Professional UI UX Designing Trainer. Join my course and learn UI UX.",
    courseTitle: "UI UX",
    timing: "02:00 PM - 04:00 PM",
    duration: "3-Months",
    status: 90,
  },
  {
    id: 2,
    profileImage: TarinerImg,
    trainerName: "Audrey Jones",
    details:
      "Hi, it's David. I'm a Professional UI UX Designing Trainer. Join my course and learn UI UX.",
    courseTitle: "UI UX",
    timing: "02:00 PM - 04:00 PM",
    duration: "3-Months",
    status: 90,
  },
  {
    id: 3,
    profileImage: TarinerImg,
    trainerName: "Audrey Jones",
    details:
      "Hi, it's David. I'm a Professional UI UX Designing Trainer. Join my course and learn UI UX.",
    courseTitle: "UI UX",
    timing: "02:00 PM - 04:00 PM",
    duration: "3-Months",
    status: 90,
  },
  {
    id: 4,
    profileImage: TarinerImg,
    trainerName: "Audrey Jones",
    details:
      "Hi, it's David. I'm a Professional UI UX Designing Trainer. Join my course and learn UI UX.",
    courseTitle: "UI UX",
    timing: "02:00 PM - 04:00 PM",
    duration: "3-Months",
    status: 90,
  },{
    id: 5,
    profileImage: TarinerImg,
    trainerName: "Audrey Jones",
    details:
      "Hi, it's David. I'm a Professional UI UX Designing Trainer. Join my course and learn UI UX.",
    courseTitle: "UI UX",
    timing: "02:00 PM - 04:00 PM",
    duration: "3-Months",
    status: 90,
  },
  {
    id: 6,
    profileImage: TarinerImg,
    trainerName: "Audrey Jones",
    details:
      "Hi, it's David. I'm a Professional UI UX Designing Trainer. Join my course and learn UI UX.",
    courseTitle: "UI UX",
    timing: "02:00 PM - 04:00 PM",
    duration: "3-Months",
    status: 90,
  },
  {
    id: 7,
    profileImage: TarinerImg,
    trainerName: "Audrey Jones",
    details:
      "Hi, it's David. I'm a Professional UI UX Designing Trainer. Join my course and learn UI UX.",
    courseTitle: "UI UX",
    timing: "02:00 PM - 04:00 PM",
    duration: "3-Months",
    status: 90,
  },
]);

</script>
