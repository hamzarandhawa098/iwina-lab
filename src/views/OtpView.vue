<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-white">
    <div class="w-full max-w-[600px] text-center">
      <h2 class="font-inter font-semibold text-[30px] leading-[38px] text-title-color">
        2-Step Verification
      </h2>
      <p class="font-nunito font-normal text-[18px] leading-6 tracking-[-0.26px] text-black mt-3">
        Enter the verification code sent to +4423131413.
      </p>
      <div class="flex justify-center mt-6">
        <img :src="OtpImage" alt="Verification" class="w-[360px] h-[360px]" />
      </div>
      <div class="mt-6 px-4 lg:px-0">
        <input
          id="otp"
          v-model="otpInput"
          type="text"
          placeholder="Enter OTP"
          class="w-full font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder py-[17px] px-3 border border-Ticket-input rounded-lg"
        />
        <div class="mt-2 text-red-500" v-if="errorMessage">{{ errorMessage }}</div>
        <div class="mt-6">
          <Button
            text="Verify"
            backgroundColor="bg-primary-color"
            textColor="text-bold-color"
            custom-classes="w-full py-[10px]"
            @click="handleOtpVerification"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/authStore';
import OtpImage from "@/assets/images/OtpImage.png";
import Button from "@/components/global/Button.vue";

const router = useRouter();
const authStore = useAuthStore();

const otpInput = ref('');
const errorMessage = ref('');

function handleOtpVerification() {
  if (authStore.verifyOtp(otpInput.value)) {
    router.push({ name: 'dashboard' });
  } else {
    errorMessage.value = authStore.error;
  }
}
</script>

<style></style>
