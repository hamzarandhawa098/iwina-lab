<template>
    <div class="min-h-screen flex items-center justify-center bg-white">
      <div class="w-full max-w-[600px]">
        <div class="flex flex-col items-center">
          <img :src="LogoLarge" alt="Iwiina Lab Logo" class="h-16 w-[247px]" />
          <div class="flex gap-3 mt-6 px-2 py-[5px] rounded-full bg-primary-color">
            <button
              v-for="tab in tabs"
              :key="tab"
              :class="[
                'px-[31.5px] py-2 font-nunito font-mediumSemiBold rounded-full text-[14px] leading-[20px] tracking-[-0.02px] text-bold-color',
                activeTab === tab ? 'bg-white ' : 'bg-primary-color',
              ]"
              @click="activeTab = tab"
            >
              {{ tab }}
            </button>
          </div>
        </div>
  
        <div class="mt-6 px-4 lg:px-0">
          <div class="font-nunito font-normal text-[24px] leading-8 tracking-[-3%] title-color">
            Login
          </div>
          <form @submit.prevent="handleLogin" class="mt-6">
            <div class="space-y-6">
              <div>
                <input
                  id="email"
                  type="text"
                  v-model="form.email"
                  placeholder="Email/Username"
                  class="w-full font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder py-[17px] px-3 border border-Ticket-input rounded-lg"
                />
              </div>
              <div class="relative">
                <input
                  id="password"
                  :type="passwordVisible ? 'text' : 'password'"
                  v-model="form.password"
                  placeholder="Password"
                  class="w-full font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder py-[17px] px-3 border border-Ticket-input rounded-lg"
                />
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <TogglePasswordIcon />
                </button>
              </div>
              <div v-if="authStore.error" class="text-red-500 text-sm">
                {{ authStore.error }}
              </div>
            </div>
  
            <div class="mt-6">
              <Button
                text="Login"
                backgroundColor="bg-primary-color"
                textColor="text-bold-color"
                custom-classes="w-full py-[10px]"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/store/authStore';
  import LogoLarge from '@/assets/images/LogoLarge.png';
  import Button from '@/components/global/Button.vue';
  import TogglePasswordIcon from '@/components/icons/TogglePasswordIcon.vue';
  
  const tabs = ['Regulator', 'Seller', 'Buyer'];
  const activeTab = ref('Regulator');
  
  const form = ref({
    email: '',
    password: '',
  });
  
  const passwordVisible = ref(false);
  
  const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
  };
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const handleLogin = () => {
    const isAuthenticated = authStore.login(form.value.email, form.value.password);
    if (isAuthenticated) {
      console.log('Login successful', authStore.token);
      localStorage.setItem('authToken', authStore.token); 
      router.push('/otp'); 
    } else {
      console.error(authStore.error);
    }
  };
  </script>
   
  <style></style>
  