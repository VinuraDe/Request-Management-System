// import FeedbackIcon from "../assets/Icons/FeedbackIcon";
// import HomeIcon from "../assets/Icons/HomeIcon";
// import ReportsIcon from "../assets/Icons/ReportsIcon";
// import RequestsIcon from "../assets/Icons/RequestsIcon";
// import SettingsIcon from "../assets/Icons/SettingsIcon";
// import UserIconPatients from "../assets/Icons/UserIconPatients";

export const RoutePaths = [
  {
    name: "Dashboard",
    submenu: false,
    link: "/admin",
    // icon: <HomeIcon />,

    value: 0,
    subdomains: null,
  },
  {
    name: "Requests",
    submenu: false,
    link: "/admin/requests",
    // icon: <RequestsIcon />,

    value: 1,
    subdomains: null,
  },
  {
    name: "Feedbacks",
    submenu: false,
    link: "/admin/feedbacks",
    // icon: <FeedbackIcon />,
    value: 2,
    subdomains: null,
  },
  {
    name: "Reports",
    submenu: false,
    link: "/admin/reports",
    // icon: <ReportsIcon />,
    value: 3,
    subdomains: null,
  },
  {
    name: "Patient",
    submenu: false,
    link: "/admin/patients-onboarding",
    // icon: <UserIconPatients />,
    value: 3,
    subdomains: null,
  },
];

export const RoutePathMenu = [
  {
    name: "Settings",
    submenu: true,
    // icon: <SettingsIcon />,
    sublinks: [
      {
        sublink: [{ link: "/admin/settings/assets", name: "Assets" }],
      },
      {
        sublink: [{ link: "/admin/settings/departments", name: "Departments" }],
      },
      {
        sublink: [{ link: "/admin/settings/services", name: "Services" }],
      },
      {
        sublink: [{ link: "/admin/settings/users", name: "Users" }],
      },
      {
        sublink: [{ link: "/admin/settings/permissions", name: "Permissions" }],
      },
      {
        sublink: [{ link: "/admin/settings/esc.metrix", name: "Esc.Metrix" }],
      },
      {
        sublink: [
          { link: "/admin/settings/notifications", name: "Notifications" },
        ],
      },
      {
        sublink: [
          { link: "/admin/settings/manage-comments", name: "Manage Comments" },
        ],
      },
      {
        sublink: [{ link: "/admin/settings/schedular", name: "Schedular" }],
      },
      {
        sublink: [{ link: "/admin/settings/client-register", name: "Hospital Register" }],
      },
    ],
  },
];
