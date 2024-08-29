import {
  BarChart2Icon,
  HomeIcon,
  InboxIcon,
  MailIcon,
  SendIcon,
  UserSearchIcon,
} from "lucide-react";

export const navRoutes = [
  {
    route: "/",
    icon: HomeIcon,
  },
  {
    route: "/users",
    icon: UserSearchIcon,
  },
  {
    route: "/emailaccounts",
    icon: MailIcon,
  },
  {
    route: "/campaigns",
    icon: SendIcon,
  },
  {
    route: "/onebox",
    icon: InboxIcon,
  },
  {
    route: "/analytics",
    icon: BarChart2Icon,
  },
];

export const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
