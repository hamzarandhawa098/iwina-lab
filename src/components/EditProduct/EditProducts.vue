<template>
  <div
    class="px-6 py-5 w-full lg:w-[1111px] bg-white rounded-lg shadow-md border border-border-color h-[936px]"
  >
    <div>
      <h2
        class="font-inter font-semibold text-[30px] leading-[38px] text-title-color"
      >
        {{ formTitle }}
      </h2>
      <p
        class="font-inter font-normal text-[16px] leading-6 text-paragraph-color mt-5"
      >
        {{ formSubtitle }}
      </p>
    </div>
    <div class="mt-[22px]">
      <form @submit.prevent="saveChanges">
        <div class="mb-4">
          <div class="flex justify-between items-center">
            <label
              class="font-inter font-normal text-[16px] leading-6 text-paragraph-color"
              >Photo</label
            >
            <button @click="addPhoto">
              <AddProductIcon />
            </button>
          </div>
          <div class="flex flex-col lg:flex-row justify-center items-center gap-6 mt-3">
            <div v-for="(photo, index) in photos" :key="index" class="relative">
              <img
                :src="photo"
                class="w-[274px] h-[239px] object-cover rounded-[12px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="flex space-x-8">
            <select
              id="type"
              v-model="form.type"
              class="lg:w-[515px] px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
            >
              <option
                v-for="option in organisationOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
            <GenericInput
              id="subject"
              v-model="form.subject"
              type="text"
              customClasses="lg:w-[515px] px-3 py-[10px]"
              :placeholder="courseTitlePlaceholder"
            />
          </div>

          <div class="flex space-x-8 mt-6">
            <GenericInput
              id="subject"
              v-model="form.subject"
              type="text"
              customClasses="lg:w-[515px] px-3 py-[10px]"
              :placeholder="price"
            />

            <select
              id="trainer"
              v-model="form.trainer"
              class="lg:w-[515px] px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
            >
              <option
                v-for="option in trainerOptions"
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
              rows="12"
              class="lg:w-[1063px] w-full px-3 py-[10px] rounded-[8px] border border-Ticket-input font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] text-Ticket-placeholder"
              :placeholder="descriptionPlaceholder"
            ></textarea>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row justify-end gap-4 mt-[22px]">
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
  </div>
</template>
<script setup>
import { ref } from "vue";
import AddProductIcon from "@/components/icons/AddProductIcon.vue";
import Button from "@/components/global/Button.vue";
import GenericInput from "@/components/global/GenericInput.vue";

const props = defineProps({
  formTitle: {
    type: String,
    required: true,
  },
  formSubtitle: {
    type: String,
    required: true,
  },
  courseTitlePlaceholder: {
    type: String,
    required: true,
  },
  descriptionPlaceholder: {
    type: String,
    required: true,
  },
  cancelButtonText: {
    type: String,
    required: true,
  },
  submitButtonText: {
    type: String,
    required: true,
  },
  organisationOptions: {
    type: Array,
    required: true,
  },
  trainerOptions: {
    type: Array,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  photos: {
    type: Array,
    required: true,
  },
});

const addPhoto = () => {};

const saveChanges = () => {};

const form = ref({
  subject: "",
  type: "",
  lessons: "",
  trainer: "",
  description: "",
  file: null,
});

const cancel = () => {
  form.value = {
    subject: "",
    type: "",
    lessons: "",
    trainer: "",
    description: "",
    file: null,
  };
};
</script>
