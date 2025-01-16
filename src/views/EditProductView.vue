<template>
  <PageHeader linkText="Products" currentPageText="Edit Product" slash="/" />
  <EditProducts class="mt-6"
    :formTitle="formTitle"
    :formSubtitle="formSubtitle"
    :courseTitlePlaceholder="courseTitlePlaceholder"
    :descriptionPlaceholder="descriptionPlaceholder"
    :cancelButtonText="cancelButtonText"
    :submitButtonText="submitButtonText"
    :organisationOptions="organisationOptions"
    :trainerOptions="trainerOptions"
    :price="price"
    :photos="photos"
  />
</template>
<script setup>
import { ref } from "vue";
import PageHeader from "@/components/global/PageHeader.vue";
import EditProducts from "@/components/EditProduct/EditProducts.vue";
import EditProductImg1 from "@/assets/images/EditProductImg1.png";
import EditProductImg2 from "@/assets/images/EditProductImg2.png";
import EditProductImg3 from "@/assets/images/EditProductImg3.png";

const formTitle = ref("Edit Products");
const formSubtitle = ref("Edit Details...");
const courseTitlePlaceholder = ref("Green House Frame");
const price = ref("$ 3000");
const descriptionPlaceholder = ref(
  "Features: Helping to clear the cutter bar. Preventing stripping and shelling, Allowing for more even threshing, Increased ground speed, Quickly slips over the existing finger, Attaches directly to the reel pipe, Further secured with unique clip system, Proven to reduce Front Losses up to 75%, Eliminating the need for air reels"
);
const cancelButtonText = ref("Cancel");
const submitButtonText = ref("Save Changes");

const organisationOptions = ref([
  { value: "", label: "224" },
  { value: "org1", label: "Organisation 1" },
  { value: "org2", label: "Organisation 2" },
]);

const trainerOptions = ref([
  { value: "", label: "Tunnel" },
  { value: "trainer1", label: "Trainer 1" },
  { value: "trainer2", label: "Trainer 2" },
]);
const photos = ref([EditProductImg1, EditProductImg2, EditProductImg3]);

</script>
