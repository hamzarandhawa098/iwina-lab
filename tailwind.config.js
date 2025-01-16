/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito",
        inter: "Inter",
        gilroyBold : ['Gilroy-Bold', 'sans-serif'],
        gilroyLight: ['Gilroy-Light', 'sans-serif'],
        gilroyRegular: ['Gilroy-Regular', 'sans-serif'],
        openSans : 'Open Sans'

      },
      colors: {
        "primary-color": "#9BE800",
        "light-color": "#06000B7A",
        "bold-color": "#030206E3",
        "notification-color": "#FFA500",
        "title-color": "#101828",
        "paragraph-color": "#475467",
        "border-color" : "#EAECF0",
        "scores-title" : "#817F9B",
        "scores-label" : "#030204F7",
        "bar-graph-legends" : "#07031154",
        "training-button" : "#4F81F5",
        "table-content" : "#3D3D3D",
        "table-border" : "#EAECF0",
        "completed-Table" : "#E4FFED",
        "pending-Table" : "#FEF3D0",
        "underProcess-Table" : "#EAF0FF",
        "completed-Text" : "#22C55E",
        "pending-Text" : "#F8C513",
        "underProcess-Text" : "#4F81F5",
        "Action-Text" : "#385CAE",
        "Action-bg" : '#EBEDFF',
        "Selector-Text" : "#05030BD4",
        "Search-Text" : "#686868",
        "Pagination-bg" : "#E1E9FF",
        "Map-semi-color" : "#8E8E8E",
        "Map-title" : "#344054",
        "closed-bg" : "#FEEBEB",
        "closed-text" : "#F03A3A",
        "slash-color" : "#A7A7A7",
        "Ticket-placeholder" : "#7F7D83",
        "Ticket-input" : "#E6E6E6",
        "Ticket-cancel" : "#F8F8F8",
        "compliance-card-title" : "#04000BAD",
        "compliance-card-text" : "#0A090B",
        "urgent-text" : "#EC3C46",
        "support-no" : "#436ED0",
        "chat-user" : "#FFEDCD",
        "chat-agent" : "#EDF2FE",
        "rating-Text" : "#1B1B1B99",
        "Video-description" : "#1B1B1BE5",
        "Webinar-Text" : "#F9F9F9E5",
        "load-more-button" : "#4F4D55",
        "Trainers-Table" : "#F7F7F7",
        "Table-header" : "#707070",
        "trainer-profile-title" : "#1D2026",
        "trainer-profile-subtitle" : "#6E7485",
        "product-price" : "#42B42F",
        "product-Details-rating" : "#525252",
        "features-text-title" : "#303133",
        "Instock-text" : "#34C759",
        "Available-stock-bg" : "#E6F0F6",
        "Popup-text" : "#588400",
      },
      fontWeight: {
        mediumBold: 475,
        mediumSemiBold: 550,
      },

      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1240px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
