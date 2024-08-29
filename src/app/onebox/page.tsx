import {
  ChevronDown,
  EllipsisIcon,
  MailIcon,
  MailOpenIcon,
  PencilIcon,
  ReplyIcon,
  RotateCwIcon,
  SearchIcon,
  SendIcon,
  TimerIcon,
  TrashIcon,
  UnfoldVerticalIcon,
  UserMinusIcon,
} from "lucide-react";
import { Fragment } from "react";
import { Badge, BadgeDot } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/Dropdown";
import { Input } from "~/components/ui/Input";
import { Separator } from "~/components/ui/Separator";

export default function Onebox() {
  return (
    <div className="grid h-[calc(100dvh-12px)] w-full grid-cols-[1fr_3fr_1fr]">
      <div className="flex flex-col gap-4 border-r border-border p-4">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="flex items-center gap-2 text-xl font-bold text-accent">
              All Inbox(s)
              <ChevronDown className="size-4 text-accent" />
            </h1>
            <div className="flex items-center gap-1 text-sm font-semibold">
              25/25
              <span className="text-xs font-normal text-foreground-muted">
                Inboxes selected
              </span>
            </div>
          </div>
          <Button variant="secondary" className="h-fit w-fit p-2">
            <RotateCwIcon className="size-4 text-foreground" />
          </Button>
        </div>
        <Input className="h-8 gap-2 bg-[#23272C] px-2" placeholder="Search">
          <SearchIcon className="size-4 text-border" />
        </Input>
        <div className="flex items-center gap-2">
          <Badge className="text-accent">26</Badge>
          <span className="text-sm">New Replies</span>
          <div className="ml-auto flex items-center gap-2 text-sm">
            <span>Newest</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </div>
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-2 px-2">
          <div className="flex items-center gap-2">
            <BadgeDot className="border-0" />
            <span>Beata@gmail.com</span>
            <span className="ml-auto text-xs font-normal text-foreground-muted">
              Mar 7
            </span>
          </div>
          <div className="line-clamp-1 text-sm">
            email content which is very long and overflows the container
          </div>
          <div className="space-x-2">
            <Badge className="space-x-2 py-1">
              <BadgeDot className="size-3 border-2" />
              <span>Interesting</span>
            </Badge>
            <Badge className="space-x-2 py-1">
              <SendIcon className="size-3" />
              <span>Interesting</span>
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-col gap-4 overflow-auto border-r border-border">
        <div className="flex justify-between gap-2 border-b border-border px-6 py-4">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Orlando</span>
            <span className="font-normal text-foreground-muted">
              orlando@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="flex h-fit w-fit items-center gap-2 border border-border bg-muted-lighter p-2"
            >
              <BadgeDot className="size-5 border-4" variant="warning" />
              Meeting Completed
              <ChevronDown className="size-4 text-muted-foreground" />
            </Button>
            <Button
              variant="secondary"
              className="flex h-fit w-fit items-center gap-2 border border-border bg-muted-lighter p-2 px-4"
            >
              Move
              <ChevronDown className="size-4 text-muted-foreground" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  variant="secondary"
                  className="flex w-fit items-center gap-2 border border-border bg-muted-lighter p-3"
                >
                  <EllipsisIcon className="size-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-muted-lighter">
                <DropdownMenuItem className="flex items-center gap-2">
                  <MailOpenIcon className="size-4" />
                  <span>Mark as Unread</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <PencilIcon className="size-4" />
                  <span>Edit Lead</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <UserMinusIcon className="size-4" />
                  <span>Remove Lead</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <TimerIcon className="size-4" />
                  <span>Set Reminder</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <TrashIcon className="size-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex w-full items-center px-6 py-2">
          <Separator className="flex-1" />
          <span className="bg-muted-lighter px-3 py-1 text-sm">Today</span>
          <Separator className="flex-1" />
        </div>
        <Card className="mx-6 flex flex-col gap-2 px-4 py-4">
          <div className="flex items-center gap-2">
            <span>mail</span>
            <span className="ml-auto text-sm font-normal text-foreground-muted">
              datetime
            </span>
          </div>
          <div className="text-foreground-muted">
            cc
            <br />
            to
          </div>
          <div>content</div>
        </Card>
        <div className="flex w-full items-center px-6 py-2">
          <Separator className="flex-1" />
          <button className="flex items-center gap-1 bg-muted-lighter px-3 py-1 text-sm">
            <UnfoldVerticalIcon className="mr-1 size-4 text-muted-foreground" />
            View All
            <span className="text-accent">4</span>
            Replies
          </button>
          <Separator className="flex-1" />
        </div>
        <div className="flex flex-1 items-end px-6 py-4">
          <Button className="flex items-center gap-2">
            <ReplyIcon className="size-4" />
            Reply
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 py-6">
        <div className="w-full rounded-lg bg-muted px-2 py-3 font-bold">
          Lead Details
        </div>
        <div className="grid grid-cols-2 gap-4 px-2">
          {Object.entries({
            Name: "orlando",
            Email: "orlando@gmail.com",
            Phone: "1234567890",
            LinkedIn: "linkedin.com/orlando",
            Company: "reach",
          }).map(([key, value]) => (
            <Fragment key={key}>
              <div>{key}</div>
              <div className="text-wrap text-end text-foreground-muted">
                {value}
              </div>
            </Fragment>
          ))}
        </div>
        <div className="w-full rounded-lg bg-muted px-2 py-3 font-bold">
          Lead Details
        </div>
        <div className="flex flex-col px-2">
          <div className="flex items-center gap-2 text-sm">
            <span>3 Steps</span>
            <Separator orientation="vertical" />
            <span>5 Days of Sequence</span>
          </div>
          <div className="flex gap-2 py-4">
            <div className="flex flex-col items-center">
              <Card className="rounded-full p-3">
                <MailIcon className="size-5" />
              </Card>
              <Separator orientation="vertical" className="h-10" />
              <Card className="rounded-full p-3">
                <MailIcon className="size-5" />
              </Card>
              <Separator orientation="vertical" className="h-10" />
              <Card className="rounded-full p-3">
                <MailIcon className="size-5" />
              </Card>
            </div>
            <div className="flex flex-col justify-between gap-2 px-4">
              <div className="flex flex-col gap-1 text-sm font-semibold">
                Step 1: Email
                <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
                  <SendIcon className="size-4 text-muted-foreground" />
                  Sent <span className="font-semibold">2, Feb</span>
                </span>
              </div>

              <div className="flex flex-col gap-1 text-sm font-semibold">
                Step 1: Email
                <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
                  <SendIcon className="size-4 text-muted-foreground" />
                  Sent <span className="font-semibold">2, Feb</span>
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm font-semibold">
                Step 1: Email
                <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
                  <SendIcon className="size-4 text-muted-foreground" />
                  Sent <span className="font-semibold">2, Feb</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
