import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import DashboardLayout from "@/layout/DashboardLayout.vue";
import LoginView from "@/views/LoginView.vue";
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
import EditProductView from "@/views/EditProductView.vue";
import AddNewProductView from "@/views/AddNewProductView.vue";
import ImporterProfileView from "@/views/ImporterProfileView.vue";
import ImporterTransactionsView from "@/views/ImporterTransactionsView.vue";
import SuppliersView from "@/views/SuppliersView.vue";
import SupplierProfileView from "@/views/SupplierProfileView.vue";
import TransactionHistoryView from "@/views/TransactionHistoryView.vue";
import ProductSourcingView from "@/views/ProductSourcingView.vue";
import { useAuthStore } from '@/store/authStore';
import OtpView from "@/views/OtpView.vue";
import ComplianceToolDetailView from "@/views/ComplianceToolDetailView.vue";
import AuditHistoryView from "@/views/AuditHistoryView.vue";
import EntityDetailsView from "@/views/EntityDetailsView.vue";
import ComplianceReportingView from "@/views/ComplianceReportingView.vue";
import SettingsView from "@/views/SettingsView.vue";




const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { layout: DefaultLayout },
  },
  {
    path: "/otp",
    name: "otp",
    component: OtpView,
    meta: { layout: DefaultLayout },
  },

  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/marketplace",
    name: "marketplace",
    component: MarketplaceView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/notification",
    name: "notification",
    component: NotificationsView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/compliance-tools",
    name: "compliancetools",
    component: ComplianceToolsView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/support",
    name: "support",
    component: SupportView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/support/:id",
    name: "supportdetails",
    component: SupportDetailsView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/support/create-ticket",
    name: "createticket",
    component: CreateTicketView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/training-resources",
    name: "trainingresources",
    component: TrainingResourcesView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/trainig-resources/create-module",
    name: "createmodule",
    component: CreateModuleView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/training-resources/:title",
    name: "moduledetails",
    component: TrainingModuleDetailView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/add-new-trainer",
    name: "addnewtrainer",
    component: AddNewTrainerView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/trainer/:id",
    name: "trainerprofile",
    component: TrainerProfileView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/product-listing",
    name: "productlisting",
    component: ProductListingView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/product/:id",
    name: "productdetails",
    component: ProductDetailsView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/edit-product",
    name: "editproduct",
    component: EditProductView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/add-new-product",
    name: "addnewproduct",
    component: AddNewProductView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/importer-profile/:moduleId",
    name: "importerprofile",
    component: ImporterProfileView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/importer-transactions",
    name: "importertransactions",
    component: ImporterTransactionsView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component: SuppliersView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/supplier/:id",
    name: "supplierprofile",
    component: SupplierProfileView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/transaction-history",
    name: "transactionhistory",
    component: TransactionHistoryView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/product-sourcing",
    name: "productsourcing",
    component: ProductSourcingView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/compliance-tools/:tool",
    name: "ComplianceToolDetail",
    component: ComplianceToolDetailView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },

  },
  {
    path: '/history/:id',
    name: 'AuditHistory',
    component: AuditHistoryView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: '/compliance-reporting/:id',
    name: 'ComplianceReporting',
    component: ComplianceReportingView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: '/generate-report/:id',
    name: 'history',
    component: EntityDetailsView,
    props: true,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
    meta: { layout: DashboardLayout, requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});



router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.path === '/login' || to.path === '/otp') {
    next();
  } else if (!authStore.token) {
    next('/login');
  } else if (!authStore.isOtpVerified && to.name !== 'otp') {
    next('/otp');
  } else {
    next();
  }
});

export default router;
