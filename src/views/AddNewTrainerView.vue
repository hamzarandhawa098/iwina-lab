<template>
 <PageHeader
    linkText="Trainers"
    currentPageText="Add New Trainer"
    slash="/"
  />
  <AddNewTrainer
    :formTitle="formTitle"
    :formSubtitle="formSubtitle"
    :uploadLabel="uploadLabel"
    :uploadClickText="uploadClickText"
    :uploadHint="uploadHint"
    :courseTitlePlaceholder="courseTitlePlaceholder"
    :descriptionPlaceholder="descriptionPlaceholder"
    :cancelButtonText="cancelButtonText"
    :submitButtonText="submitButtonText"
    :lessonOptions="lessonOptions"
    :trainerOptions="trainerOptions"
    :icon="UploadImgIcon"
  />
  </template>
<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import AddNewTrainer from "@/components/AddNewTrainer/AddNewTrainer.vue";
import UploadImgIcon from "@/components/icons/UploadImgIcon.vue";

const formTitle = ref("Add New Trainer");
const formSubtitle = ref("Please fill the form below.");
const uploadLabel = ref("Upload Profile Image");
const uploadClickText = ref("Click to upload");
const uploadHint = ref("(SVG, PNG, JPG, or GIF - max. 800x400px)");
const courseTitlePlaceholder = ref("Course Title");
const descriptionPlaceholder = ref("Trainer's Bio...");
const cancelButtonText = ref("Cancel");
const submitButtonText = ref("Add Trainer");



const lessonOptions = ref([
  { value: "", label: "Timing Duration" },
  { value: "5", label: "5 Lessons" },
  { value: "10", label: "10 Lessons" },
]);

const trainerOptions = ref([
  { value: "", label: "Duration" },
  { value: "trainer1", label: "Trainer 1" },
  { value: "trainer2", label: "Trainer 2" },
]);


</script>