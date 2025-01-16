<template>
  <PageHeader
    linkText="Importers"
    currentPageText="Importer Profile"
    slash="/"
  />
  <div class="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start mt-8">
    <PageTitle title="Importer Profile" />
    <div>
      <router-link to="/importer-transactions" >
        <Button
          text="View All Transactions"
          backgroundColor="bg-primary-color"
          textColor="text-bold-color"
          custom-classes="px-4 py-3 "
        />
      </router-link>
    </div>
  </div>
  <div
    class="lg:w-[1103px] bg-white border border-border-color rounded-lg shadow mt-6 p-5"
  >
    <TrainerProfile
      instructorName="Miss, Jessica"
      title="E-Commerce Product Business Women"
      :image="ImporterImage"
      :stats="stats"
    />
    <div class="flex flex-col lg:flex-row gap-6 mt-[22px]">
      <TrainerDescription
        title="About Me"
        description="Hello! I’m Jessica, a passionate e-commerce importer dedicated to bringing the best products from around the globe to our customers. With years of experience in international trade, I specialize in sourcing high-quality items that meet the diverse needs of our clientele.<span><br></span>My journey began with a love for discovering unique products and understanding different cultures. This curiosity has driven me to build strong relationships with suppliers worldwide, ensuring that I can offer only the best to my customers. <span><br></span>I take pride in curating a selection of products that not only meet quality standards but also resonate with current market trends. My goal is to make your shopping experience seamless and enjoyable, providing exceptional customer service every step of the way.<span><br></span>When I’m not working on sourcing new products, I enjoy exploring local markets and staying updated on e-commerce trends. I’m excited to share my passion for quality goods with you and look forward to helping you find exactly what you’re looking for! <span><br></span>Feel free to reach out if you have any questions or need assistance. Thank you for choosing us for your shopping needs!"
      />
      <ImporterProducts 
      title="Profile"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import PageTitle from "@/components/global/PageTitle.vue";
import Button from "@/components/global/Button.vue";
import TrainerProfile from "@/components/TrainerProfileView/TrainerProfile.vue";
import ImporterImage from "@/assets/images/ImporterImage.png";
import TrainerStarIcon from "@/components/icons/TrainerStarIcon.vue";
import TrainerDescription from "@/components/TrainerProfileView/TrainerDescription.vue";
import TrainerCourses from "@/components/TrainingResources/TrainerCourses.vue";
import ImporterProducts from "@/components/ImporterProfile/ImporterProducts.vue";

const stats = ref([
  {
    icon: TrainerStarIcon,
    value: "4.8",
    label: "(134,633 reviews)",
  },
]);
</script>
