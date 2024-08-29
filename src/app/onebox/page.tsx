"use client";

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
import { Fragment, useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge, BadgeDot } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/Dropdown";
import { Input } from "~/components/ui/Input";
import { Separator } from "~/components/ui/Separator";
import { api } from "~/lib/axios";
import { Months } from "~/lib/constants";
import {
  type Mail,
  useDeleteMailThread,
  useMail,
  useMailThread,
} from "~/lib/model/mails";
import { cn } from "~/lib/utils";

export default function Onebox() {
  const [currentMail, setCurrentMail] = useState<Mail | null>(null);
  const [showThread, setShowThread] = useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const mails = useMail();

  const mailThread = useMailThread({
    id: currentMail?.threadId,
  });

  const deleteMailThread = useDeleteMailThread({
    id: currentMail?.threadId,
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "d") {
        if (!currentMail) return;
        setShowDeleteDialog(true);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentMail]);

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
          <Button
            variant="secondary"
            className="h-fit w-fit p-2"
            onClick={() =>
              api.get("/onebox/reset").then(async (res) => {
                await mails.refetch();
                toast.success(
                  (
                    res.data as {
                      status: number;
                      data: string;
                    }
                  ).data,
                );
              })
            }
          >
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
        {mails.data?.data.map((mail) => (
          <>
            <Separator />
            <div
              className={cn("flex w-full cursor-pointer flex-col gap-2 px-2", {
                "border-l-2 border-accent": currentMail?.id === mail.id,
              })}
              onClick={() => {
                setCurrentMail(mail);
                setShowThread(false);
              }}
            >
              <div className="flex items-center gap-2">
                {!currentMail?.isRead && <BadgeDot className="border-0" />}
                <span>{mail.fromName}</span>
                <span className="ml-auto text-xs font-normal text-foreground-muted">
                  {Months[new Date(mail.sentAt).getMonth()]}{" "}
                  {new Date(mail.sentAt).getDate()}
                </span>
              </div>
              <div className="line-clamp-1 text-sm">{mail.subject}</div>
              <div className="space-x-2">
                <Badge className="space-x-2 py-1">
                  <BadgeDot className="size-3 border-2" />
                  <span>Interesting</span>
                </Badge>
                <Badge className="space-x-2 py-1">
                  <SendIcon className="size-3" />
                  <span>Campaign Name</span>
                </Badge>
              </div>
            </div>
          </>
        ))}
      </div>
      {currentMail ? (
        <div className="flex h-full flex-col gap-4 overflow-auto">
          <div className="flex justify-between gap-2 border-b border-border px-6 py-4">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">
                {currentMail.fromName}
              </span>
              <span className="font-normal text-foreground-muted">
                {currentMail.fromEmail}
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
              <Dialog
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
              >
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
                    <DialogTrigger asChild>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <TrashIcon className="size-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </DialogTrigger>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className="flex min-h-[35dvh] min-w-[30dvw] flex-col items-center justify-around">
                  <div className="text-3xl font-semibold">Are your Sure ?</div>
                  <span>Your selected email will be deleted.</span>
                  <div className="flex items-center gap-4">
                    <DialogClose asChild>
                      <Button variant="secondary" className="bg-[#25262B]">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      className="from-[#FA5252] to-[#A91919]"
                      onClick={async () => {
                        await deleteMailThread.mutateAsync();
                        setShowThread(false);
                        setCurrentMail(null);
                        await mails.refetch();
                        toast.success("Email deleted successfully");
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {!showThread && (
            <>
              <div className="flex w-full items-center px-6 py-2">
                <Separator className="flex-1" />
                <span className="bg-muted-lighter px-3 py-1 text-sm">
                  {new Date(currentMail.sentAt).toLocaleDateString()}
                </span>
                <Separator className="flex-1" />
              </div>
              <Card className="mx-6 flex flex-col gap-2 px-4 py-4">
                <div className="flex items-center gap-2">
                  <span>{currentMail.subject}</span>
                  <span className="ml-auto text-sm font-normal text-foreground-muted">
                    {new Date(currentMail.sentAt).toLocaleTimeString()}
                  </span>
                </div>
                <div className="text-foreground-muted">
                  from : {currentMail.fromName} cc : {currentMail.cc}
                  <br />
                  to: {currentMail.toName}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: currentMail.body }}
                ></div>
              </Card>
            </>
          )}
          {showThread &&
            mailThread.data?.data.map((mail) => (
              <>
                <div className="flex w-full items-center px-6 py-2">
                  <Separator className="flex-1" />
                  <span className="bg-muted-lighter px-3 py-1 text-sm">
                    {new Date(mail.sentAt).toLocaleDateString()}
                  </span>
                  <Separator className="flex-1" />
                </div>
                <Card className="mx-6 flex flex-col gap-2 px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span>{mail.subject}</span>
                    <span className="ml-auto text-sm font-normal text-foreground-muted">
                      {new Date(mail.sentAt).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="text-foreground-muted">
                    from : {mail.fromName} cc : {mail.cc}
                    <br />
                    to: {mail.toName}
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: mail.body }}></div>
                </Card>
              </>
            ))}
          {!showThread && (mailThread.data?.data.length ?? 0) - 1 > 0 && (
            <div className="flex w-full items-center px-6 py-2">
              <Separator className="flex-1" />
              <button
                className="flex items-center gap-1 bg-muted-lighter px-3 py-1 text-sm"
                onClick={() => setShowThread(true)}
              >
                <UnfoldVerticalIcon className="mr-1 size-4 text-muted-foreground" />
                View All
                <span className="text-accent">
                  {mailThread.data?.data.length ?? 0}
                </span>
                Replies
              </button>
              <Separator className="flex-1" />
            </div>
          )}
          <div className="flex flex-1 items-end px-6 py-4">
            <Button className="flex items-center gap-2">
              <ReplyIcon className="size-4" />
              Reply
            </Button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col gap-4 border-l border-border px-4 py-6">
        <div className="w-full rounded-lg bg-muted px-2 py-3 font-bold">
          Lead Details
        </div>
        <div className="grid grid-cols-2 gap-4 px-2">
          {Object.entries({
            Name: currentMail?.fromName,
            Email: currentMail?.fromEmail,
            Phone: "1234567890",
            LinkedIn: "linkedin.com/" + currentMail?.fromName,
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
                Step 2: Email
                <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
                  <SendIcon className="size-4 text-muted-foreground" />
                  Sent <span className="font-semibold">2, Feb</span>
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm font-semibold">
                Step 3: Email
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
