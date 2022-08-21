export const navigation = [
  {
    text: "Sales Order",
    path: "/SalesOrder",
    icon: "home",
  },
  {
    text: "Master Data",
    icon: "folder",
    items: [
      {
        text: "Customer",

        items: [
          {
            text: "Customer list",
            path: "/Customer",
          },
          {
            text: "Create Customer",
            path: "/createCustomer",
          },
        ],
      },
      {
        text: "Product",
        items: [
          {
            text: "Project list",
            path: "/Product",
          },
          {
            text: "Create Project",
            path: "/createProject",
          },
        ],
      },
      {
        text: "Store",
        path: "/Store",
      },
      {
        text: "Cost",
        items: [
          {
            text: "Cost list",
            path: "/Payment",
          },
          {
            text: "Create Cost list",
            path: "/createCost",
          },
        ],
      },
    ],
  },
];
