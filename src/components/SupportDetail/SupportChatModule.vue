<template>
  <div
    class="w-full max-w-full mx-auto px-5 py-[22px] mt-[10px] border border-border-color rounded-lg shadow bg-white"
  >
    <div class="flex items-start space-x-3 mb-4">
      <div>
        <img
          :src="chatData.userAvatar"
          alt="User Avatar"
          class="w-9 h-9 rounded-full"
        />
      </div>
      <div>
        <h3
          class="font-nunito font-mediumSemiBold text-[14px] leading-5 tracking-[-0.02px]"
        >
          {{ chatData.title }}
        </h3>
        <div
          class="font-nunito font-mediumBold text-[14px] leading-[20px] tracking-[-0.05px] text-light-color mt-[2px]"
        >
          <span>{{ chatData.userName }}</span>
          <span class="mx-2">|</span>
          <span>{{ chatData.createdDate }}</span>
          <span class="mx-2">|</span>
          <span>Last Reply: {{ chatData.lastReply }}</span>
        </div>
      </div>
    </div>

    <div class="space-y-4 mt-[53px]">
      <div
        v-for="(message, index) in chatData.messages"
        :key="index"
        class="flex items-start space-x-3"
        :class="{ 'justify-end': message.isUser }"
      >
        <template v-if="!message.isUser">
          <div class="flex flex-col items-center">
            <img
              :src="message.avatar"
              alt="Agent Avatar"
              class="w-9 h-9 rounded-full"
            />
            <span
              class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-bar-graph-legends mt-2"
              v-html="message.timestamp"
            ></span>
          </div>
          <div class="flex flex-col">
            <p
              class="p-5 font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] rounded-[12px] text-compliance-card-title bg-chat-agent max-w-[603px] w-full"
            >
              {{ message.text }}
            </p>
          </div>
        </template>

        <template v-else>
          <div class="flex flex-col">
            <p
              class="p-5 font-nunito font-normal text-[14px] leading-[20px] tracking-[-0.05px] rounded-[12px] text-compliance-card-title bg-chat-user max-w-[603px] w-full"
            >
              {{ message.text }}
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img
              :src="message.avatar"
              alt="User Avatar"
              class="w-9 h-9 rounded-full"
            />
            <span
              class="font-nunito font-normal text-[14px] leading-5 tracking-[-0.05px] text-bar-graph-legends mt-2"
              v-html="message.timestamp"
            ></span>
          </div>
        </template>
      </div>
    </div>

    <div class="mt-4 flex items-center border-t border-gray-300 pt-4">
      <div class="mr-3">
        <EmojiIcon />
      </div>
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type a message here"
        class="flex-grow px-4 py-2"
      />
      <div class="flex space-x-[15px]">
        <ClipIcon />
        <MicIcon />
        <button
        @click="sendMessage"
      >
       <SendIcon />
      </button>
      </div>
     
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Avatar from "@/assets/images/Avatar.png";
import AvatarTrainer from "@/assets/images/AvatarTrainer.png";
import EmojiIcon from "@/components/icons/EmojiIcon.vue";
import ClipIcon from "@/components/icons/ClipIcon.vue";
import MicIcon from "@/components/icons/MicIcon.vue";
import SendIcon from "@/components/icons/SendIcon.vue";

const chatData = ref({
  title: "Payment Issue",
  userName: "David Smith",
  createdDate: "21 Feb 2020",
  lastReply: "24 min ago",
  userAvatar: AvatarTrainer,
  messages: [
    {
      text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel met scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
      timestamp: "6:21 PM <span><br><span>4th July",
      avatar: AvatarTrainer,
      isUser: false,
    },
    {
      text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel met scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
      timestamp: "6:21 PM <span><br><span>4th July",
      avatar: Avatar,
      isUser: true,
    },
    {
      text: "Cras sit amet nibh libero, in gravida nulla. Nulla vel met scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.",
      timestamp: "6:21 PM <span><br><span>4th July",
      avatar: AvatarTrainer,
      isUser: false,
    },
  ],
});

const newMessage = ref("");

const sendMessage = () => {
  if (newMessage.value.trim()) {
    chatData.value.messages.push({
      text: newMessage.value,
      timestamp: new Date().toLocaleTimeString(),
      avatar: "@/assets/images/Avatar.png",
      isUser: true,
    });
    newMessage.value = "";
  }
};
</script>
