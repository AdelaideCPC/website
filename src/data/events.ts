export type Event = {
  title: string;
  description: string;
  date: string;
  location?: string;
  link?: string;
};

export const EVENTS: Event[] = [
  {
    title: "RSP x ACPC 2026 Competition",
    description:
      "Join us for an exciting competitive programming contest in collaboration with RSP!",
    date: "Sunday, 1st February, 2026",
    link: "https://aucpl.com/contest/rspxacpc2026",
  },
];
