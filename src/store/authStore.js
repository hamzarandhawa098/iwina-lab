import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => {
    const expirationTime = localStorage.getItem('auth-expiration');
    const isExpired = expirationTime && new Date().getTime() > expirationTime;
    
    if (isExpired) {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('auth-isOtpVerified');
      localStorage.removeItem('auth-expiration');
    }

    return {
      token: isExpired ? null : localStorage.getItem('auth-token'),
      otp: '1234',
      isOtpVerified: !isExpired && JSON.parse(localStorage.getItem('auth-isOtpVerified')) || false,
      users: [
        { username: 'admin', password: 'pass123' },
      ],
      error: null,
      logoutTimer: null,
    };
  },
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
      this.isOtpVerified = true;
      this.error = null;

      const expirationTime = new Date().getTime() + 3600000; // 1 hour from now
      localStorage.setItem('auth-token', this.token);
      localStorage.setItem('auth-isOtpVerified', JSON.stringify(this.isOtpVerified));
      localStorage.setItem('auth-expiration', expirationTime);

      this.setSessionExpiration(3600000);
      return true;
    },
    verifyOtp(inputOtp) {
      if (inputOtp === this.otp) {
        this.isOtpVerified = true;
        this.error = null;

        localStorage.setItem('auth-isOtpVerified', JSON.stringify(this.isOtpVerified));
        return true;
      } else {
        this.error = 'Invalid OTP';
        return false;
      }
    },
    setSessionExpiration(duration) {
      if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
        console.log('Previous logout timer cleared.');
      }

      console.log(`Setting logout timer for ${duration / 1000} seconds.`);
      
      const expirationTime = new Date().getTime() + duration;
      localStorage.setItem('auth-expiration', expirationTime);

      this.logoutTimer = setTimeout(() => {
        console.log('Logout timer triggered.');
        this.logout();
      }, duration);
    },
    logout() {
      this.token = null;
      this.isOtpVerified = false;
      this.error = 'Session expired. Please log in again.';

      localStorage.removeItem('auth-token');
      localStorage.removeItem('auth-isOtpVerified');
      localStorage.removeItem('auth-expiration');

      if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
        this.logoutTimer = null;
      }
    },
  },
});
