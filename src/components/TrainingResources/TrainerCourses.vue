<template>
  <div class="px-4 py-6">
    <div class="flex border-b border-gray-200">
      <button
        class="px-4 py-5 font-semibold font-nunito text-trainer-profile-title  text-[18px] leading-[22px]"
        :class="{ 'border-primary-color text-primary-color  border-b-2': activeTab === 'courses' }"
        @click="activeTab = 'courses'"
      >
        Courses
      </button>
      <button
        class="px-4 py-5 font-semibold font-nunito text-trainer-profile-title  text-[18px] leading-[22px]"
        :class="{ 'border-primary-color text-primary-color  border-b-2': activeTab === 'review' }"
        @click="activeTab = 'review'"
      >
        Review
      </button>
    </div>

    <div v-if="activeTab === 'courses'" class="mt-10 p-5">
      <h2 class="font-nunito font-bold text-[20px] leading-7 tracking-[-2%] text-trainer-profile-title">
        My Courses ({{ courses.length }})
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
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
    </div>
    <div v-else class="mt-6">
      <p class="text-gray-600">Review section coming soon!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TrainingCard from "@/components/global/TrainingCard.vue";
import ExportImg from "@/assets/images/ExportImg.png";
import AvatarTrainer from "@/assets/images/AvatarTrainer.png";
import Farming from "@/assets/images/Farming.png";
import QualityCheck from "@/assets/images/QualityCheck.png";

const activeTab = ref("courses");

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
]);
</script>

<style scoped></style>
