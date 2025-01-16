<template>
  <PageHeader
    linkText="Products"
    currentPageText="Add New Product"
    slash="/"
  />
  <AddNewProduct
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
    :price="price"
  />
</template>
<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import AddNewProduct from "@/components/AddNewProduct/AddNewProduct.vue";

import UploadImgIcon from "@/components/icons/UploadImgIcon.vue";

const formTitle = ref("Add New Product");
const formSubtitle = ref("Please fill the form below.");
const uploadLabel = ref("Upload Photo");
const uploadClickText = ref("Click to upload");
const uploadHint = ref("(SVG, PNG, JPG, or GIF - max. 800x400px)");
const courseTitlePlaceholder = ref("Product Name");
const descriptionPlaceholder = ref("Product Description");
const cancelButtonText = ref("Cancel");
const submitButtonText = ref("Upload Now");
const price = ref("Price")


const lessonOptions = ref([
  { value: "", label: "Select Product ID" },
  { value: "5", label: "5 Lessons" },
  { value: "10", label: "10 Lessons" },
]);

const trainerOptions = ref([
  { value: "", label: "Select Category" },
  { value: "trainer1", label: "Trainer 1" },
  { value: "trainer2", label: "Trainer 2" },
]);


</script>
