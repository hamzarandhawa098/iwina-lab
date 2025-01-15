<template>
  <PageHeader
    linkText="Training Resources"
    currentPageText="Training Module Details"
    slash="/"
  />
  <div class="flex justify-between items-start mt-8">
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
    class="px-6 py-5 mt-4 w-[1103px] bg-white border border-border-color rounded-lg shadow"
  >
    <TrainingModuleTitle
      :icon="StarIcon"
      :TrainerImg="AvatarTrainer"
      ModuleTitle="Quality Checking"
      TrainerName="Mr. David"
      Rating="4.8"
      TotalReviews="1812"
    />
    <TrainingModuleVideo
      class="mt-[22px]"
      :video="video"
      :videoDetails="videoDetails"
    />
    <div class="flex justify-center mt-6 space-x-6">
      <div class="max-w-[690px] w-full space-y-4">
        <TrainingModuleDescription
          descriptionButton="Description"
          moduleButton="Module"
          title="About Course"
          description="A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing. A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing."
        />
        <Reviews 
        :reviews="reviews"
        reviewsTitle="Reviews"
        />
      </div>
      <div>
        <WebinarAd
          :bgImage="Webinar"
          title="Webinar"
          speaker="Ana Kursova"
          description="Masterclass in Quality Checking, and Best way to Farm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import TrainingModuleTitle from "@/components/TrainingModuleDetails/TrainingModuleTitle.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import AvatarTrainer from "@/assets/images/AvatarTrainer.png";
import TrainingModuleVideo from "@/components/TrainingModuleDetails/TrainingModuleVideo.vue";
import LectureIcon from "@/components/icons/LectureIcon.vue";
import VideoLengthIcon from "@/components/icons/VideoLengthIcon.vue";
import VolumeIcon from "@/components/icons/VolumeIcon.vue";
import SectionIcon from "@/components/icons/SectionIcon.vue";
import video from "@/assets/images/video.mp4";
import TrainingModuleDescription from "@/components/TrainingModuleDetails/TrainingModuleDescription.vue";
import WebinarAd from "@/components/TrainingModuleDetails/WebinarAd.vue";
import Reviews from "@/components/TrainingModuleDetails/Reviews.vue";
import Webinar from "@/assets/images/Webinar.png";
import Review1 from "@/assets/images/Review1.png";
import Review2 from "@/assets/images/Review2.png";
import Review3 from "@/assets/images/Review3.png";
import Review4 from "@/assets/images/Review4.png";

const videoDetails = ref([
  { icon: SectionIcon, text: "22 Section" },
  { icon: LectureIcon, text: "152 Lectures" },
  { icon: VideoLengthIcon, text: "21h 33m total lengths" },
  { icon: VolumeIcon, text: "English" },
]);


const reviews = ref([
  {
    name: "Leonardo Da Vinci",
    date: "Today",
    content:
      "Loved the course. I've learned some very subtle techniques, especially on leaves.",
    avatar: Review1,
  },
  {
    name: "Titania S",
    date: "Today",
    content:
      "I loved the course, it had been a long time since I had experimented with watercolors and now I will do it more often thanks to Kitani Studio.",
    avatar: Review2,
  },
  {
    name: "Zhirkov",
    date: "Today",
    content:
      "Yes. I just emphasize that the use of Photoshop, for non-users, becomes difficult to follow. What requires a course to master it. Safe and very didactic teacher.",
    avatar: Review3,
  },
  {
    name: "Miphoska",
    date: "Today",
    content:
      "I haven't finished the course yet, as I would like to have some feedback from the teacher, about the comments I shared on the forum 3 months ago, and I still haven't had any answer. I think the course is well structured, however the explanations and videos are very quick for beginners. However, it is good to go practicing.",
    avatar: Review4,
  },
]);

</script>
