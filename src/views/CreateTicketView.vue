<template>
  <PageHeader linkText="Support" currentPageText="Create Ticket" slash="/" />
  <CreateNewTicket
    :formTitle="formTitle"
    :formSubtitle="formSubtitle"
    :subjectPlaceholder="subjectPlaceholder"
    :descriptionPlaceholder="descriptionPlaceholder"
    :uploadLabel="uploadLabel"
    :uploadInstruction="uploadInstruction"
    :uploadHint="uploadHint"
    :cancelButtonText="cancelButtonText"
    :submitButtonText="submitButtonText"
    :typeOptions="typeOptions"
  />
</template>
<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import CreateNewTicket from "@/components/CreateTicket/CreateNewTicket.vue";

const formTitle = ref("Create new ticket");
const formSubtitle = ref("Please answer the following as accurately as possible.");
const subjectPlaceholder = ref("Subject");
const descriptionPlaceholder = ref("Description");
const uploadLabel = ref("Click to upload");
const uploadInstruction = ref("or drag and drop");
const uploadHint = ref("(SVG, PNG, JPG, or GIF - max. 800x400px)");
const cancelButtonText = ref("Cancel");
const submitButtonText = ref("Create Ticket");

const typeOptions = ref([
  { value: "", label: "Select type" },
  { value: "bug", label: "Bug" },
  { value: "feature", label: "Feature Request" },
  { value: "support", label: "Support" },
]);
</script>
