const fakeProjects = [
  {
    id: 1,
    name: "Activity Tracker",
    description: "Internal project to log employee hours against projects.",
  },
  {
    id: 2,
    name: "Passenger Assistance",
    description: "Revolutionising accessibility across the UK Rail Network",
  },
  {
    id: 3,
    name: "RailSafe",
    description: "Keeping staff and passengers safe on the UK Rail Network",
  },
];

const fakeUsers = [
  {
    id: 1,
    first_name: "John",
    last_name: "Smith",
    username: "john.smith",
    email: "john.smith@transreport.co.uk",
    admin: false,
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    username: "jane.doe",
    email: "jane.doe@transreport.co.uk",
    admin: false,
  },
];

const fakeActivities = [
  {
    id: 1,
    user_id: 1,
    project_id: 1,
    date: "01/02/2021",
    hours: 8,
    minutes: 0,
    task: "Create navigation component with tests.",
  },
  {
    id: 2,
    user_id: 1,
    project_id: 1,
    date: "02/02/2021",
    hours: 4,
    minutes: 0,
    task: "Create footer component with tests.",
  },
  {
    id: 3,
    user_id: 1,
    project_id: 2,
    date: "02/02/2021",
    hours: 3,
    minutes: 30,
    task: "Fix contact form that wasn't WCAG compliant.",
  },
  {
    id: 4,
    user_id: 2,
    project_id: 3,
    date: "01/02/2021",
    hours: 2,
    minutes: 45,
    task: "Install Tailwind",
  },
  {
    id: 5,
    user_id: 2,
    project_id: 3,
    date: "01/02/2021",
    hours: 6,
    minutes: 0,
    task: "Migrate Bootstrap classes to Tailwind equivalents",
  },
];

export { fakeProjects, fakeUsers, fakeActivities };
