<template>
  <PageHeader
    linkText="Modules"
    currentPageText="Create New Module"
    slash="/"
  />
  <CreateNewModule
    :formTitle="formTitle"
    :formSubtitle="formSubtitle"
    :uploadLabel="uploadLabel"
    :uploadClickText="uploadClickText"
    :uploadHint="uploadHint"
    :courseTitlePlaceholder="courseTitlePlaceholder"
    :descriptionPlaceholder="descriptionPlaceholder"
    :cancelButtonText="cancelButtonText"
    :submitButtonText="submitButtonText"
    :organisationOptions="organisationOptions"
    :lessonOptions="lessonOptions"
    :trainerOptions="trainerOptions"
    :icon="UploadImgIcon"
  />
</template>
<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import CreateNewModule from "@/components/CreateModule/CreateNewModule.vue";
import UploadImgIcon from "@/components/icons/UploadImgIcon.vue";

const formTitle = ref("Create New Module");
const formSubtitle = ref("Please fill the form below.");
const uploadLabel = ref("Upload Cover");
const uploadClickText = ref("Click to upload");
const uploadHint = ref("(SVG, PNG, JPG, or GIF - max. 800x400px)");
const courseTitlePlaceholder = ref("Course Title");
const descriptionPlaceholder = ref("Description");
const cancelButtonText = ref("Cancel");
const submitButtonText = ref("Create Module");

const organisationOptions = ref([
  { value: "", label: "Select Organisation" },
  { value: "org1", label: "Organisation 1" },
  { value: "org2", label: "Organisation 2" },
]);

const lessonOptions = ref([
  { value: "", label: "Total Lessons" },
  { value: "5", label: "5 Lessons" },
  { value: "10", label: "10 Lessons" },
]);

const trainerOptions = ref([
  { value: "", label: "Select Trainer" },
  { value: "trainer1", label: "Trainer 1" },
  { value: "trainer2", label: "Trainer 2" },
]);
</script>
