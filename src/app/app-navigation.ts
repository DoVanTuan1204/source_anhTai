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
        text: "Project",
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
        text: "Expense",
        items: [
          {
            text: "Expenselist",
            path: "/Payment",
          },
          {
            text: "Create Expense list",
            path: "/createCost",
          },
        ],
      },
    ],
  },
];
