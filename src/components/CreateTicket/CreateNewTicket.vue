<template>
  <div
    class="w-full mt-6 text-center bg-white px-6 py-5 border border-border-color rounded-lg shadow"
  >
    <h2
      class="font-inter font-semibold text-[30px] leading-[38px] text-title-color"
    >
      {{ formTitle }}
    </h2>
    <p
      class="font-inter font-normal text-[16px] leading-[24px] text-paragraph-color mt-5"
    >
      {{ formSubtitle }}
    </p>

    <form @submit.prevent="createTicket" class="mt-[22px]">
      <div class="h-[654px]">
        <div class="flex flex-col lg:flex-row gap-8">
          <GenericInput
            id="subject"
            v-model="form.subject"
            type="text"
            customClasses="lg:w-[515px] px-3 py-[10px]"
            :placeholder="subjectPlaceholder"
          />

          <select
            id="type"
            v-model="form.type"
            class="lg:w-[515px] px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
          >
            <option
              v-for="option in typeOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </div>

        <div class="mt-6">
          <textarea
            id="description"
            v-model="form.description"
            rows="6"
            class="lg:w-[1063px] w-full px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
            :placeholder="descriptionPlaceholder"
          ></textarea>
        </div>

        <div class="mt-6">
          <div
            class="flex flex-col items-center justify-center px-6 py-4 border border-border-color rounded-lg cursor-pointer"
            @click="triggerFileInput"
          >
            <input
              ref="fileInput"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handleFileUpload"
            />
            <UploadImgIcon />
            <p class="text-sm font-inter font-normal text-paragraph-color mt-3">
              <span
                class="text-training-button font-semibold text-[14px] leading-[20px]"
                >{{ uploadLabel }}</span
              >
              {{ uploadInstruction }}<br />
              <span class="text-xs">{{ uploadHint }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-end space-x-4 mt-[22px]">
        <Button
          type="button"
          :text="cancelButtonText"
          backgroundColor="bg-Ticket-cancel"
          textColor="text-bold-color"
          custom-classes="px-[74px] py-3"
          @click="cancel"
        />

        <Button
          :text="submitButtonText"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-[48.5px] py-3"
          type="submit"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UploadImgIcon from "@/components/icons/UploadImgIcon.vue";
import Button from "@/components/global/Button.vue";
import GenericInput from "@/components/global/GenericInput.vue";
defineProps({
  formTitle: String,
  formSubtitle: String,
  subjectPlaceholder: String,
  descriptionPlaceholder: String,
  uploadLabel: String,
  uploadInstruction: String,
  uploadHint: String,
  cancelButtonText: String,
  submitButtonText: String,
  typeOptions: Array,
});

const form = ref({
  subject: "",
  type: "",
  description: "",
  file: null,
});

const fileInput = ref(null);

const createTicket = () => {
  console.log("Form Data:", form.value);
  alert("Ticket created successfully!");
};

const cancel = () => {
  form.value = { subject: "", type: "", description: "", file: null };
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.file = file;
    console.log("File selected:", file);
  }
};

const triggerFileInput = () => {
  fileInput.value.click();
};
</script>

<style></style>
