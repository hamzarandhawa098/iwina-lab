<template>
  <PageHeader linkText="Trainers" currentPageText="Trainer Detail" slash="/" />
  <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-8">
    <PageTitle title="Training Module Detail" />
    <div>
      <router-link to="#">
        <Button
          text="Edit"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3"
        />
      </router-link>
    </div>
  </div>
  <div
    class="lg:w-[1103px] w-full bg-white border border-border-color rounded-lg shadow mt-6 p-5"
  >
    <TrainerProfile
      instructorName="Mr. David"
      title="Web Designer & Best-Selling Instructor"
      :image="InstructoreImg"
      :stats="stats"
    />
  <div class="flex flex-col lg:flex-row gap-6">
    <TrainerDescription class="mt-[22px]" title="About Me" 
    description="One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his
      case, and quit his job, or more like got himself fired from his own
      startup. <span><br><br></span>He decided to work on his dream: be his own boss, travel the
      world, only do the work he enjoyed, and make a lot more money in the
      process. No more begging for vacation days and living from paycheck to
      paycheck. After trying everything from e-commerce stores to professional
      poker his lucky break came when he started freelance design. Vako fell in
      love with the field that gives him the lifestyle of his dreams. <span><br><br></span>Vako
      realizes that people who take courses on Udemy want to transform their
      lives. Today with his courses and mentoring Vako is helping thousands of
      people transform their lives, just like he did once."
    />
    <TrainerCourses />
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import TrainerProfile from "@/components/TrainerProfileView/TrainerProfile.vue";
import InstructoreImg from "@/assets/images/InstructorImages.png";
import TrainerCoursesIcon from "@/components/icons/TrainerCoursesIcon.vue";
import TrainerStarIcon from "@/components/icons/TrainerStarIcon.vue";
import StudentsIcon from "@/components/icons/StudentsIcon.vue";
import TrainerDescription from "@/components/TrainerProfileView/TrainerDescription.vue";
import TrainerCourses from "@/components/TrainingResources/TrainerCourses.vue";

const stats = ref([
  {
    icon: TrainerStarIcon,
    value: "4.8",
    label: "(134,633 reviews)",
  },
  {
    icon: StudentsIcon,
    value: "430,117",
    label: "students",
  },
  {
    icon: TrainerCoursesIcon,
    value: "7",
    label: "courses",
  },
]);
</script>
