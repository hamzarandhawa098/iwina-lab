<template>
  <div class="flex flex-col py-[92px] items-center justify-center">
    <div class="w-full max-w-[600px] bg-white">
      <div class="text-center mb-6">
        <img
          :src="logoLarge"
          :alt="logoAltText"
          class="mx-auto w-[265px] h-[64px] mb-4"
        />
        <div class="mt-8">
          <h1
            class="font-nunito font-mediumSemiBold text-[36px] leading-[44px] tracking-[-3%] text-title-color"
          >
            {{ heading }}
          </h1>
        </div>
      </div>
      <form @submit.prevent="submitForm" class="mt-8 px-3 lg:px-0">
        <div
          class="font-nunito text-center lg:text-left font-normal text-[24px] leading-[32px] tracking-[-3%] text-title-color"
        >
          {{ registrationText }}
        </div>
        <div class="space-y-6 mt-6">
          <div>
            <GenericInput
              type="text"
              id="username"
              v-model="form.username"
              :placeholder="placeholders.username"
            />
            <p v-if="errors.username" class="text-red-500 text-sm mt-2">
              {{ errors.username }}
            </p>
          </div>

          <div>
            <GenericInput
              type="email"
              id="email"
              v-model="form.email"
              :placeholder="placeholders.email"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-2">
              {{ errors.email }}
            </p>
          </div>

          <div class="relative">
            <GenericInput
              :type="passwordVisible ? 'text' : 'password'"
              id="password"
              v-model="form.password"
              :placeholder="placeholders.password"
            />
            <button
              type="button"
              @click="togglePasswordVisibility"
              class="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <TogglePasswordIcon />
            </button>
            <p v-if="errors.password" class="text-red-500 text-sm mt-2">
              {{ errors.password }}
            </p>
          </div>

          <div class="relative">
            <GenericInput
              :type="repasswordVisible ? 'text' : 'password'"
              id="repassword"
              v-model="form.repassword"
              :placeholder="placeholders.repassword"
            />
            <button
              type="button"
              @click="toggleRePasswordVisibility"
              class="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <TogglePasswordIcon />
            </button>
            <p v-if="errors.repassword" class="text-red-500 text-sm mt-2">
              {{ errors.repassword }}
            </p>
          </div>

          <div class="mt-6">
            <p
              class="font-nunito text-[18px] font-normal leading-[24.55px] tracking-[-3%] text-title-color"
            >
              {{ regulatorText }}
            </p>
            <div
              class="grid grid-cols-2 lg:grid-cols-4 lg:flex items-center gap-4 mt-4"
            >
              <div
                v-for="(option, index) in regulatorOptions"
                :key="index"
                class="flex items-center space-x-[11px]"
              >
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="regulatorType"
                    :value="option.value"
                    v-model="form.regulatorType"
                    class="radio-button"
                  />
                  <span class="radio-custom ml-1"></span>
                </label>
                <p
                  class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder"
                >
                  {{ option.label }}
                </p>
              </div>
            </div>
            <p v-if="errors.regulatorType" class="text-red-500 text-sm mt-2">
              {{ errors.regulatorType }}
            </p>
          </div>

          <div class="mt-6">
            <p
              class="font-nunito text-[18px] font-normal leading-[24.55px] tracking-[-3%] text-title-color"
            >
              {{ roleText }}
            </p>
            <div
              class="grid grid-cols-2 lg:grid-cols-4 lg:flex items-center gap-4 mt-4"
            >
              <div
                v-for="(option, index) in roleOptions"
                :key="index"
                class="flex items-center gap-[11px]"
              >
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    :value="option.value"
                    v-model="form.role"
                    class="radio-button"
                  />
                  <span class="radio-custom ml-1"></span>
                </label>
                <p
                  class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder"
                >
                  {{ option.label }}
                </p>
              </div>
            </div>
            <p v-if="errors.role" class="text-red-500 text-sm mt-2">
              {{ errors.role }}
            </p>
          </div>

          <div class="mt-6">
            <p
              class="font-nunito text-[18px] font-normal leading-[24.55px] tracking-[-3%] text-title-color"
            >
              {{ agencyText }}
            </p>
            <div
              class="grid grid-cols-2 lg:grid-cols-4 lg:flex items-center gap-4 mt-4"
            >
              <div
                v-for="(option, index) in agencyOptions"
                :key="index"
                class="flex items-center gap-[11px]"
              >
                <label class="flex items-center">
                  <input
                    type="radio"
                    name="agencyType"
                    :value="option.value"
                    v-model="form.agencyType"
                    class="radio-button"
                  />
                  <span class="radio-custom ml-1"></span>
                </label>
                <p
                  class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder"
                >
                  {{ option.label }}
                </p>
              </div>
            </div>
            <p v-if="errors.agencyType" class="text-red-500 text-sm mt-2">
              {{ errors.agencyType }}
            </p>
          </div>

          <div class="mt-6">
            <Button
              :text="buttonText"
              backgroundColor="bg-primary-color"
              textColor="text-bold-color"
              custom-classes="w-full py-3"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import logoLarge from "@/assets/images/logoLarge.png";
import GenericInput from "@/components/global/GenericInput.vue";
import Button from "@/components/global/Button.vue";
import TogglePasswordIcon from "@/components/icons/TogglePasswordIcon.vue";

const router = useRouter();  


const logoAltText = "iwina lab";
const heading = "Regulator Registration";
const registrationText = "Registration";
const regulatorText = "Type of regulator.";
const roleText = "Role";
const agencyText = "Type of Agency";
const buttonText = "Registration";

const placeholders = {
  username: "Email/Username",
  email: "Email",
  password: "Password",
  repassword: "Reenter Password",
};

const passwordVisible = ref(false);
const repasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const toggleRePasswordVisibility = () => {
  repasswordVisible.value = !repasswordVisible.value;
};

const regulatorOptions = [
  { label: "Financial Regulators", value: "Financial Regulators" },
  {
    label: "Trade Compliance Regulators",
    value: "Trade Compliance Regulators",
  },
  { label: "Customs Authorities", value: "Customs Authorities" },
];

const roleOptions = [
  { label: "Compliance Officer", value: "Compliance Officer" },
  { label: "Data Analyst", value: "Data Analyst" },
  { label: "Administrator", value: "Administrator" },
  { label: "Inspector/Auditor", value: "Inspector/Auditor" },
];

const agencyOptions = [
  { label: "Regulatory Agency", value: "Regulatory Agency" },
  { label: "Health Regulatory", value: "Health Regulatory" },
  { label: "Environmental Regulatory", value: "Environmental Regulatory" },
];

const form = reactive({
  username: "",
  email: "",
  password: "",
  repassword: "",
  regulatorType: "",
  role: "",
  agencyType: "",
});

const errors = reactive({
  username: "",
  email: "",
  password: "",
  repassword: "",
  regulatorType: "",
  role: "",
  agencyType: "",
});

const validateForm = () => {
  let isValid = true;

  for (const key in errors) {
    errors[key] = "";
  }

  if (!form.username) {
    errors.username = "Username is required.";
    isValid = false;
  }

  if (!form.email) {
    errors.email = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Email must be valid.";
    isValid = false;
  }

  if (!form.password) {
    errors.password = "Password is required.";
    isValid = false;
  }

  if (form.password !== form.repassword) {
    errors.repassword = "Passwords do not match.";
    isValid = false;
  }

  if (!form.regulatorType) {
    errors.regulatorType = "Please select a regulator type.";
    isValid = false;
  }

  if (!form.role) {
    errors.role = "Please select a role.";
    isValid = false;
  }

  if (!form.agencyType) {
    errors.agencyType = "Please select an agency type.";
    isValid = false;
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    alert("Form submitted successfully!");
    
    router.push("/login");
  }
};
</script>

<style scoped>
.radio-button {
  border: 2px solid #7f7d83;
  padding: 8px;
  border-radius: 100%;
  appearance: none;
  width: 0;
  height: 0;
  position: absolute;
}

.radio-custom {
  display: inline-block;
  width: 10px;
  height: 10px;
  border: 2px solid #7f7d83;
  background-color: #7f7d83;
  border-radius: 50%;
  position: relative;
  transition: border-color 0.3s, background-color 0.3s;
}

.radio-button:checked + .radio-custom {
  border-color: #9be800;
  background-color: #9be800;
}
.radio-button:checked {
  border-color: #9be800;
}
</style>
