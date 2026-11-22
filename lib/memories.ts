export const memories = [
  {
    id: "cottage",
    label: "The windmill cottage",
    title: "The house on the hill",
    date: "August 14, 2025",
    body: "We stayed until the light reached the windmill.",
    left: "68%",
    top: "54%",
  },
  {
    id: "house",
    label: "The smaller house",
    title: "The room with the lamp",
    date: "November 9, 2023",
    body: "Where the quiet hours were kept.",
    left: "42%",
    top: "64%",
  },
  {
    id: "path",
    label: "The garden path",
    title: "The walk down",
    date: "June 21, 2025",
    body: "A path we took when there was nowhere else to be.",
    left: "60%",
    top: "88%",
  },
  {
    id: "island",
    label: "A floating island",
    title: "Somewhere above the village",
    date: "March 2, 2024",
    body: "A place that only looked close from the ground.",
    left: "28%",
    top: "32%",
  },
] as const;

export type MemoryId = (typeof memories)[number]["id"];
