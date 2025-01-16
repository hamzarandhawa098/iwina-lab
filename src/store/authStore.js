import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    otp: '1234', 
    isOtpVerified: false, 
    users: [
      { username: 'admin', password: 'pass123' },
    ],
    error: null,
  }),
  actions: {
    login(email, password) {
      const user = this.users.find((user) => user.username === email);
      if (!user) {
        this.error = 'Invalid username';
        return false;
      }
      if (user.password !== password) {
        this.error = 'Invalid password';
        return false;
      }
      this.token = 'dummy-token';
      this.error = null;
      return true;
    },
    verifyOtp(inputOtp) {
      if (inputOtp === this.otp) {
        this.isOtpVerified = true;
        this.error = null;
        return true;
      } else {
        this.error = 'Invalid OTP';
        return false;
      }
    },
    
  },
});
