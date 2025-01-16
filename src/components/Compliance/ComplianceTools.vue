<template>
  <div class="px-6 py-5 border border-border-color rounded-lg shadow mt-6">
    <h1
      class="font-inter font-semibold text-center lg:text-left text-[30px] leading-[38px] text-title-color"
    >
      Compliance Tools
    </h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link
          v-for="(tool, index) in tools"
          :key="index"
          :to="tool.route"
          class="block"
        >
          <ComplianceToolCard
            :title="tool.title"
            :description="tool.description"
            :logo="tool.logo"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import ComplianceToolCard from "@/components/global/ComplianceToolCard.vue";
import AuditsIcon from "@/components/icons/AuditsIcon.vue";
import RiskManagement from "@/components/icons/RiskManagement.vue";
import RecallManagementIcon from "@/components/icons/RecallManagementIcon.vue";
import BlockchainIcon from "@/components/icons/BlockchainIcon.vue";
import SafetyIcon from "@/components/icons/SafetyIcon.vue";
import ComplianceIcon from "@/components/icons/ComplianceIcon.vue";
import SustainabilityIcon from "@/components/icons/SustainabilityIcon.vue";
import SupplierManagement from "@/components/icons/SupplierManagement.vue";
import QualityIncidentIcon from "@/components/icons/QualityIncidentIcon.vue";
import TraceabilityIcon from "@/components/icons/TraceabilityIcon.vue";

const tools = ref([
  {
    title: "Audits & Assessments",
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing on performance, security, and efficiency to ensure alignment with business goals and enhance user experience.",
    logo: AuditsIcon,
    route: "/compliance-tools/audits",
  },
  {
    title: "Risk Management",
    description:
      "Risk Management Tool facilitates the systematic identification, assessment, and mitigation of potential risks within various operational contexts, enhancing organizational resilience and decision-making.",
    logo: RiskManagement,
    route: "/compliance-tools/risk-management",
  },
  {
    title: "Blockchain",
    description:
      "Risk Management Tool facilitates the systematic identification, assessment, and mitigation of potential risks within various operational contexts, enhancing organizational resilience and decision-making.",
    logo: BlockchainIcon,
    route: "/compliance-tools/blockchain",
  },
  {
    title: "Safety & Quality Management",
    description:
      "These tools are critical for maintaining trust and security in online shopping by protecting customer data and ensuring resilience against cyber threats.",
    logo: SafetyIcon,
    route: "/compliance-tools/safety-quality",
  },
  {
    title: "Compliance & Regulation",
    description:
      "A comprehensive tool for conducting audits and assessments on ecommerce websites, focusing on regulations and compliance.",
    logo: ComplianceIcon,
    route: "/compliance-tools/compliance-regulation",
  },
  {
    title: "Sustainability",
    description:
      "Risk Management Tool facilitates the systematic identification, assessment, and mitigation of potential risks within various operational contexts, enhancing organizational resilience and decision-making.",
    logo: SustainabilityIcon,
    route: "/compliance-tools/sustainability",
  },
  {
    title: "Recall Management",
    description:
      "Risk Management Tool facilitates the systematic identification, assessment, and mitigation of potential risks within various operational contexts, enhancing organizational resilience and decision-making.",
    logo: RecallManagementIcon,
    route: "/compliance-tools/recall-management",
  },
  {
    title: "Supplier Management",
    description:
      "These tools are critical for maintaining trust and security in online shopping by protecting customer data and ensuring resilience against cyber threats.",
    logo: SupplierManagement,
    route: "/compliance-tools/supplier-management",
  },
  {
    title: "Quality Incidents",
    description:
      "Tracks and manages incidents related to product or service quality issues, enabling timely resolution and continuous improvement in processes.",
    logo: QualityIncidentIcon,
    route: "/compliance-tools/quality-incidents",
  },
  {
    title: "Traceability",
    description:
      "Traceability tool: Facilitates tracking and documenting of product or service components throughout their lifecycle, ensuring transparency, compliance, and efficient recall management when necessary.",
    logo: TraceabilityIcon,
    route: "/compliance-tools/traceability",
  },
]);
</script>

<style scoped></style>
