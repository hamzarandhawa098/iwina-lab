import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import NotificationsView from "@/views/NotificationsView.vue";
import SupportView from "@/views/SupportView.vue";
import SupportDetailsView from "@/views/SupportDetailsView.vue";
import CreateTicketView from "@/views/CreateTicketView.vue";
import ComplianceToolsView from "@/views/ComplianceToolsView.vue";
import TrainingResourcesView from "@/views/TrainingResourcesView.vue";
import CreateModuleView from "@/views/CreateModuleView.vue";
import TrainingModuleDetailView from "@/views/TrainingModuleDetailView.vue";
import AddNewTrainerView from "@/views/AddNewTrainerView.vue";
import TrainerProfileView from "@/views/TrainerProfileView.vue";
import MarketplaceView from "@/views/MarketplaceView.vue";
import ProductListingView from "@/views/ProductListingView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView
    },
    {
      path: "/marketplace",
      name: "marketplace",
      component: MarketplaceView
    },
    {
      path: "/notification",
      name: "notification",
      component: NotificationsView
    },
    {
      path: "/compliance-tools",
      name: "compliancetools",
      component: ComplianceToolsView
    },
    {
      path: "/support",
      name: "support",
      component: SupportView
    },
    {
      path: '/support/:id',
      name: 'SupportDetails',
      component: SupportDetailsView, 
    },
    {
      path: '/support/create-ticket',
      name: 'createticket',
      component: CreateTicketView, 
    },
    {
      path: "/training-resources",
      name: "trainingresources",
      component: TrainingResourcesView
    },
    {
      path: "/trainig-resources/create-module",
      name: "createmodule",
      component: CreateModuleView
    },
    {
      path: '/training-resources/:title',
      name: 'moduledetails',
      component: TrainingModuleDetailView,
      props: true, 
    },
    {
      path: "/add-new-trainer",
      name: "addnewtrainer",
      component: AddNewTrainerView
    },
    {
      path: '/trainer/:id',
      name: 'TrainerProfile',
      component: TrainerProfileView,
      props: true,
    },
    {
      path: "/product-listing",
      name: "productlisting",
      component: ProductListingView
    },
    {
      path: "/product/:id",
      name: "ProductDetails",
      component: ProductDetailsView,
      props: true,
    },
  
  ],
});

export default router;
