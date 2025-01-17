<template>
    <div class="lg:w-[1104px] mt-6 min-h-screen">
      <div class="bg-white">
        <div class="p-6 border border-border-color rounded-lg shadow">
          <div>
            <h2
              class="font-nunito font-bold text-[20px] leading-5 text-trainer-profile-title"
            >
              Profile Information
            </h2>
            <div class="mt-4">
              <div
                v-for="(value, key) in profileInfo"
                :key="key"
                class="flex justify-between mt-5"
              >
                <p
                  class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-scores-label"
                >
                  {{ key }}:
                </p>
                <p
                  class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle"
                >
                  {{ value }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="p-6 border border-border-color rounded-lg shadow mt-6">
          <div>
            <h2
              class="font-nunito font-bold text-[20px] leading-5 text-trainer-profile-title"
            >
              Compliance History
            </h2>
            <div class="mt-4">
              <div
                v-for="(value, key) in complianceHistory"
                :key="key"
                class="flex justify-between mt-5"
              >
                <p
                  class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-scores-label"
                >
                  {{ key }}
                </p>
                <p
                  class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle"
                >
                  {{ value }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="p-6 border border-border-color rounded-lg shadow mt-6">
          <div>
            <h2
              class="font-nunito font-bold text-[20px] leading-5 text-trainer-profile-title"
            >
              Audit Records
            </h2>
            <div class="mt-4">
              <div
                v-for="record in auditRecords"
                :key="record.date"
                class="flex justify-between mt-5"
              >
                <p
                  class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-scores-label"
                >
                  Audit on {{ record.date }}
                </p>
                <p
                  class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-trainer-profile-subtitle"
                >
                  {{ record.status }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div
          class="bg-white p-6 border border-border-color rounded-lg shadow mt-6"
        >
          <h2
            class="font-nunito font-bold text-[20px] leading-5 text-trainer-profile-title mt-6"
          >
            Messages
          </h2>
          <div
            class="p-6 bg-white border border-border-color rounded-lg shadow mt-4"
          >
            <div v-for="(message, index) in messages" :key="index" class="mt-6">
              <p
                class="font-nunito font-bold text-[20px] leading-5 text-trainer-profile-title"
              >
                {{ message.title }}
              </p>
              <p
                class="font-nunito font-normal text-[16px] leading-[22px] tracking-[-1%] text-scores-label mt-4"
              >
                {{ message.content }}
              </p>
            </div>
          </div>
          <div class="mt-6">
            <textarea
              v-model="newMessage"
              placeholder="Type Your Message Here"
              class="w-full font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-Ticket-placeholder border border-Ticket-input p-3 rounded-[8px]"
              rows="6"
            ></textarea>
            <div class="mt-6">
              <Button
                text="Submit"
                backgroundColor="bg-primary-color"
                textColor="text-bold-color"
                custom-classes="px-[55px] py-3"
                type="submit"
                @click="submitMessage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Button from "@/components/global/Button.vue";
  import GenericInput from "@/components/global/GenericInput.vue";
  
  const profileInfo = ref({
    "Entity Name": "Steeve Chemicals",
    Address: "123 Chemical Rd, City, Country",
    "Contact Person": "John Doe",
    Email: "johndoe@abcchemicals.com",
    Phone: "+1234567890",
  });
  
  const complianceHistory = ref({
    "Compliance Status": "Compliant",
    "Last Audit Date": "January 15, 2024",
    "Next Audit Date": "July 15, 2024",
  });
  
  const auditRecords = ref([
    { date: "January 15, 2024", status: "No issues found." },
    { date: "July 15, 2023", status: "Minor Issues Resolved" },
  ]);
  
  const messages = ref([
    {
      title: "Message From Compliance Officer:",
      content: "Please submit your latest documents.",
    },
    {
      title: "Message From John Doe:",
      content: "We have submitted the required documentation.",
    },
  ]);
  
  const newMessage = ref("");
  
  const submitMessage = () => {
    if (newMessage.value.trim()) {
      alert(`Message submitted: ${newMessage.value}`);
      messages.value.push({
        title: "New Message:",
        content: newMessage.value,
      });
      newMessage.value = "";
    } else {
      alert("Please enter a message.");
    }
  };
  </script>
  
  <style></style>
  