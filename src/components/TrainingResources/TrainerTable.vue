<template>
  <div class="lg:mx-6 mt-[22px]">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-Trainers-Table">
            <th
              v-for="header in headers"
              :key="header"
              class="px-4 py-[9px] text-left text-Table-header font-nunito font-light text-[12px] leading-[14.4px]"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course, index) in trainers" :key="index" class="border-b">
            <td
              class="mx-4 mt-7 mb-[49px] flex items-start w-[157px] space-x-[11px]"
            >
              <img
                :src="course.profileImage"
                alt="Trainer Profile"
                class="w-12 h-12 rounded-full"
              />
              <div>
                <p
                  class="font-nunito font-normal text-[16px] leading-[20.05px] text-black"
                >
                  {{ course.trainerName }}
                </p>
                <router-link
                  :to="{ name: 'TrainerProfile', params: { id: course.id } }"
                  class="font-nunito font-normal text-[10px] leading-[20.05px] text-primary-color"
                >
                  View Profile
                </router-link>
              </div>
            </td>
            <td class="my-7 w-[182px]">
              <p
                class="font-nunito font-normal text-[12px] leading-[16.37px] text-compliance-card-text"
              >
                {{ course.details }}
              </p>
            </td>
            <td
              class="px-6 font-nunito font-normal text-[12px] leading-[16.37px] text-compliance-card-text"
            >
              {{ course.courseTitle }}
            </td>
            <td
              class="px-4 font-nunito font-normal text-[12px] leading-[16.37px] text-compliance-card-text"
            >
              {{ course.timing }}
            </td>
            <td
              class="px-4 font-nunito font-normal text-[12px] leading-[16.37px] text-compliance-card-text"
            >
              {{ course.duration }}
            </td>
            <td class="">
              <div class="flex items-center space-x-[11px] px-4">
                <div class="w-[89px] h-[6px] bg-gray-200 rounded-full">
                  <div
                    class="h-[6px] bg-primary-color rounded-full"
                    :style="{ width: course.status + '%' }"
                  ></div>
                </div>
                <span
                  class="font-nunito font-normal text-[12px] leading-[16.37px] text-compliance-card-text"
                  >{{ course.status }}%</span
                >
              </div>
            </td>
            <td class="px-4">
              <div class="flex space-x-4">
                <EditIcon />
                <DelIcon />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  TrainerImg: String,
  EditIcon: String,
  DelIcon: String,
  headers: Array,
  trainers: Array,
});
</script>

<style scoped>
.container{
  overflow-x: auto !important;
}
</style>
