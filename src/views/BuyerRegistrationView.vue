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
                type="fullname"
                id="fullname"
                v-model="form.fullname"
                :placeholder="placeholders.fullname"
              />
              <p v-if="errors.fullname" class="text-red-500 text-sm mt-2">
                {{ errors.fullname }}
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
            <div>
              <GenericInput
                type="address"
                id="address"
                v-model="form.address"
                :placeholder="placeholders.address"
              />
              <p v-if="errors.address" class="text-red-500 text-sm mt-2">
                {{ errors.address }}
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
  const heading = "Buyer Registration";
  const registrationText = "Registration";
  const buttonText = "Registration";
  
  const placeholders = {
    username: "Email/Username",
    fullname: "Full Name",
    password: "Password",
    repassword: "Reenter Password",
    address: "Address"
  };
  
  const passwordVisible = ref(false);
  const repasswordVisible = ref(false);
  
  const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
  };
  const toggleRePasswordVisibility = () => {
    repasswordVisible.value = !repasswordVisible.value;
  };
  
  const form = reactive({
    username: "",
    fullname: "",
    password: "",
    repassword: "",
    address: "",
  });
  
  const errors = reactive({
    username: "",
    fullname: "",
    password: "",
    repassword: "",
    address: "",
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

  if (!form.fullname) {
    errors.fullname = "Name is required.";
    isValid = false;
  }
  if (!form.address) {
    errors.address = "Address is required.";
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
  </style>
  