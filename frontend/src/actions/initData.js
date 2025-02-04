// initial data for kanban module
export const initData = [
  {
    id: "column-1",
    title: "In Progress 1",
    tasks: [
      {
        id: "task-1",
        content: "Research FQA page UX",
        img: null,
        labels: ["UX"],
        assignees: [
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
          {
            name: "Jane Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/2.png",
          },
          {
            name: "Robert Johnson",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/3.png",
          },
        ],
        attachmentNum: 4,
        chatNum: 12,
      },
      {
        id: "task-2",
        content: "Review Javascript code",
        img: null,
        labels: ["Code Review"],
        assignees: [
          {
            name: "Emily Davis",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/4.png",
          },
          {
            name: "Tom Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/5.png",
          },
        ],
        attachmentNum: 2,
        chatNum: 8,
      },
    ],
  },
  {
    id: "column-2",
    title: "In Review 2",
    tasks: [
      {
        id: "task-3",
        content: "Review completed Apps",
        img: null,
        labels: ["Dashboard"],
        assignees: [
          {
            name: "David Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/6.png",
          },
          {
            name: "Jane Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/2.png",
          },
        ],
        attachmentNum: 8,
        chatNum: 17,
      },
      {
        id: "task-4",
        content: "Find new images for pages",
        img: "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/apps/kanban/plant.png",
        labels: ["Images"],
        assignees: [
          {
            name: "David Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/6.png",
          },
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
          {
            name: "Tom Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/5.png",
          },
          {
            name: "Emily Davis",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/4.png",
          },
        ],
        attachmentNum: 2,
        chatNum: 8,
      },
    ],
  },
  {
    id: "column-3",
    title: "Done 3",
    tasks: [
      {
        id: "task-5",
        content: "Forms & tables section",
        img: null,
        labels: ["App"],
        assignees: [
          {
            name: "Robert Johnson",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/3.png",
          },
          {
            name: "Jane Smith",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/2.png",
          },
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
        ],
        attachmentNum: 5,
        chatNum: 14,
      },
      {
        id: "task-6",
        content: "Complete charts & maps",
        img: null,
        labels: ["Charts & Maps"],
        assignees: [
          {
            name: "John Doe",
            avatar:
              "https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/avatars/1.png",
          },
        ],
        attachmentNum: 6,
        chatNum: 21,
      },
    ],
  },
];
